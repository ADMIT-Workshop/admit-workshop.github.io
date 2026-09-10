import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { ImageResponse } from "next/og.js";

// Rasterize the editable SVG for older browsers and Apple home-screen icons.
const svg = await readFile(new URL("../public/favicon.svg", import.meta.url));
const src = `data:image/svg+xml;base64,${svg.toString("base64")}`;

async function png(size) {
  const response = new ImageResponse(
    createElement("img", { src, width: size, height: size }),
    { width: size, height: size },
  );
  return Buffer.from(await response.arrayBuffer());
}

const icon = await png(48);
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); // ICO format.
header.writeUInt16LE(1, 4); // One image.
header[6] = 48;
header[7] = 48;
header.writeUInt16LE(1, 10); // Color planes.
header.writeUInt16LE(32, 12); // Bits per pixel.
header.writeUInt32LE(icon.length, 14);
header.writeUInt32LE(header.length, 18);

await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([header, icon]),
);
await writeFile(
  new URL("../public/apple-touch-icon.png", import.meta.url),
  await png(180),
);
