# ⚡ Blinkit: New-Category Discovery & Habit Flow Prototype

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/ES6-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify%20Ready-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

An interactive quick-commerce web application prototype designed for **Blinkit**, solving the classic retention problem: *nudging high-frequency grocery shoppers into discovering, trying, and building shopping habits around higher-margin, untried categories* (Beauty & Skincare, Undergarments & Apparel, Electronics & Tech, OTC Medicine, Fitness & Snacks).

Framed inside a pixel-perfect **iPhone 17 mobile chassis** with 100% genuine photographic product imagery, real-time client-side routing, and reactive cart state.

---

## 🌟 Key Features & Innovations

### 1. 🔥 Banger Combos with Transparent Math & Savings
- Solves trial resistance by offering **curated routine bundles** rather than standalone unfamiliar items.
- **Transparent Mathematical Proof Box**: Itemizes standalone retail prices vs. bundle price, explicitly showing users the exact money saved (up to 31% OFF).
- **Interactive iOS Bottom Sheet Modal**: Tap any combo card on the Home feed to slide open product photos, quantities, and single-click cart addition.
- **Combos Included**:
  - 🍝 **Pasta Night Routine Combo**: Borges Durum Wheat Penne (500g) + Barilla Arrabiata Sauce (400g) + Dlecta Grated Parmesan (80g) — *Save ₹76 (29% OFF)*
  - 👕 **Fresh Cotton Innerwear & Socks Pack**: 2x XYXX Modal Trunks + 1x Jockey Combed Cotton Undershirt + 3x Puma Ankle Socks — *Save ₹208 (30% OFF)*
  - 💄 **Glow & Radiance Skincare Routine**: Plum Green Tea Face Wash + Kama Rose Water + Minimalist 10% Vitamin C Serum — *Save ₹140 (29% OFF)*
  - 🩹 **Emergency First Aid & Pain Relief Kit**: Digital Thermometer + Dettol Spray + Hansaplast + Volini Gel — *Save ₹126 (30% OFF)*
  - 🍵 **Cold, Cough & Immunity Pack**: Vicks VapoRub + Dabur Honitus Lozenges + Fast&Up Vitamin C + Electral ORS — *Save ₹76 (28% OFF)*
  - 🔌 **WFH Tech & Power Accessories Pack**: 65W Braided Fast Cable + boAt 20W Dual Adapter + Aluminium Phone Stand — *Save ₹249 (31% OFF)*
  - 🍪 **High-Protein Bar & Healthy Cookies Pack**: Yoga Bar 20g Whey Bar + RiteBite Max Bar + Open Secret Cookies + Phab Protein Fudge — *Save ₹90 (28% OFF)*

---

### 2. 🔲 Authentic Blinkit 4-Column Category Discovery Grid
- Replicates Blinkit's native category interface with warm golden header glow (`from-[#fed7aa] via-[#fef08a] to-white`), delivery counter (*"Blinkit in 20 minutes"*), wallet pill (`💵 ₹0`), and search input with mic trigger.
- **Sectioned Pastel Category Tiles (`bg-[#edf6f9]`)**:
  - **Grocery & Kitchen**: Vegetables & Fruits, Atta Rice & Dal, Oil Ghee & Masala, Dairy Bread & Eggs, Bakery & Biscuits, Dry Fruits & Cereals, Meat & Fish, Kitchenware & Appliances.
  - **Snacks & Drinks**: Chips & Namkeen, Sweets & Chocolates, Drinks & Juices, Tea Coffee & Milk Drinks, Instant Food, Sauces & Spreads, Beauty & Personal Care, Pharma & Wellness.

---

### 3. 👕 Undergarments & Clothing Basics ("New on Blinkit")
- Quick-commerce innerwear and everyday essentials delivered in 10-12 minutes.
- **100% Real Product Photography**:
  - XYXX Micro-Modal Anti-Bacterial Trunks (Pack of 2)
  - Jockey 100% Combed Cotton Ribbed Undershirt Vest
  - Amante Seamless Comfort Non-Wired Bralette
  - Puma All-Day Cushioned Cotton Ankle Socks (Pack of 3)
  - Van Heusen 100% Supima Cotton Solid Lounge T-shirt
- **100% Risk-Free Guarantee**: Prominent *"7-Day Free Doorstep Size Exchange"* assurance to eliminate apparel trial friction.

---

### 4. 🧭 Dedicated "Explore New Items on Blinkit ↗" Bottom Navigation
- Native 5-tab bottom navigation featuring:
  1. 🏠 **Home**
  2. 🛍️ **Order Again**
  3. 🔲 **Categories**
  4. 🛒 **Cart** *(live reactive badge count)*
  5. 💜 **New on Blinkit ↗**: Glowing purple exploration button that takes users directly to newly launched aisles, trial packs, and routine combos.

---

