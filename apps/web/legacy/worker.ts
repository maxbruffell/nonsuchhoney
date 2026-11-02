// @ts-nocheck
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
      url: "https://019d15fe-5d82-7b3a-b92e-04eab79f98ca.mochausercontent.com/NONSUCH-HONEY.png"
    },
    {
      filename: "honey-jars.jpeg",
      url: "https://019d15fe-5d82-7b3a-b92e-04eab79f98ca.mochausercontent.com/89DDED61-1EDB-41E0-ACBF-96D9BCE9A277.jpeg"
    },
    {
      filename: "bees-1.jpeg",
      url: "https://019d15fe-5d82-7b3a-b92e-04eab79f98ca.mochausercontent.com/IMG_1746.jpeg"
    },
    {
      filename: "bees-2.jpeg",
      url: "https://019d15fe-5d82-7b3a-b92e-04eab79f98ca.mochausercontent.com/IMG_1459.jpeg"
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
