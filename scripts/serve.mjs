import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("dist");
const routes = new Set(
  JSON.parse(await readFile(path.join(root, "route-manifest.json"), "utf8")),
);
const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const port = Number(
  portIndex >= 0 ? args[portIndex + 1] : process.env.PORT || 3002,
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};
createServer(async (req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" });
      res.end();
      return;
    }
    const url = new URL(req.url, "http://localhost");
    let requested;
    try {
      requested = decodeURIComponent(url.pathname);
    } catch {
      res.writeHead(400);
      res.end("Bad request");
      return;
    }
    if (requested.includes("\\") || requested.includes("\0")) {
      res.writeHead(400);
      res.end();
      return;
    }
    const clean =
      requested
        .replace(/\/index\.html$/, "")
        .replace(/\/{2,}/g, "/")
        .replace(/\/+$/, "") || "/";
    if (routes.has(clean) && requested !== clean) {
      res.writeHead(301, { Location: clean + url.search });
      res.end();
      return;
    }
    let file = routes.has(requested)
      ? path.join(
          root,
          requested === "/" ? "index.html" : requested.slice(1) + "/index.html",
        )
      : path.resolve(root, "." + requested);
    if (!file.startsWith(root + path.sep) && file !== root) {
      res.writeHead(403);
      res.end();
      return;
    }
    let status = 200;
    try {
      if (!(await stat(file)).isFile()) throw new Error("Missing file");
    } catch {
      file = path.join(root, "404.html");
      status = 404;
    }
    const headers = {
      "Content-Type": types[path.extname(file)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Cache-Control":
        file.includes(path.sep + "assets" + path.sep) &&
        /[-][a-zA-Z0-9_-]{8,}\./.test(file)
          ? "public, max-age=31536000, immutable"
          : "public, max-age=0, must-revalidate",
      ...(status === 404 ? { "X-Robots-Tag": "noindex" } : {}),
    };
    res.writeHead(status, headers);
    res.end(req.method === "HEAD" ? undefined : await readFile(file));
  } catch {
    res.writeHead(500);
    res.end("Server error");
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Production preview: http://127.0.0.1:${port}/`),
);
