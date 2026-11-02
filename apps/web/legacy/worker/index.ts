import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Serve files from R2 storage
app.get("/api/assets/:filename", async (c) => {
  const filename = c.req.param("filename");
  const object = await c.env.R2_BUCKET.get(`assets/${filename}`);
  
  if (!object) {
    return c.json({ error: "File not found" }, 404);
  }
  
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000");
  
  return c.body(object.body, { headers });
});

// Seed images from external URLs to R2 (one-time setup)
app.post("/api/seed-assets", async (c) => {
  const assets = [
    {
      filename: "logo.png",
      url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/65174816-5125-47d8-a789-bf701da27093.png"
    },
    {
      filename: "honey-jars.jpeg",
      url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/4c189b84-7975-4f04-a34a-3056bcffe7bf.jpg"
    },
    {
      filename: "bees-1.jpeg",
      url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/650a2c75-f928-47b9-9146-868df6cdb642.jpg"
    },
    {
      filename: "bees-2.jpeg",
      url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/95e086bc-5b1a-47c7-a890-d3059ee72b19.jpg"
    }
  ];
  
  const results = [];
  
  for (const asset of assets) {
    try {
      const response = await fetch(asset.url);
      if (!response.ok) {
        results.push({ filename: asset.filename, success: false, error: "Failed to fetch" });
        continue;
      }
      
      const contentType = response.headers.get("Content-Type") || "application/octet-stream";
      const buffer = await response.arrayBuffer();
      
      await c.env.R2_BUCKET.put(`assets/${asset.filename}`, buffer, {
        httpMetadata: { contentType }
      });
      
      results.push({ filename: asset.filename, success: true });
    } catch (error) {
      results.push({ filename: asset.filename, success: false, error: String(error) });
    }
  }
  
  return c.json({ results });
});

export default app;
