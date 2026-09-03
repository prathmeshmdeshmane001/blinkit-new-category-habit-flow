// Screen 7.1: Cart Variant (Refined for iPhone 17)
import { router } from '../router.js';

export function renderCartVariantScreen(container) {
  let isFabricComboAdded = false;

  function render() {
    const milkPrice = 72;
    const breadPrice = 45;
    const comboPrice = isFabricComboAdded ? 29 : 0;
    const itemsTotal = milkPrice + breadPrice + comboPrice;
    const originalTotal = 75 + 50 + (isFabricComboAdded ? 45 : 0);
    const savings = originalTotal - itemsTotal;
    const grandTotal = itemsTotal + 2; // handling fee

    container.innerHTML = `
      <!-- Sticky Top Bar inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="cvBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="flex flex-col">
              <div class="flex items-center gap-1.5">
                <h1 class="text-sm font-black text-on-surface">My Cart</h1>
                <span class="text-[9.5px] px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">
                  ${isFabricComboAdded ? '3' : '2'} items
                </span>
              </div>
              <span class="text-[9.5px] text-gray-500 flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">bolt</span> 
                Instant dispatch guaranteed
              </span>
            </div>
          </div>
          <button class="w-7 h-7 rounded-full bg-surface-container-low flex items-center justify-center text-gray-500 hover:text-on-surface" onclick="router.navigate('home')">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </header>

      <!-- Main Cart Content -->
      <main class="flex-1 flex flex-col p-margin-screen gap-3 relative pb-28">
        <!-- Savings Banner -->
        <div class="flex items-center justify-between px-3 py-2 rounded-2xl bg-emerald-100/70 text-emerald-950 shadow-2xs border border-emerald-300">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary" style="font-variation-settings: 'FILL' 1;">savings</span>
            <span class="text-xs font-bold">Your total savings ₹${savings}</span>
          </div>
          <span class="text-[9px] px-2 py-0.5 rounded-full bg-primary text-white tracking-wide uppercase font-black">
            Applied
          </span>
        </div>

        <!-- Active Delivery Fulfillment Box -->
        <div class="flex flex-col bg-white rounded-2xl shadow-2xs p-3 gap-2.5 border border-gray-100">
          <div class="flex items-center justify-between pb-1.5 border-b border-gray-100">
            <div class="flex items-center gap-1">
              <div class="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[15px]">timer</span>
              </div>
              <span class="text-xs text-gray-900 font-extrabold">Delivery in 8 minutes</span>
            </div>
            <span class="text-[10px] text-gray-500 font-bold">${isFabricComboAdded ? '3' : '2'} items</span>
          </div>

          <!-- Item 1: Amul Taaza Milk -->
          <div class="flex items-center justify-between py-1.5">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden p-1 border border-gray-100 shrink-0">
                <img class="w-full h-full object-contain" alt="Amul Milk" src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&auto=format&fit=crop&q=80" />
              </div>
              <div class="flex flex-col min-w-0">
                <span class="text-[11px] text-gray-900 font-bold truncate">Amul Taaza Milk</span>
                <span class="text-[9.5px] text-gray-500">1 L</span>
                <div class="flex items-baseline gap-1 mt-0.5">
                  <span class="text-xs font-black text-gray-900">₹72</span>
                  <span class="text-[9px] text-gray-400 line-through">₹75</span>
                </div>
              </div>
            </div>
            <div class="flex items-center bg-primary rounded-lg text-white h-6 px-1 shadow-2xs font-bold">
              <span class="text-[11px] px-2">1</span>
            </div>
          </div>

          <!-- Item 2: Harvest Gold Bread -->
          <div class="flex items-center justify-between py-1.5 border-t border-gray-50">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden p-1 border border-gray-100 shrink-0">
                <img class="w-full h-full object-contain" alt="Bread" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&auto=format&fit=crop&q=80" />
              </div>
              <div class="flex flex-col min-w-0">
                <span class="text-[11px] text-gray-900 font-bold truncate">Harvest Gold White Bread</span>
                <span class="text-[9.5px] text-gray-500">400 g</span>
                <div class="flex items-baseline gap-1 mt-0.5">
                  <span class="text-xs font-black text-gray-900">₹45</span>
                  <span class="text-[9px] text-gray-400 line-through">₹50</span>
                </div>
              </div>
            </div>
            <div class="flex items-center bg-primary rounded-lg text-white h-6 px-1 shadow-2xs font-bold">
              <span class="text-[11px] px-2">1</span>
            </div>
          </div>

          ${isFabricComboAdded ? `
            <!-- Item 3: Added Fabric Conditioner -->
            <div class="flex items-center justify-between py-2 bg-emerald-50/70 p-2 rounded-xl border border-emerald-200">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1 border border-emerald-100 shrink-0">
                  <img class="w-full h-full object-contain" alt="Comfort Fabric Conditioner" src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=120&auto=format&fit=crop&q=80" />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[11px] text-gray-900 font-bold truncate">Comfort Fabric Conditioner</span>
                  <span class="text-[9px] text-primary font-bold">Trial 50ml • Untried Category</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="text-xs font-black text-gray-900">₹29</span>
                    <span class="text-[9px] text-gray-400 line-through">₹45</span>
                  </div>
                </div>
              </div>
              <button id="removeFabricComboBtn" class="text-xs text-error font-bold hover:underline px-1.5">
                Remove
              </button>
            </div>
          ` : ''}
        </div>

        <!-- Complete Your Combo Promotional Card -->
        ${!isFabricComboAdded ? `
          <div class="flex flex-col p-3 rounded-2xl bg-orange-50 border border-orange-200 shadow-2xs gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-secondary">auto_awesome</span>
                <h2 class="text-xs font-black text-gray-900">Complete your combo</h2>
              </div>
              <span class="text-[8.5px] px-1.5 py-0.5 rounded-full bg-secondary-container text-white shadow-2xs font-black">
                Save ₹16
              </span>
            </div>

            <div class="flex items-center justify-between bg-white p-2 rounded-xl border border-orange-100 gap-2">
              <div class="flex items-center gap-2 min-w-0">
                <div class="relative w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 p-1 border border-gray-100">
                  <img class="w-full h-full object-contain" alt="Comfort Conditioner" src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=120&auto=format&fit=crop&q=80" />
                  <span class="absolute top-0 left-0 bg-secondary text-white text-[7.5px] font-black px-1 rounded-br">NEW</span>
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[8px] text-secondary font-black uppercase">Untried Category</span>
                  <span class="text-[11px] text-gray-900 font-bold truncate">Comfort Fabric Conditioner</span>
                  <span class="text-[9px] text-gray-400">Morning Fresh Trial 50ml</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="text-xs font-black text-gray-900">₹29</span>
                    <span class="text-[9px] line-through text-gray-400">₹45</span>
                  </div>
                </div>
              </div>
              <button id="addFabricComboBtn" class="px-2.5 py-1 bg-secondary-container text-white font-black rounded-lg text-[10px] shadow-2xs hover:opacity-90 active:scale-95 transition-all">
                + Add Combo
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Bill Details Card -->
        <div class="flex flex-col bg-white rounded-2xl shadow-2xs p-3 gap-2 border border-gray-100">
          <div class="flex items-center justify-between pb-1 border-b border-gray-100">
            <h3 class="text-xs text-gray-900 font-extrabold">Bill details</h3>
            <span class="text-[9px] text-primary bg-emerald-100 px-1.5 py-0.5 rounded-full font-bold">
              Best Price Guaranteed
            </span>
          </div>
          <div class="flex flex-col gap-1.5 py-0.5 text-[11px]">
            <div class="flex items-center justify-between text-gray-600">
              <span>Items total</span>
              <div class="flex items-center gap-1">
                <span class="line-through text-gray-400 text-[10px]">₹${originalTotal}</span>
                <span class="text-gray-900 font-bold">₹${itemsTotal}</span>
              </div>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <span>Delivery charge</span>
              <span class="text-primary font-bold">FREE</span>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <span>Handling charge</span>
              <span class="text-gray-900 font-medium">₹2</span>
            </div>
          </div>
          <div class="flex items-center justify-between pt-2 bg-slate-50 -mx-3 -mb-3 p-3 rounded-b-2xl border-t border-gray-100">
            <div class="flex flex-col">
              <span class="text-xs text-gray-900 font-black">Grand Total</span>
              <span class="text-[10px] text-primary font-bold">You saved ₹${savings} on this order</span>
            </div>
            <span class="text-base text-gray-900 font-black">₹${grandTotal}</span>
          </div>
        </div>
      </main>

      <!-- Sticky Bottom Checkout Bar (Inside iPhone Viewport) -->
      <div class="sticky bottom-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md p-3 shadow-[0_-3px_12px_rgba(0,0,0,0.06)] border-t border-gray-200/80">
        <div class="flex items-center justify-between gap-3">
          <div class="flex flex-col">
            <span class="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Total Amount</span>
            <div class="flex items-baseline gap-1">
              <span class="text-lg text-gray-900 font-black">₹${grandTotal}</span>
              <span class="text-[9.5px] text-primary font-bold">Saved ₹${savings}</span>
            </div>
          </div>
          <button id="cvCheckoutBtn" class="flex-1 h-11 bg-primary rounded-xl text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-primary-container active:scale-[0.98] transition-all">
            <span>Select Address &amp; Pay</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    `;

    const backBtn = container.querySelector('#cvBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.navigate('cart'));

    const addBtn = container.querySelector('#addFabricComboBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        isFabricComboAdded = true;
        render();
      });
    }

    const removeBtn = container.querySelector('#removeFabricComboBtn');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        isFabricComboAdded = false;
        render();
      });
    }

    const checkoutBtn = container.querySelector('#cvCheckoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => router.navigate('payment'));
    }
  }

  render();
}
