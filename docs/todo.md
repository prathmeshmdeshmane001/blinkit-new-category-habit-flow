# Project Roadmap & Known Issues (TODO)

## Codebase Audit Summary
A full codebase scan for `TODO` and `FIXME` comments returned **0 existing literal inline TODO comments**. The items documented below represent identified technical debt, known limitations, and prioritized roadmap improvements based on an architectural review of the repository.

---

## High Priority

### Known Limitations & Incomplete Features
1. **Cart State Persistence Across Reloads**
   - *Status*: Existing Limitation.
   - *Description*: `src/state/cartStore.js` stores state purely in memory. A browser refresh resets the user's cart to the hardcoded default items (1x Potato, 2x Onion).
   - *Improvement*: Connect `cartStore` to `localStorage` on mutation and rehydrate state on startup.

2. **Interactive Search Query Execution**
   - *Status*: Existing Limitation.
   - *Description*: Search inputs in `HomeScreen.js` and `CategoryScreen.js` are visual inputs with placeholders, but typing does not actively filter the product or category catalog.
   - *Improvement*: Add an `input` event listener with debouncing to filter `FEATURED_COMBOS` and category lists in real time.

3. **Dynamic Product Detail Routing**
   - *Status*: Existing Limitation.
   - *Description*: Navigating to `#/product` always renders the static Borges Penne Rigate item.
   - *Improvement*: Support route parameters (e.g., `#/product?id=xyxx-trunks`) to dynamically render any product or combo detail.

---

## Medium Priority

### Functional Enhancements
1. **Address Selection Synchronization**
   - *Status*: Suggested Improvement.
   - *Description*: Tapping alternate addresses in `AddressScreen.js` renders visual selections but does not persist the choice back to `cartStore.selectedAddress`.
   - *Improvement*: Add a setter `cartStore.setSelectedAddress(address)` and update the header across screens.

2. **Automated Order Receipt & History**
   - *Status*: Suggested Improvement.
   - *Description*: Once payment is confirmed on `PaymentScreen.js`, the user is routed to `TrackingScreen.js`. There is no persistent past orders history screen.
   - *Improvement*: Add an `orderHistory` collection to `CartStore` and wire the "Order Again" bottom navigation tab (`#/order-again`).

3. **Size Selector Modal for Apparel**
   - *Status*: Suggested Improvement.
   - *Description*: In `NewForYouScreen.js`, apparel items (Jockey Vest, XYXX Trunks) default to size M/L.
   - *Improvement*: Render an iOS size picker bottom sheet (S, M, L, XL, XXL) prior to adding clothing items to the cart.

---

## Low Priority

### Technical Debt & Optimization
1. **Build-Time CSS Compilation (Tailwind CLI)**
   - *Status*: Technical Debt.
   - *Description*: Tailwind CSS is currently loaded at runtime via CDN script (`https://cdn.tailwindcss.com`).
   - *Improvement*: Install Tailwind CLI / PostCSS plugin into the Vite pipeline to purge and bundle compiled CSS into `dist/`, eliminating runtime CDN dependencies.

2. **Consistent Event Binding Architecture**
   - *Status*: Technical Debt.
   - *Description*: Some buttons use modern `addEventListener`, while certain template strings use inline `onclick="router.navigate(...)"` attributes.
   - *Improvement*: Standardize all event attachments to programmatic `addEventListener` calls within container scopes.

3. **Automated Unit & End-to-End Tests**
   - *Status*: Suggested Improvement.
   - *Description*: The project currently relies on manual preview testing and `node -c` syntax checks.
   - *Improvement*: Introduce Vitest or Playwright for automated assertions on cart calculations, savings math, and navigation flows.
