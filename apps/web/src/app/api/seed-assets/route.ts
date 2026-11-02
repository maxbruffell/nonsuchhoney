import { NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({});

const ASSETS = [
  {
    filename: "logo.png",
    url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/65174816-5125-47d8-a789-bf701da27093.png",
  },
  {
    filename: "honey-jars.jpeg",
    url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/4c189b84-7975-4f04-a34a-3056bcffe7bf.jpg",
  },
  {
    filename: "bees-1.jpeg",
    url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/650a2c75-f928-47b9-9146-868df6cdb642.jpg",
  },
  {
    filename: "bees-2.jpeg",
    url: "https://dtvoeevhaseb5.cloudfront.net/uploads/mocha-import/76c278f6-5620-491e-b3c5-795619ecae4d/95e086bc-5b1a-47c7-a890-d3059ee72b19.jpg",
  },
];

function joinKey(prefix: string | undefined, key: string) {
  if (!prefix) return key;
  const trimmed = prefix.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${trimmed}/${key}` : key;
}

export async function POST() {
  const bucket = process.env.S3_BUCKET;
  if (!bucket) {
    return NextResponse.json(
      { error: "S3_BUCKET is not configured" },
      { status: 500 },
    );
  }

  const results: Array<{
    filename: string;
    success: boolean;
    error?: string;
  }> = [];

  for (const asset of ASSETS) {
    try {
      const response = await fetch(asset.url);
      if (!response.ok) {
        results.push({
          filename: asset.filename,
          success: false,
          error: "Failed to fetch",
        });
        continue;
      }

      const contentType =
        response.headers.get("Content-Type") || "application/octet-stream";
      const buffer = Buffer.from(await response.arrayBuffer());

      await s3.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: joinKey(process.env.S3_PREFIX, `assets/${asset.filename}`),
          Body: buffer,
          ContentType: contentType,
        }),
      );

      results.push({ filename: asset.filename, success: true });
    } catch (error) {
      results.push({
        filename: asset.filename,
        success: false,
        error: String(error),
      });
    }
  }

  return NextResponse.json({ results });
}
