# System Architecture

## Overview
The **Blinkit New-Category Habit Flow** application is a lightweight, client-side quick-commerce web prototype modeled inside an iPhone 17 mobile viewport. It is designed to demonstrate habit formation and category discovery workflows (curated routine combos, transparent price savings, undergarments & apparel aisles, and risk-free trial guarantees).

---

## 1. Frontend Architecture

### Technology Stack
- **Language**: Modern Vanilla JavaScript (ECMAScript Modules / ES6+).
- **Markup**: HTML5.
- **Styling**: Tailwind CSS (v3.4) delivered via CDN (`https://cdn.tailwindcss.com`) with a customized inline theme configuration in `index.html`.
- **Typography & Iconography**: Google Fonts (`Inter`) and Google Material Symbols Outlined.
- **Form Factor**: Responsive iPhone 17 mobile chassis container (`402px x 874px`) with Dynamic Island micro-interactions, pinned iOS status bar, and fixed bottom navigation.

### Client-Side Routing (`src/router.js`)
- **Pattern**: Custom Hash-based Single Page Application (SPA) Router.
- **Mechanism**: Listens to browser `hashchange` and `load` events.
- **Route Schema**: `#/route?queryParam=value`.
- **Registered Routes**:
  - `#/home` or `#/`: Main discovery feed with Banger Combos carousel, delivery timer, and category shortcuts.
  - `#/category`: 4-column native grid layout modeled after the native Blinkit Category screen (Grocery & Kitchen, Snacks & Drinks).
  - `#/product`: Product detail screen featuring "Frequently Bought Together" bundles.
  - `#/cart`: Primary shopping cart screen with the Pasta Night Routine Combo switcher and bill breakdown.
  - `#/cart-variant`: Alternative cart layout displaying inline combo discovery prompts.
  - `#/address`: Delivery location selection screen with Koramangala Hub delivery ETA calculation.
  - `#/payment`: Payment method selection with 100% Risk-Free Guarantee badge.
  - `#/tracking`: Live simulated GPS delivery tracking map and habit completion streak.
  - `#/guarantee`: Terms and assurances for the 100% Risk-Free Trial Guarantee.
  - `#/new-for-you`: Discovery page featuring new product aisles, including Undergarments & Clothing Basics.

### State Management (`src/state/cartStore.js`)
- **Pattern**: Observable / Pub-Sub Singleton Store (`CartStore`).
- **State**:
  - `items`: Array of active cart items with `id`, `name`, `unit`, `price`, `originalPrice`, `qty`, `image`, and `category`.
  - `trialCombosAdded`: Set tracking added combo bundle identifiers.
  - `selectedAddress`: String representing the current active delivery location.
  - `appliedCoupon`: Active promotional discount code (e.g., `'BEAUTY15'`).
  - `deliveryEta`: Estimated arrival time string.
- **Reactivity**: Components register listener functions via `cartStore.subscribe(callback)`. Any mutation (`addItem`, `removeItem`, `setQty`, `addCombo`) triggers `cartStore.notify()`, executing all subscribed renderers.

### Component & Screen Structure
- **Components (`src/components/`)**:
  - `BottomNav.js`: 5-tab native navigation bar with active route highlight and the glowing "New on Blinkit ↗" exploration button.
  - `ComboCard.js`: Reusable routine combo card displaying itemized products, standalone pricing, bundle pricing, and net savings.
  - `ComboModal.js`: Slide-up bottom sheet modal displaying comprehensive product specs and transparent math proof.
  - `DevToolbar.js`: Development screen selector toolbar for rapid switching between prototype screens.
- **Screens (`src/screens/`)**:
  - Dedicated renderer functions (`renderHomeScreen`, `renderCategoryScreen`, etc.) that inject HTML into `#screen-container` and attach event listeners.

---

## 2. Backend Architecture

### Development & Local Server (`server.js`)
- **Runtime**: Node.js (v18+).
- **Framework**: Built-in `node:http` server with zero external npm runtime dependencies.
- **Static Asset Streaming**: Maps file extensions to standard MIME types (HTML, JS, CSS, JSON, PNG, JPG, SVG, WebP, WOFF2, TTF).
- **SPA Fallback**: If an extensionless route is requested directly, the server returns `index.html` with status 200 to facilitate client-side routing.
- **Port Conflict Handling**: Automatically tries incremental ports if the default port (`5173` or `process.env.PORT`) is already in use (`EADDRINUSE`).
- **Security Check**: Restricts file reading strictly to directory children using `filePath.startsWith(__dirname)` to prevent path traversal attacks.