### 5. 🛒 Reactive Cart Store & State Management
- Lightweight subscriber-based store (`cartStore.js`) managing item quantities, combos, subtotals, delivery fees, and grand totals across all screens.
- Synchronized cart floating pill, sticky checkout bars, and dynamic badges.

---

## 📱 Interactive Screen Flow

| Screen | Route | Highlights |
|---|---|---|
| **Home Screen** | `#/` or `#/home` | Delivery ETA, First-time discovery coupons, **Banger Combos** carousel with category filtering, quick category pills. |
| **Category Discovery** | `#/category` | Faithful 4-column native grid layout with real photographic category icons and category-level discovery. |
| **Product Detail** | `#/product` | Full product view with *"Frequently Bought Together"* routine bundles. |
| **My Cart** | `#/cart` | Active items list, transparent bill breakdown, and **Pasta Night Routine Combo** with 1-tap bundle add. |
| **Delivery Address** | `#/address` | Address selector with Koramangala Hub ETA calculation. |
| **Payment & Guarantee** | `#/payment` | 100% Risk-Free Guarantee badge, UPI / Cards / Cash on Delivery options. |
| **Live Order Tracking** | `#/tracking` | Interactive simulated GPS tracking with rider route animation, habit completion progress, and next-order combo recommendations. |
| **New on Blinkit** | `#/new-for-you` | Personalized discovery feed featuring **Undergarments & Clothing Basics**, unvisited aisles, and exclusive trial packs. |

---

## 🛠️ Tech Stack & Architecture

- **Runtime & Bundler**: [Vite 5](https://vitejs.dev/) with native ES Modules
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) with Blinkit brand tokens (`primary: #0c831f`, `secondary: #f97316`)
- **Typography & Icons**: [Google Material Symbols Outlined](https://fonts.google.com/icons) & Plus Jakarta Sans
- **Image Assets**: 100% local, optimized photographic images in `/assets/` (no broken external links or vector SVGs)
- **Deployment**: Configured for **Netlify** with single-page app (SPA) fallback redirects in `netlify.toml`

---

## 📂 Project Structure

```
├── assets/                       # Real photographic images (combos, items, categories, clothing)
│   ├── categories/               # 16 authentic category grid images
│   ├── clothing/                 # Undergarments & apparel product photos
│   ├── items/                    # Standalone product photographs
│   └── pasta-night.png           # Plated gourmet pasta hero photo
├── dist/                         # Vite production build output
├── src/
│   ├── components/
│   │   ├── BottomNav.js          # Bottom navigation bar with "New on Blinkit ↗"
│   │   ├── ComboCard.js          # Reusable Banger Combo card with math proof
│   │   ├── ComboModal.js         # iOS bottom sheet detail modal
│   │   └── DevToolbar.js         # Developer screen switcher
│   ├── data/
│   │   └── combos.js             # Catalog of 8 curated routine combos & savings math
│   ├── screens/
│   │   ├── CartScreen.js         # My Cart with Pasta Night switcher
│   │   ├── CategoryScreen.js     # 4-column native Blinkit category screen
│   │   ├── HomeScreen.js         # Landing feed featuring Banger Combos
│   │   ├── NewForYouScreen.js    # New on Blinkit with Undergarments aisle
│   │   ├── PaymentScreen.js      # Checkout & Risk-Free Guarantee
│   │   ├── ProductDetailScreen.js# Product view & bundle prompt
│   │   └── TrackingScreen.js     # Live delivery tracker with habit tracker
│   ├── state/
│   │   └── cartStore.js          # Reactive cart and order state store
│   ├── main.js                   # Application bootstrap
│   └── router.js                 # Client-side hash & history router
├── index.html                    # iPhone 17 chassis viewport and shell
├── netlify.toml                  # Netlify production build & redirect rules
├── package.json                  # Dependencies & npm scripts
├── server.js                     # Zero-dependency local Node.js static server
└── vite.config.js                # Vite build config with automatic asset copying
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prathmeshmdeshmane001/blinkit-new-category-habit-flow.git
   cd blinkit-new-category-habit-flow
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *or run the zero-dependency static server:*
   ```bash
   node server.js
   ```

4. **Open in browser**:
   Navigate to **`http://localhost:3000/`** (Vite) or **`http://localhost:5173/`** (Node server).

---

## 📦 Production Build & Netlify Deployment

### Local Production Build
```bash
# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

### Netlify Deployment
This repository is pre-configured for Netlify deployment via [`netlify.toml`](./netlify.toml):
1. Import the repository in your [Netlify Dashboard](https://app.netlify.com/).
2. Netlify will auto-detect the configuration:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy**. SPA routing and client-side page refreshes are handled automatically via the `/* -> /index.html` 200 redirect rule.

---

## 📄 License
This project is an experimental UX prototype built for product demonstration purposes.
