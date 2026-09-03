// Reusable Component: "Next time, try this combo" with Itemized Breakdown & Savings
import { getComboStats } from '../data/combos.js';
import { cartStore } from '../state/cartStore.js';

export function renderComboCardHtml(combo) {
  const stats = getComboStats(combo);
  const isAdded = cartStore.hasItem(combo.id);

  return `
    <div class="combo-card bg-white rounded-2xl p-3 shadow-2xs border border-emerald-200/90 relative overflow-hidden transition-all" data-combo-id="${combo.id}">
      <!-- Accent top banner -->
      <div class="flex items-center justify-between gap-1 mb-2">
        <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[9.5px] font-black tracking-wide uppercase shadow-2xs border border-amber-200">
          <span class="material-symbols-outlined text-[13px] text-amber-600" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
          <span>Banger Combo</span>
        </div>
        <span class="px-2 py-0.5 rounded-full bg-secondary-container text-white text-[9px] font-black uppercase shadow-2xs">
          ${stats.savingsPct}% OFF
        </span>
      </div>

      <!-- Combo Title & Tagline -->
      <div class="flex items-start justify-between gap-2">
        <div>
          <h3 class="text-sm font-black text-gray-900 leading-snug">${combo.title}</h3>
          <p class="text-[10px] text-gray-500 mt-0.5 leading-tight">${combo.tagline}</p>
        </div>
        <div class="flex flex-col items-end shrink-0">
          <div class="flex items-baseline gap-1">
            <span class="text-base font-black text-primary">₹${stats.comboPrice}</span>
            <span class="text-[10px] line-through text-gray-400">₹${stats.singleTotal}</span>
          </div>
          <span class="text-[8.5px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 mt-0.5">
            Save ₹${stats.savings}
          </span>
        </div>
      </div>

      <!-- Big Highlighted Savings Banner -->
      <div class="my-2.5 p-2 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/15 border border-emerald-300 flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="material-symbols-outlined text-primary text-[18px]" style="font-variation-settings: 'FILL' 1;">savings</span>
          <div class="flex flex-col">
            <span class="text-[11px] font-black text-gray-900 leading-tight">
              You save <span class="text-primary font-black">₹${stats.savings}</span> on this combo!
            </span>
            <span class="text-[9px] text-gray-600">
              ₹${stats.singleTotal} if bought separately ➜ <span class="font-bold text-gray-900">₹${stats.comboPrice}</span> bundled
            </span>
          </div>
        </div>
        <span class="text-[10px] font-black text-primary bg-white px-2 py-0.5 rounded-lg shadow-2xs border border-emerald-200">
          Save ${stats.savingsPct}%
        </span>
      </div>

      <!-- Items in this Combo (Itemized Visual Breakdown) -->
      <div class="flex flex-col gap-1.5 mt-1">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-gray-600 flex items-center gap-1">
            <span class="material-symbols-outlined text-[13px] text-primary">inventory_2</span>
            <span>Items Present in Combo (${stats.itemsCount})</span>
          </span>
          <span class="text-[9px] text-gray-400 font-medium">Single item price</span>
        </div>

        <!-- Item Cards List -->
        <div class="flex flex-col divide-y divide-gray-100 bg-slate-50 rounded-xl p-2 border border-gray-100">
          ${combo.items.map((item, idx) => `
            <div class="flex items-center justify-between py-1.5 ${idx === 0 ? 'pt-0.5' : ''} ${idx === combo.items.length - 1 ? 'pb-0.5' : ''}">
              <div class="flex items-center gap-2 min-w-0">
                <div class="w-9 h-9 rounded-lg bg-white p-0.5 border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                  <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[11px] font-bold text-gray-900 truncate leading-tight">${item.name}</span>
                  <span class="text-[9px] text-gray-500">${item.unit}</span>
                </div>
              </div>
              <div class="flex flex-col items-end shrink-0 pl-2">
                <span class="text-[11px] font-black text-gray-800">₹${item.singlePrice}</span>
                <span class="text-[8px] text-gray-400">single price</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Transparent Math Verification Box -->
        <div class="p-2 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col gap-1 text-[10px] text-gray-700">
          <div class="flex justify-between items-center text-gray-600">
            <span>Sum of individual item prices:</span>
            <span class="font-bold text-gray-900">₹${stats.singleTotal}</span>
          </div>
          <div class="flex justify-between items-center text-gray-600">
            <span>Special Banger Combo price:</span>
            <span class="font-black text-primary">₹${stats.comboPrice}</span>
          </div>
          <div class="flex justify-between items-center pt-1 border-t border-amber-200/80 text-primary font-black">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px] text-amber-600">local_fire_department</span>
              <span>Total money you save on this Banger Combo:</span>
            </span>
            <span class="text-[11px] text-emerald-700">₹${stats.savings} (${stats.savingsPct}% OFF)</span>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-3 pt-1">
        <button class="combo-add-btn w-full h-10 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-[0.98] ${
          isAdded 
            ? 'bg-emerald-100 text-primary border border-primary hover:bg-emerald-200' 
            : 'bg-primary text-white hover:bg-primary-container shadow-md'
        }" data-combo-action-id="${combo.id}">
          <span class="material-symbols-outlined text-[16px]">${isAdded ? 'check' : 'add_shopping_cart'}</span>
          <span>${isAdded ? '✓ Added to Cart (Tap to Remove)' : `+ Add Banger Combo (₹${stats.comboPrice})`}</span>
        </button>
      </div>
    </div>
  `;
}

export function bindComboCardEvents(container, onUpdate) {
  container.querySelectorAll('.combo-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const comboId = btn.getAttribute('data-combo-action-id');
      const isAdded = cartStore.hasItem(comboId);

      if (isAdded) {
        cartStore.removeItem(comboId);
      } else {
        import('../data/combos.js').then(({ FEATURED_COMBOS, getComboStats }) => {
          const combo = FEATURED_COMBOS.find(c => c.id === comboId);
          if (combo) {
            const stats = getComboStats(combo);
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
            if (onUpdate) onUpdate();
          }
        });
        return;
      }

      if (onUpdate) onUpdate();
    });
  });
}
