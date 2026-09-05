# Data Models, State Queries & Access Patterns

## 1. Database Technology
- **Database Engine**: Not currently implemented.
- **Data Access Mechanism**: Pure in-memory data structures using standard JavaScript (ES6) classes, Maps, Sets, and Arrays.
- **Dynamic State**: Managed by the singleton `CartStore` class (`src/state/cartStore.js`).
- **Static Catalog**: Stored as exportable data arrays in `src/data/combos.js`.

---

## 2. Schemas and Data Models

### 2.1 Cart Item Model (`CartItem`)
Represents an individual item or bundled routine package present in the user's shopping basket.

```typescript
interface CartItem {
  id: string;             // Unique identifier (e.g., 'potato', 'xyxx-trunks', 'pasta-night-combo')
  name: string;           // Display product name
  unit: string;           // Pack size or weight specification (e.g., '1 kg', 'Pack of 2 • M/L')
  price: number;          // Discounted selling price in INR
  originalPrice: number;  // Strikethrough MRP in INR
  qty: number;            // Current quantity in cart
  image: string;          // Root-relative asset path (e.g., '/assets/items/penne.jpg')
  badge?: string;         // Promotional pill text (e.g., '25% OFF', 'COMBO SAVER')
  category: string;       // Department (e.g., 'Fresh Vegetables', 'Clothing', 'Beauty')
  isCombo?: boolean;      // Boolean flag indicating whether the item is a routine combo
}
```

### 2.2 Routine Combo Model (`FeaturedCombo`)
Represents a curated multi-item routine bundle.

```typescript
interface ComboSubItem {
  id: string;             // Item identifier (e.g., 'borges-penne')
  name: string;           // Full title of component product
  unit: string;           // Weight/volume (e.g., '500 g')
  singlePrice: number;    // Standalone retail price in INR
  image: string;          // Asset image path
}

interface FeaturedCombo {
  id: string;             // Unique slug (e.g., 'pasta-night-combo', 'innerwear-basics-combo')
  title: string;          // Headline (e.g., 'Pasta Night Routine Combo')
  tagline: string;        // Descriptive value proposition
  category: string;       // Department filter ('Dinner', 'Clothing', 'Beauty', 'Medicine', 'Electronics', 'Fitness', 'Breakfast', 'Snacks')
  comboPrice: number;     // Bundled promotional price in INR
  badgeText: string;      // Savings badge (e.g., 'Save ₹76 (29% OFF)')
  image: string;          // Hero photographic picture path
  prepTime: string;       // Fulfillment ETA / preparation indicator (e.g., '15 mins', '8 mins dispatch')
  serves: string;         // Serving or size assurance note (e.g., '2 people', 'Size Exchange')
  items: ComboSubItem[];  // Array of constituent products
}
```

---

## 3. CRUD Operations (In-Memory Data Access)

All mutation and read operations are encapsulated inside `CartStore` in `src/state/cartStore.js`.

### 3.1 Create (Insert Item or Combo)
```javascript
// Add an individual product or increment its quantity
cartStore.addItem(itemData, delta = 1);

// Add a curated combo package to cart
cartStore.addCombo(combo);
```

### 3.2 Read (Query Items, Quantities & Totals)
```javascript
// Retrieve specific cart item by ID
const item = cartStore.getItem('xyxx-trunks');

// Check if item or combo exists in cart
const exists = cartStore.hasItem('pasta-night-combo');

// Get current quantity of an item
const qty = cartStore.getItemQty('plum-facewash');

// Compute comprehensive order totals, fees, and net savings
const totals = cartStore.getTotals();
```

### 3.3 Update (Modify Quantities)
```javascript
// Explicitly update item quantity (removes item if qty <= 0)
cartStore.setQty('potato', 3);

// Increment or decrement quantity
cartStore.addItem(itemData, 1);
cartStore.removeItem('potato', 1);
```

### 3.4 Delete (Remove Item or Combo)
```javascript
// Remove single unit or delete item when quantity drops to 0
cartStore.removeItem('pasta-night-combo');
```

---

## 4. Search, Filter & Aggregation Queries

### 4.1 Category Filtering (`src/screens/HomeScreen.js`)
Filters the combo catalog based on the currently active category chip:
```javascript
const filteredCombos = activeComboCategory === 'All' 
  ? FEATURED_COMBOS 
  : FEATURED_COMBOS.filter(c => c.category === activeComboCategory);
```

### 4.2 Explicit ID Resolution (`src/screens/CartScreen.js` & `TrackingScreen.js`)
Ensures specific combos are targeted reliably regardless of array order:
```javascript
const pastaCombo = FEATURED_COMBOS.find(c => c.id === 'pasta-night-combo') || FEATURED_COMBOS[0];
const techCombo = FEATURED_COMBOS.find(c => c.id === 'electronics-tech-combo');
const proteinCombo = FEATURED_COMBOS.find(c => c.id === 'protein-bar-cookie-combo');
```

### 4.3 Transparent Savings Mathematical Verification (`getComboStats`)
Calculates individual sum vs. combo price and percentage savings:
```javascript
export function getComboStats(combo) {
  const singleTotal = combo.items.reduce((sum, item) => sum + item.singlePrice, 0);
  const savings = singleTotal - combo.comboPrice;
  const savingsPct = Math.round((savings / singleTotal) * 100);
  return {
    singleTotal,
    comboPrice: combo.comboPrice,
    savings,
    savingsPct,
    itemsCount: combo.items.length
  };
}
```

### 4.4 Bill Aggregation Query (`cartStore.getTotals`)
Aggregates cart totals with progressive threshold logic:
```javascript
getTotals() {
  const count = this.items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const originalTotal = this.items.reduce((sum, item) => sum + (item.originalPrice * item.qty), 0);
  const savings = Math.max(0, originalTotal - subtotal);
  const deliveryFee = subtotal >= 100 || count === 0 ? 0 : 15;
  const handlingFee = count > 0 ? 2 : 0;
  const grandTotal = subtotal + deliveryFee + handlingFee;

  return { count, subtotal, originalTotal, savings, deliveryFee, handlingFee, grandTotal };
}
```

---

## 5. Relationships
- **FeaturedCombo ➜ ComboSubItem (1:N)**: Each routine combo contains an array of 3–4 constituent product objects.
- **CartStore ➜ CartItem (1:N)**: A cart contains 0 or more active item records.
- **Category ➜ FeaturedCombo (1:N)**: Each combo belongs to a category classification (`Dinner`, `Clothing`, `Beauty`, `Medicine`, `Electronics`, `Fitness`, `Breakfast`, `Snacks`).

---

## 6. Setup and Initialization
- The data store is instantiated as a module singleton upon evaluation:
  ```javascript
  export const cartStore = new CartStore();
  ```
- Default seed items are pre-populated in `cartStore.items`:
  - `potato` (Potato Alugadde 1 kg, Qty: 1)
  - `onion` (Onion Eerulli 1 kg, Qty: 2)

---

## 7. Raw SQL & ORM Status
- **Raw SQL**: Not currently implemented.
- **ORM / ODM**: Not currently implemented.
