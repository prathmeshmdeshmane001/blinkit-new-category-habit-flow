// Screen 4: My Cart Screen (With "Next time, try this combo" & Itemized Breakdown)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';
import { FEATURED_COMBOS } from '../data/combos.js';
import { renderComboCardHtml, bindComboCardEvents } from '../components/ComboCard.js';

export function renderCartScreen(container) {
  let showOutOfStock = true;
  let activeComboIndex = 0;

  function render() {
    const totals = cartStore.getTotals();
    const items = cartStore.items;
    const pastaCombo = FEATURED_COMBOS.find(c => c.id === 'pasta-night-combo') || FEATURED_COMBOS[0];
    const techCombo = FEATURED_COMBOS.find(c => c.id === 'electronics-tech-combo');
    const proteinCombo = FEATURED_COMBOS.find(c => c.id === 'protein-bar-cookie-combo');
    const featuredCombosList = [pastaCombo, techCombo, proteinCombo].filter(Boolean);
    const currentCombo = featuredCombosList[activeComboIndex] || pastaCombo;

    container.innerHTML = `
      <!-- Sticky Cart Header inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="cartBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="flex flex-col">
              <div class="flex items-center gap-1.5">
                <h1 class="text-sm font-black text-on-surface">My Cart</h1>
                <span class="text-[9.5px] px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">
                  ${totals.count} items
                </span>
              </div>
              <span class="text-[9.5px] text-gray-500 flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[12px] text-primary" style="font-variation-settings: 'FILL' 1;">bolt</span> 
                Instant dispatch guaranteed
              </span>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <button id="cartHelpBtn" class="w-7 h-7 rounded-full bg-surface-container-low flex items-center justify-center text-gray-500 hover:text-on-surface" onclick="alert('Help: Instant 24x7 Chat Support')">
              <span class="material-symbols-outlined text-[18px]">help_outline</span>
            </button>
            <button id="cartCloseBtn" class="w-7 h-7 rounded-full bg-surface-container-low flex items-center justify-center text-gray-500 hover:text-on-surface">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Cart Content -->
      <main class="flex-1 flex flex-col p-margin-screen gap-3 relative pb-24">
        <!-- Out of Stock Alert Banner (dismissible) -->
        ${showOutOfStock ? `
          <div class="flex items-center justify-between p-2.5 rounded-2xl bg-red-50 shadow-2xs border border-red-200">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-error shrink-0">
                <span class="material-symbols-outlined text-[15px]">remove_shopping_cart</span>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold text-gray-900 leading-tight">1 item unavailable</span>
                <span class="text-[10px] text-gray-500">Replaced with fresh alternative</span>
              </div>
            </div>
            <button id="dismissOosBtn" class="px-2.5 py-0.5 rounded-full bg-white shadow-2xs text-[10px] font-bold text-error border border-red-200 hover:bg-red-100/50">
              Dismiss
            </button>
          </div>
        ` : ''}

        <!-- Savings Banner -->
        <div class="flex items-center justify-between px-3 py-2 rounded-2xl bg-emerald-100/70 text-emerald-950 shadow-2xs border border-emerald-300">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary" style="font-variation-settings: 'FILL' 1;">savings</span>
            <span class="text-xs font-bold">Your total savings ₹${totals.savings}</span>
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
            <span class="text-[10px] text-gray-500 font-bold">${totals.count} items</span>
          </div>

          <!-- Items List -->
          ${items.length === 0 ? `
            <div class="py-6 flex flex-col items-center justify-center text-center">
              <span class="material-symbols-outlined text-[36px] text-gray-300">remove_shopping_cart</span>
              <p class="text-xs text-gray-800 font-bold mt-1.5">Your cart is empty</p>
              <p class="text-[10px] text-gray-500">Add items from discovery aisles!</p>
              <button id="emptyBrowseBtn" class="mt-3 px-3 py-1.5 bg-primary text-white rounded-xl font-bold text-[11px] shadow-2xs">
                Start Shopping
              </button>
            </div>
          ` : `
            <div class="flex flex-col divide-y divide-gray-100">
              ${items.map(item => `
                <div class="flex items-center justify-between py-2">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden p-1 shrink-0 border border-gray-100">
                      <img class="w-full h-full object-contain" src="${item.image}" alt="${item.name}" />
                    </div>
                    <div class="flex flex-col min-w-0">
                      <div class="flex items-center gap-1">
                        <span class="text-[11px] text-gray-900 font-bold truncate">${item.name}</span>
                        ${item.isCombo ? `<span class="bg-emerald-100 text-primary text-[8px] font-black px-1 rounded">COMBO</span>` : ''}
                      </div>
                      <span class="text-[9.5px] text-gray-500">${item.unit}</span>
                      <div class="flex items-baseline gap-1 mt-0.5">
                        <span class="text-xs font-black text-gray-900">₹${item.price}</span>
                        <span class="text-[9px] text-gray-400 line-through">₹${item.originalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Stepper -->
                  <div class="flex items-center bg-primary rounded-lg text-white h-7 px-1 shadow-2xs font-bold">
                    <button class="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 active:scale-95" onclick="window.cartUi.remove('${item.id}')">
                      <span class="material-symbols-outlined text-[14px]">remove</span>
                    </button>
                    <span class="text-[11px] px-1.5 min-w-[16px] text-center">${item.qty}</span>
                    <button class="w-6 h-6 flex items-center justify-center text-white hover:opacity-80 active:scale-95" onclick="window.cartUi.add('${item.id}')">
                      <span class="material-symbols-outlined text-[14px]">add</span>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- FEATURED IN CART: "Next time, try this combo" with Full Items Breakdown & Math -->
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between px-0.5">
            <span class="text-[10px] font-black uppercase tracking-wider text-gray-600">
              Curated Routine Combos For You
            </span>
            <span class="text-[9.5px] text-primary font-bold">Bundle &amp; Save</span>
          </div>

          <!-- Quick switcher between popular combos in cart -->
          <div class="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
            ${featuredCombosList.map((c, idx) => `
              <button class="cart-combo-tab-btn px-2 py-0.5 rounded-full text-[9.5px] font-bold whitespace-nowrap transition-all ${
                activeComboIndex === idx 
                  ? 'bg-primary text-white shadow-2xs' 
                  : 'bg-white text-gray-600 border border-gray-200'
              }" data-combo-tab-idx="${idx}">
                ${idx === 0 ? '🍝 Pasta Night' : (idx === 1 ? '⚡ Tech Pack' : '🍪 Protein & Cookies')}
              </button>
            `).join('')}
          </div>

          ${renderComboCardHtml(currentCombo, { context: 'cart' })}
        </div>

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
                <span class="line-through text-gray-400 text-[10px]">₹${totals.originalTotal}</span>
                <span class="text-gray-900 font-bold">₹${totals.subtotal}</span>
              </div>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <div class="flex items-center gap-1">
                <span>Delivery charge</span>
                <span class="material-symbols-outlined text-[13px] text-gray-400">info</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="line-through text-gray-400 text-[10px]">₹15</span>
                <span class="text-primary font-bold">FREE</span>
              </div>
            </div>
            <div class="flex items-center justify-between text-gray-600">
              <span>Handling charge</span>
              <span class="text-gray-900 font-medium">₹${totals.handlingFee}</span>
            </div>
          </div>
          <div class="flex items-center justify-between pt-2 bg-slate-50 -mx-3 -mb-3 p-3 rounded-b-2xl border-t border-gray-100">
            <div class="flex flex-col">
              <span class="text-xs text-gray-900 font-black">Grand Total</span>
              <span class="text-[10px] text-primary font-bold">You saved ₹${totals.savings}</span>
            </div>
            <span class="text-base text-gray-900 font-black">₹${totals.grandTotal}</span>
          </div>
        </div>

        <!-- Cancellation Policy Note & Risk Free Guarantee link -->
        <div class="flex items-start gap-1.5 px-0.5 cursor-pointer pb-2" id="cartGuaranteeLink">
          <span class="material-symbols-outlined text-[15px] text-primary mt-0.5">verified_user</span>
          <p class="text-[10px] text-gray-500 leading-tight">
            Backed by <span class="text-primary font-bold underline">100% Risk-Free Guarantee</span>. 7-day doorstep pickup on non-perishables and instant freshness refunds.
          </p>
        </div>
      </main>

      <!-- Sticky Bottom Checkout Bar (Inside iPhone Viewport) -->
      ${totals.count > 0 ? `
        <div class="sticky bottom-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md p-3 shadow-[0_-3px_12px_rgba(0,0,0,0.06)] border-t border-gray-200/80">
          <div class="flex items-center justify-between gap-3">
            <div class="flex flex-col">
              <span class="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Total Amount</span>
              <div class="flex items-baseline gap-1">
                <span class="text-lg text-gray-900 font-black">₹${totals.grandTotal}</span>
                <span class="text-[9.5px] text-primary font-bold">Saved ₹${totals.savings}</span>
              </div>
            </div>
            <button id="checkoutProceedBtn" class="flex-1 h-11 bg-primary rounded-xl text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-primary-container active:scale-[0.98] transition-all">
              <span>Select Address &amp; Pay</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      ` : ''}
    `;

    window.cartUi = {
      add: (id) => {
        const item = cartStore.getItem(id);
        if (item) cartStore.addItem(item, 1);
      },
      remove: (id) => cartStore.removeItem(id, 1)
    };

    const backBtn = container.querySelector('#cartBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.navigate('home'));

    const closeBtn = container.querySelector('#cartCloseBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => router.navigate('home'));

    const dismissBtn = container.querySelector('#dismissOosBtn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        showOutOfStock = false;
        render();
      });
    }

    const guaranteeLink = container.querySelector('#cartGuaranteeLink');
    if (guaranteeLink) guaranteeLink.addEventListener('click', () => router.navigate('guarantee'));

    const checkoutBtn = container.querySelector('#checkoutProceedBtn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => router.navigate('payment'));

    const emptyBtn = container.querySelector('#emptyBrowseBtn');
    if (emptyBtn) emptyBtn.addEventListener('click', () => router.navigate('home'));

    container.querySelectorAll('.cart-combo-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        activeComboIndex = parseInt(btn.getAttribute('data-combo-tab-idx'), 10) || 0;
        render();
      });
    });

    // Bind combo card events
    bindComboCardEvents(container, () => render());
  }

  const unsubscribe = cartStore.subscribe(() => {
    if (router.currentRoute === 'cart') {
      render();
    }
  });

  render();
  return () => unsubscribe();
}