### Production Build Pipeline (`vite.config.js` & `package.json`)
- **Bundler**: Vite 5 (`npm run build`).
- **Output Directory**: `dist/`.
- **Custom Build Plugin**: `copy-assets-to-dist` copies the local `assets/` directory (photographs of combos, items, categories, and apparel) to `dist/assets/` upon bundle completion.

---

## 3. Database Architecture
- **Current Implementation**: No relational (SQL) or document (NoSQL) database server is used.
- **Data Storage**: State is held in-memory within the running browser session via `src/state/cartStore.js`.
- **Static Product Catalog**: Predefined in `src/data/combos.js` as an exportable array of 8 curated routine bundles (`FEATURED_COMBOS`).
- **Persistence**: State resets to default mock values upon a full browser page reload.

---

## 4. APIs & Network Calls
- **Internal APIs**: None. There are no backend REST or GraphQL API endpoints implemented in `server.js`.
- **External Network Dependencies**:
  - `https://cdn.tailwindcss.com` (CSS engine)
  - `https://fonts.googleapis.com` (Inter font & Material Symbols Outlined stylesheet)
  - `https://fonts.gstatic.com` (Web font files)
  - Legacy mock images hosted on `https://lh3.googleusercontent.com` (supplemented by 100% local assets in `/assets/`).

---

## 5. Authentication & Authorization
- **Current Implementation**: No backend authentication, session cookies, OAuth, or JWT tokens are implemented.
- **UI Mock Profile**: Clicking the profile avatar triggers a simulated Gold Member status notification. Address and wallet displays (`💵 ₹0`) are mock user attributes.

---

## 6. External Services & Hosting
- **Hosting & CDN**: Configured for **Netlify** via `netlify.toml`:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Client-side redirect rule: `/*` redirects to `/index.html` with HTTP 200.
- **Source Control**: Hosted on **GitHub** (`prathmeshmdeshmane001/blinkit-new-category-habit-flow`).

---

## 7. Important Folders and Files

```
├── assets/                     # 100% local photographic images (combos, items, clothing, categories)
├── dist/                       # Production build output generated by Vite
├── docs/                       # Project architecture, rules, queries, and integration documentation
├── index.html                  # Main application HTML shell and iPhone 17 chassis
├── netlify.toml                # Netlify deployment and SPA rewrite configuration
├── package.json                # Project scripts and Vite build dependencies
├── quick_commerce_mobile_experience/ # Design system specification (DESIGN.md)
├── screenshots/                # High-resolution PNG captures of all 11 prototype screens
├── server.js                   # Node.js zero-dependency static HTTP server with SPA fallback
├── src/
│   ├── components/             # Reusable UI components (BottomNav, ComboCard, ComboModal, DevToolbar)
│   ├── data/                   # Mock static data catalogs (combos.js)
│   ├── main.js                 # Application bootstrap and core UI lifecycle
│   ├── router.js               # Client-side hash routing system
│   ├── screens/                # Screen view modules (Home, Category, Cart, Tracking, etc.)
│   └── state/                  # Reactive in-memory state store (cartStore.js)
├── USER_JOURNEY_AND_WIREFRAMES.txt # End-to-end user journey and ASCII wireframes
└── vite.config.js              # Vite bundler configuration with asset copying hook
```

---

## 8. Data Flow & Component Interaction

```
[ User Interaction (Tap "Add Combo" / "ADD" / Filter) ]
                         │
                         ▼
             [ Component / Screen View ]
        (e.g., HomeScreen.js, ComboCard.js)
                         │
                         ▼
                [ CartStore Action ]
         (addItem, removeItem, setQty, addCombo)
                         │
                         ▼
             [ CartStore State Mutation ]
   (Updates items array, recalculates subtotals/savings)
                         │
                         ▼
                [ this.notify() ]
                         │
                         ▼
          [ Active Screen / Component Subscribers ]
   (Re-renders updated quantities, badges, and sticky cart bar)
```

1. The user launches the app or navigates to a route hash (e.g. `#/category`).
2. `src/router.js` detects the hash change and invokes registered router subscribers in `src/main.js`.
3. `src/main.js` imports and executes the matching screen function in `src/screens/`.
4. The screen reads static data from `src/data/combos.js` and dynamic cart state from `src/state/cartStore.js`.
5. When the user modifies cart items or adds a routine bundle, `cartStore` mutates its in-memory list and notifies all subscribers.
6. The sticky bottom cart bar and screen badges update instantly without page refreshes.
