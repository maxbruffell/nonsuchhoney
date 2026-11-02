import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand, NoSuchKey, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({});

function joinKey(prefix: string | undefined, key: string) {
  if (!prefix) return key;
  const trimmed = prefix.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${trimmed}/${key}` : key;
}

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ filename: string }> },
) {
  const { filename } = await ctx.params;
  const bucket = process.env.S3_BUCKET;

  if (!bucket) {
    return NextResponse.json(
      { error: "S3_BUCKET is not configured" },
      { status: 500 },
    );
  }

  const key = joinKey(process.env.S3_PREFIX, `assets/${filename}`);

  try {
    const result = await s3.send(
      new GetObjectCommand({ Bucket: bucket, Key: key }),
    );
    const body = result.Body;
    if (!body) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const headers = new Headers();
    if (result.ContentType) headers.set("Content-Type", result.ContentType);
    if (result.ContentLength != null)
      headers.set("Content-Length", String(result.ContentLength));
    if (result.ETag) headers.set("ETag", result.ETag);
    headers.set("Cache-Control", "public, max-age=31536000");

    return new NextResponse(body.transformToWebStream(), { headers });
  } catch (error) {
    if (
      error instanceof NoSuchKey ||
      (error as { name?: string })?.name === "NoSuchKey" ||
      (error as { $metadata?: { httpStatusCode?: number } })?.$metadata
        ?.httpStatusCode === 404
    ) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to fetch asset", detail: String(error) },
      { status: 500 },
    );
  }
}
