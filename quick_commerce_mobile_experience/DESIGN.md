---
name: Quick Commerce Mobile Experience
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#3f4a3c'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7a6a'
  outline-variant: '#becab7'
  surface-tint: '#006e16'
  primary: '#006714'
  on-primary: '#ffffff'
  primary-container: '#0c831f'
  on-primary-container: '#e0ffd7'
  inverse-primary: '#74dd6e'
  secondary: '#a83900'
  on-secondary: '#ffffff'
  secondary-container: '#fc6018'
  on-secondary-container: '#531800'
  tertiary: '#12661e'
  on-tertiary: '#ffffff'
  tertiary-container: '#318035'
  on-tertiary-container: '#dfffd6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8ffb87'
  primary-fixed-dim: '#74dd6e'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#a3f69c'
  tertiary-fixed-dim: '#88d982'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005312'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 22px
  title-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.03em
  price-headline:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
  price-strikethrough:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  spacing-xxs: 0.125rem
  spacing-xs: 0.25rem
  spacing-sm: 0.5rem
  spacing-md: 0.75rem
  spacing-lg: 1rem
  spacing-xl: 1.25rem
  spacing-2xl: 1.5rem
  spacing-3xl: 2rem
  gutter-grid: 0.5rem
  margin-screen: 0.75rem
  card-pad-horizontal: 0.5rem
  card-pad-vertical: 0.625rem
---

## Brand & Style

This design system delivers an ultra-fast, dependable, and delightfully frictionless quick-commerce grocery experience. Tailored for on-demand shoppers who value speed, accuracy, and clarity, the personality balances utilitarian utility with vibrant, fresh everyday vitality. 

### Design Movement & Aesthetic
The design blends **Modern Corporate Utility** with **Tactile Micro-interactions**:
- **Clarity over Clutter:** Pure clean whites and soft off-white canvas surfaces isolate product imagery so items look appetizing and unmistakable.
- **Speed Signals:** High-visibility green buttons, persistent delivery promise badges (e.g., "10-12 minutes"), and prominent floating sticky cart drawers remove friction from browse-to-checkout pathways.
- **Crisp Density:** Precision 1px dividers, compact product grids, structured category carousels, and explicit touch states mimic the organized efficiency of a modern high-density retail shelf.

## Colors

The color architecture is calibrated for high-contrast mobile scanning under direct sunlight and bright ambient conditions.

### Primary Palette
- **Primary Brand Green (`#0C831F`)**: Used for the signature "ADD" action, cart summaries, bottom sheet confirmations, and active selection badges.
- **Primary Hover/Press Green (`#0A6D19`)**: Feedback state for active presses and tapped states.
- **Surface Green Soft (`#E8F5E9`)**: Subtle background fill for tags, discount indicators, and stepper containers.

### Accent & Badges
- **Warning / Promotional Orange (`#E65100`)**: Used for urgent callouts, stock warnings, and discount percentage highlights.
- **Warm Accent Tint (`#FFF3E0`)**: Low-contrast pill backgrounds pairing with `#E65100` for badges like "Bestseller" or "Super Saver".

### Neutrals & Structural Tones
- **Canvas Base (`#FFFFFF`)**: Card surfaces, product photo backdrops, and interactive sheet layers.
- **App Canvas Substrate (`#F8F9FA`)**: Page background that allows pure white cards to pop naturally.
- **Border Crisp / Divider (`#E5E7EB`)**: Structural 1px separation lines across lists, card edges, and header boundaries.
- **Secondary Border Subdued (`#EEEEEE`)**: Inner card outlines and table rows.
- **Text Primary (`#111827`)**: Product titles, prices, and header typography.
- **Text Muted / Subtitle (`#6B7280`)**: Quantities, grams/milliliters, crossed-out MRP values, and helper strings.

## Typography

The typography strategy leverages **Inter** for uncompromising legibility at micro sizes on compact mobile viewports.

- **Numerals & Prices:** Indian Rupee symbols (₹) and numeric digits maintain tabular alignment and tight kerning to ensure prices sit symmetrically next to weights and strike-throughs.
- **Hierarchy Tiers:** Product cards prioritize item weight (`body-sm`) right beneath title (`body-md`), ending with immediate price-versus-strikethrough pairings (`price-headline` and `price-strikethrough`).
- **Delivery Header:** The top app bar pairs location details (`body-sm`) with high-impact bold delivery ETA cues ("Delivery in 10-12 mins" in `headline-sm` or `title-md`).

## Layout & Spacing

A disciplined 4px/8px modular base scale guarantees consistent rhythm across compact vertical screens.

