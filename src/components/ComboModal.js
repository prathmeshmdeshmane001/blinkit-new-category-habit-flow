// iOS Bottom Sheet Modal: Combo Details & Itemized Savings Breakdown
import { getComboStats } from '../data/combos.js';
import { cartStore } from '../state/cartStore.js';

let activeModalEl = null;

export function openComboModal(combo, onCartChange) {
  closeComboModal();

  const stats = getComboStats(combo);
  const isAdded = cartStore.hasItem(combo.id);

  const modalEl = document.createElement('div');
  modalEl.id = 'comboDetailModal';
  modalEl.className = 'absolute inset-0 z-50 flex flex-col justify-end bg-black/65 backdrop-blur-xs transition-opacity duration-200 select-none';

  modalEl.innerHTML = `
    <!-- Backdrop Click Area -->
    <div class="flex-1 w-full" id="modalBackdrop"></div>

    <!-- Bottom Sheet Container -->
    <div class="w-full bg-white rounded-t-[32px] shadow-2xl flex flex-col max-h-[90%] overflow-hidden animate-in slide-in-from-bottom duration-300 border-t border-gray-200">
      
      <!-- Drag Handle & Close -->
      <div class="relative w-full pt-2.5 pb-1 flex items-center justify-center border-b border-gray-100">
        <div class="w-10 h-1 bg-gray-300 rounded-full"></div>
        <button id="modalCloseBtn" class="absolute right-3 top-2 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
          <span class="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>

      <!-- Scrollable Modal Content -->
      <div class="overflow-y-auto p-margin-screen space-y-3 no-scrollbar pb-4">
        
        <!-- Hero Image & Tags -->
        <div class="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-100 border border-gray-100 shadow-2xs">
          <img src="${combo.image}" alt="${combo.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          <div class="absolute top-2.5 left-2.5 flex gap-1">
            <span class="bg-secondary-container text-white text-[8.5px] px-2 py-0.5 rounded-full font-black uppercase tracking-wide shadow-2xs">
              ${stats.savingsPct}% OFF
            </span>
            <span class="bg-white/90 text-amber-900 text-[8.5px] px-2 py-0.5 rounded-full font-black uppercase tracking-wide shadow-2xs flex items-center gap-0.5 border border-amber-200">
              <span class="material-symbols-outlined text-[11px] text-amber-600">local_fire_department</span> Banger Combo
            </span>
          </div>

          <div class="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between text-white">
            <div class="flex items-center gap-1.5 text-[10px] font-bold">
              <span class="flex items-center gap-0.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                <span class="material-symbols-outlined text-[13px] text-emerald-400">schedule</span>
                ${combo.prepTime || '10 mins'}
              </span>
              <span class="flex items-center gap-0.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                <span class="material-symbols-outlined text-[13px] text-emerald-400">group</span>
                ${combo.serves || 'All needs'}
              </span>
            </div>
            <span class="text-[9px] bg-primary text-white font-bold px-2 py-0.5 rounded-full">
              Blinkit Verified
            </span>
          </div>
        </div>

        <!-- Combo Header & Subtitle -->
        <div>
          <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[9px] font-black tracking-wide uppercase mb-1 border border-amber-200">
            <span class="material-symbols-outlined text-[12px] text-amber-600" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
            <span>Banger Combo</span>
          </div>
          <h2 class="text-base font-black text-gray-900 leading-snug">${combo.title}</h2>
          <p class="text-[11px] text-gray-500 mt-0.5 leading-relaxed">${combo.tagline}</p>
        </div>

        <!-- Highlighted Savings Banner -->
        <div class="p-2.5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/60 border border-emerald-300 shadow-2xs flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
              <span class="material-symbols-outlined text-[18px]">savings</span>
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-black text-gray-900">
                You save <span class="text-primary font-black">₹${stats.savings}</span> by buying this combo!
              </span>
              <span class="text-[9.5px] text-gray-600">
                Single items total: ₹${stats.singleTotal} ➜ Combo price: <span class="font-bold text-gray-900">₹${stats.comboPrice}</span>
              </span>
            </div>
          </div>
          <span class="text-[10px] font-black text-primary bg-white px-2 py-1 rounded-lg border border-emerald-200 shrink-0 shadow-2xs">
            Save ${stats.savingsPct}%
          </span>
        </div>

        <!-- Itemized Breakdown: Items Present in Combo -->
        <div class="space-y-1.5 pt-1">
          <div class="flex items-center justify-between px-0.5">
            <span class="text-xs font-extrabold text-gray-900 flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px] text-primary">inventory_2</span>
              <span>Items Present in Combo (${stats.itemsCount} items)</span>
            </span>
            <span class="text-[9.5px] text-gray-400">Single Item Price</span>
          </div>

          <div class="divide-y divide-gray-100 bg-slate-50 rounded-2xl p-2.5 border border-gray-100 shadow-2xs space-y-2">
            ${combo.items.map((item) => `
              <div class="flex items-center justify-between pt-1.5 first:pt-0">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-11 h-11 rounded-xl bg-white p-1 border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center shadow-2xs">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                  </div>
                  <div class="flex flex-col min-w-0">
                    <span class="text-[11px] font-bold text-gray-900 truncate leading-snug">${item.name}</span>
                    <span class="text-[9.5px] text-gray-500">${item.unit}</span>
                    <span class="text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5 mt-0.5">
                      <span class="material-symbols-outlined text-[10px]">check</span> In stock &amp; verified
                    </span>
                  </div>
                </div>
                <div class="flex flex-col items-end shrink-0 pl-2">
                  <span class="text-xs font-black text-gray-900">₹${item.singlePrice}</span>
                  <span class="text-[8.5px] text-gray-400">individual</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Transparent Math Verification Box -->
        <div class="p-2.5 rounded-2xl bg-white border border-emerald-200 shadow-2xs space-y-1.5 text-xs">
          <div class="flex justify-between items-center text-gray-600">
            <span>Sum of individual items if bought separately:</span>
            <span class="font-bold text-gray-900">₹${stats.singleTotal}</span>
          </div>
          <div class="flex justify-between items-center text-gray-600">
            <span>Special Banger Combo bundle price:</span>
            <span class="font-black text-primary text-sm">₹${stats.comboPrice}</span>
          </div>
          <div class="flex justify-between items-center pt-1.5 border-t border-gray-100 text-primary font-black">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">verified</span>
              <span>Your Net Savings on this Banger Combo:</span>
            </span>
            <span class="text-sm font-black text-emerald-700">₹${stats.savings} (${stats.savingsPct}% OFF)</span>
          </div>
        </div>

        <!-- Guarantee Note -->
        <div class="flex items-center gap-1.5 px-1 text-[9.5px] text-gray-500">
          <span class="material-symbols-outlined text-primary text-[14px]">verified_user</span>
          <span>Backed by 100% Risk-Free Guarantee &amp; 12-min delivery promise.</span>
        </div>
      </div>

      <!-- Sticky Modal Action Button -->
      <div class="p-margin-screen bg-surface-container-lowest border-t border-gray-100 flex items-center gap-2">
        <button id="modalActionBtn" class="w-full h-11 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-[0.98] ${
          isAdded 
            ? 'bg-emerald-100 text-primary border border-primary hover:bg-emerald-200' 
            : 'bg-primary text-white hover:bg-primary-container'
        }">
          <span class="material-symbols-outlined text-[17px]">${isAdded ? 'check' : 'add_shopping_cart'}</span>
          <span>${isAdded ? '✓ Added to Cart (Tap to Remove)' : `+ Add Banger Combo (₹${stats.comboPrice})`}</span>
        </button>
      </div>

    </div>
  `;

  // Attach to scroll viewport so it covers the phone screen inside iPhone 17
  const viewport = document.getElementById('screen-scroll-viewport') || document.body;
  viewport.appendChild(modalEl);
  activeModalEl = modalEl;

  // Event handlers
  const closeBtn = modalEl.querySelector('#modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeComboModal);

  const backdrop = modalEl.querySelector('#modalBackdrop');
  if (backdrop) backdrop.addEventListener('click', closeComboModal);

  const actionBtn = modalEl.querySelector('#modalActionBtn');
  if (actionBtn) {
    actionBtn.addEventListener('click', () => {
      const alreadyInCart = cartStore.hasItem(combo.id);
      if (alreadyInCart) {
        cartStore.removeItem(combo.id);
      } else {
        cartStore.addItem({
          id: combo.id,
          name: combo.title,
          unit: `${combo.items.length} items bundled`,
          price: stats.comboPrice,
          originalPrice: stats.singleTotal,
          category: 'Combos',
          image: combo.image,
          isCombo: true
        });
      }

      if (onCartChange) onCartChange();
      closeComboModal();
    });
  }
}

export function closeComboModal() {
  if (activeModalEl && activeModalEl.parentNode) {
    activeModalEl.parentNode.removeChild(activeModalEl);
    activeModalEl = null;
  }
}
