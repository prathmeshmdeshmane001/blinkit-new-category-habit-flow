# Development & Engineering Rules

## 1. Coding Conventions
- **Language Standard**: ECMAScript 2022+ (ES Modules). Use standard `import` / `export` syntax.
- **Pure Vanilla JavaScript**: Do NOT introduce heavy frontend frameworks (React, Vue, Angular, Svelte) unless explicitly requested. Maintain the existing high-performance vanilla DOM paradigm.
- **Component Pattern**:
  - HTML generation: Functions returning template literals (e.g., `renderComboCardHtml(combo)`).
  - Event binding: Separate binding functions attaching DOM event listeners (e.g., `bindComboCardEvents(container, onUpdate)`).
- **DOM Manipulation**: Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`). Safely query elements with `container.querySelector(...)` or `container.querySelectorAll(...)`.
- **Formatting**: 2 spaces indentation, single quotes for strings, semicolons enabled.

---

## 2. Naming Conventions
- **Files & Folders**:
  - JavaScript modules: PascalCase for components (`ComboCard.js`, `ComboModal.js`, `BottomNav.js`) and screens (`HomeScreen.js`, `CategoryScreen.js`).
  - Core utilities and stores: camelCase (`router.js`, `cartStore.js`, `main.js`, `server.js`).
  - Images and static assets: kebab-case (`pasta-night.png`, `veg-fruits.jpg`, `cold-care-combo.jpg`).
- **Variables & Functions**:
  - Variables and object properties: `camelCase` (e.g., `activeComboIndex`, `singlePrice`, `deliveryFee`).
  - Component renderers: `camelCase` prefixed with `render` (e.g., `renderHomeScreen`, `renderComboCardHtml`).
  - Classes: `PascalCase` (e.g., `CartStore`, `Router`).
  - Constants & Enum-like datasets: `SCREAMING_SNAKE_CASE` (e.g., `FEATURED_COMBOS`, `MIME_TYPES`).
- **DOM Identifiers**:
  - Action IDs: camelCase (e.g., `#homeAddressBtn`, `#nfyBackBtn`, `#catViewCartBtn`).
  - Data attributes: kebab-case (e.g., `data-combo-id`, `data-cat`, `data-target`).

---

## 3. Folder & File Organization
- `src/components/`: Reusable, modular UI components that appear across multiple screens.
- `src/screens/`: High-level screen renderers corresponding 1-to-1 with route views.
- `src/state/`: Centralized reactive state stores.
- `src/data/`: Static data catalogs, product definitions, and statistics calculators.
- `assets/`: 100% local photographic images and vector assets.
- `docs/`: Technical and architectural documentation.

---

## 4. API & Data Access Conventions
- **In-Memory Operations**: State queries and mutations must interact exclusively through `cartStore` methods (`addItem`, `removeItem`, `setQty`, `getTotals`).
- **No Direct State Mutation**: Never mutate `cartStore.items` array directly from outside the class. Always invoke store methods so `this.notify()` executes for subscribers.
- **Catalog Lookups**: Query `FEATURED_COMBOS` using explicit unique identifiers (e.g., `FEATURED_COMBOS.find(c => c.id === 'pasta-night-combo')`) rather than hardcoded array indices (`FEATURED_COMBOS[0]`).

---

## 5. Security Rules
- **Path Traversal Protection**: In `server.js`, all incoming file paths must be strictly checked against `__dirname`:
  ```javascript
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  ```
- **XSS Prevention**: When injecting dynamic text into template literals, avoid rendering unescaped user input.
- **No Hardcoded Secrets**: Do not store sensitive API keys, private tokens, or credentials in client-side code or public repositories.

---

## 6. Environment Variable Rules
- The application is primarily a client-side static SPA and does not require runtime secrets.
- In `server.js`, support `process.env.PORT` with a graceful fallback to `5173`.
- Any local environment file (`.env`, `.env.local`) must remain gitignored.

---

## 7. Testing & Quality Verification Rules
- **Syntax Validation**: Verify all edited JavaScript files using Node's syntax checker before pushing:
  ```bash
  node -c src/main.js
  node -c src/state/cartStore.js
  node -c src/screens/HomeScreen.js
  ```
- **Build Verification**: Ensure `npm run build` runs cleanly without Vite bundler warnings or chunk resolution errors:
  ```bash
  npm run build
  ```
- **Preview Audit**: Verify HTTP status and assets using `npx vite preview` or `node server.js` before concluding tasks.

---

## 8. Git & GitHub Rules
- **Branching**: All primary changes target the `main` branch.
- **Atomic Commits**: Group related changes logically with clear, descriptive commit messages conforming to Conventional Commits (e.g., `feat: ...`, `fix: ...`, `docs: ...`).
- **Never Commit**: `node_modules/`, `dist/`, `.DS_Store`, or log files.
- **Safety First**: Never force-push (`git push --force`) or reset remote commit history.

---

## 9. Documentation Rules
- Maintain markdown files in `docs/` whenever architectural changes, new routes, or data catalogs are modified.
- Keep `README.md` and `USER_JOURNEY_AND_WIREFRAMES.txt` synchronized with application features.

---

## 10. Rules for Future AI Coding Agents
1. **Preserve Vanilla Architecture**: Do not install React, Next.js, or heavy bundlers unless the user explicitly commands a full framework migration.
2. **Preserve Device Frame**: Keep the iPhone 17 chassis (`index.html`) intact. The outer mobile container must remain responsive and centered.
3. **Preserve Local Photographic Media**: Never replace real `.jpg` / `.png` product photography with vector SVGs or hotlinked external URLs that risk 403 Forbidden errors.
4. **Preserve Explicit ID Lookups**: Always reference combos by their explicit `id` string (e.g. `'pasta-night-combo'`), never by array index.
5. **Preserve SPA Routing Compatibility**: When adding new screens, register the route in `src/main.js` and ensure extensionless paths fallback to `/index.html`.
