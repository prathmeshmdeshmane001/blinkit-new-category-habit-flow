# Document and File Integration

## 1. Document & File Upload / Import Mechanism
- **End-User Document Upload**: Not currently implemented.
- **Static Asset Import**: In the current codebase, photographic media and vector assets are imported statically as local files located in the `/assets/` directory (`/assets/categories/`, `/assets/clothing/`, `/assets/items/`). These are served directly over HTTP by `server.js` or copied into `dist/assets/` during the Vite build pipeline via `vite.config.js`.

---

## 2. Supported Document Types
- **End-User Documents**: Not currently implemented. No user-facing document upload input exists in the application interface.
- **Static Asset Formats Supported by Server (`server.js`)**:
  - Image files: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`, `.ico`
  - Web fonts: `.woff`, `.woff2`, `.ttf`
  - Text and Code: `.html`, `.js`, `.mjs`, `.css`, `.json`

---

## 3. Document Parsing & Extraction
- **Text / Data Extraction**: Not currently implemented.
- **OCR / Receipt / Prescription Processing**: Not currently implemented.

---

## 4. Processing Flow
- **Document Ingestion Pipeline**: Not currently implemented.
- **Static Asset Serving Flow**:
  1. Browser requests an asset URL (e.g., `/assets/pasta-night.png` or `/assets/categories/veg-fruits.jpg`).
  2. In development, `server.js` resolves the path relative to `__dirname`, verifies directory boundaries, sets the MIME type header (`Content-Type: image/png` or `image/jpeg`), and streams the file buffer to the client with `Cache-Control: no-cache`.
  3. In production, Vite bundles scripts and the `copy-assets-to-dist` plugin ensures all asset files are located inside `dist/assets/` for static delivery by Netlify CDN.

---

## 5. Third-Party Document Integrations
- **PDF Integration**: Not currently implemented.
- **Microsoft Word (.doc / .docx) Integration**: Not currently implemented.
- **Google Docs Integration**: Not currently implemented.
- **Google Drive API Integration**: Not currently implemented.
- **Cloud Storage (AWS S3, GCP Cloud Storage, Cloudinary)**: Not currently implemented.

---

## 6. APIs and Libraries Used
- **Document Processing Libraries**: None.
- **Node.js Core Modules Used for Static Files**:
  - `node:fs` (`fs.stat`, `fs.readFile`, `fs.existsSync`, `fs.cpSync`)
  - `node:path` (`path.join`, `path.extname`, `path.dirname`)
  - `node:http` (`http.createServer`)
  - `node:url` (`fileURLToPath`)

---

## 7. Configuration and Environment Variables
- **Document Processing Environment Variables**: None.
- **Server Port Variable**: `process.env.PORT` in `server.js` (defaults to `5173`).

---

## 8. Current Limitations
1. **No Prescription Upload for Pharma**: The prototype includes OTC wellness and first aid kits (`medicine-firstaid-combo`, `cold-care-combo`), but lacks prescription document upload functionality required for regulated pharmaceutical deliveries.
2. **No Automated Invoice Generation**: Invoices are not rendered as downloadable PDF documents; order totals and breakdowns are rendered strictly in HTML on `Screen 4 (Cart)` and `Screen 7 (Tracking)`.
3. **In-Memory Assets Only**: Uploading custom photos or user avatars dynamically from the browser is not supported; imagery is read from static paths.