### Grid & Viewport Metrics
- **Mobile First Framework:** Designed primarily for phone screens ranging from 360px to 428px wide.
- **Horizontal Screen Edge Padding:** 12px (`spacing-md`) to 16px (`spacing-lg`) edge padding ensures maximum real estate for product browsing.
- **Catalog Grids:** 2-column or 3-column layouts with tight 8px (`gutter-grid`) separation between product tiles.
- **Category Sidebar + Grid:** In department views, an 80px fixed left vertical rail anchors navigation alongside a 2-column scrollable feed.
- **Safe Areas:** 44px top clearance for notch/island and 84px bottom clearance to prevent overlapping the persistent floating cart or bottom tab bar.

## Elevation & Depth

Visual separation relies primarily on sharp structural outlines combined with delicate, low-spread ambient shadows to prevent muddy screens.

### Elevation Levels
- **Level 0 (Flat Ground):** `#F8F9FA` base page substrate.
- **Level 1 (Card & Section Surfaces):** `#FFFFFF` fill bounded by a crisp `1px solid #E5E7EB` outline. No shadow needed, preserving sharp readability.
- **Level 2 (Active Controls & Carousels):** Subtle diffuse shadow `0px 2px 6px rgba(0, 0, 0, 0.04)` with `1px solid #EEEEEE` border.
- **Level 3 (Floating Cart Pill & Sticky Headers):** Floating bottom cart bars and active search bars utilize `0px 4px 16px rgba(12, 131, 31, 0.18)` or `0px 6px 20px rgba(0, 0, 0, 0.08)` to clearly separate interactive states from scrolling catalog feeds.
- **Level 4 (Modal Sheets & Address Selectors):** Backdrop overlay `#000000 48% opacity` paired with an anchored bottom sheet container featuring an upper shadow `0px -8px 24px rgba(0, 0, 0, 0.12)`.

## Shapes

The design uses balanced, modern rounded corners that soften high-density shopping catalogs without wasting usable screen area.

- **Product Tiles & Cards:** `12px` to `16px` border radius, creating approachable, smooth containers for item photography.
- **Action Buttons & Steppers:** `8px` corner radius for standalone "ADD" buttons and quantity `+ / -` steppers.
- **Badges & Tags:** Fully pill-shaped (`9999px`) for discount banners (e.g. "15% OFF") and delivery tags.
- **Floating Cart Banner:** `12px` to `16px` rounded container floating 12px above the viewport bottom or dock.
- **Search Bar:** `12px` rounded continuous pill container with inset icon and text field.

## Components

### 1. Delivery & Location Header
- **Container:** White background or clean tinted brand panel with 1px border bottom `#E5E7EB`.
- **Top Row:** Delivery promise displayed boldly (e.g., "Delivery in 10 minutes"), alongside an account/profile icon.
- **Bottom Row:** Truncated address line in muted tone with dropdown chevron, followed by a full-width search input housing a search icon, placeholder text ("Search 'paneer'"), and optional voice/mic icon.

### 2. Product Card (Compact Grid Variant)
- **Container:** White `#FFFFFF` card, 12px radius, 1px border `#E5E7EB`, internal padding 8px.
- **Media:** Aspect ratio 1:1, centered image on pure white. Promotional badges ("20% OFF", "Bestseller") pinned to the top-left using pill tags (`#FFF3E0` with `#E65100` text, or `#E8F5E9` with `#2E7D32` text).
- **Meta Area:** Delivery ETA icon (e.g., small clock + "8 MINS"), Product Title (Inter SemiBold, max 2 lines), Unit weight/volume in muted `#6B7280` (`body-sm`).
- **Footer Interaction:** Rupee pricing (current price in bold, MRP struck-through) paired with an "ADD" button or active stepper.

### 3. "ADD" Button & Quantity Stepper
- **Default State ("ADD"):** White pill/rectangle with green border `1px solid #0C831F`, bold green label `#0C831F`. Size: minimum touch target 64px width, 32px height.
- **Selected State (Stepper):** Solid green fill `#0C831F` with white typography. Left icon `−`, central integer count (e.g., `1`), right icon `+`. Smooth transition on first tap.

### 4. Floating Cart Summary Bar
- **Positioning:** Floating fixed bar pinned 12px above the bottom screen edge, span width `calc(100% - 24px)`.
- **Appearance:** Solid `#0C831F` background, 12px–14px border-radius, elevation level 3.
- **Left Slot:** Small thumbnail stack or item counter + total discounted price (`₹225`) in white bold text.
- **Right Slot:** "View Cart" text alongside a forward chevron icon.

### 5. Category Chips & Horizontal Filters
- **Default:** Pill container, `#FFFFFF` background, `1px solid #E5E7EB` border, dark text `#1F2937`.
- **Active:** Light green background `#E8F5E9`, border `1px solid #0C831F`, bold primary green text `#0C831F`.

### 6. Inputs & Checkout Fields
- **Container:** 44px height, 8px corner radius, background `#FFFFFF`, border `1px solid #E5E7EB`.
- **Focus State:** Border changes to `1.5px solid #0C831F` with an outline ring of `3px rgba(12, 131, 31, 0.12)`.