// Bottom Navigation Component for iPhone 17 (Faithful to Blinkit Native Reference)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';

export function renderBottomNav(container) {
  function update() {
    const current = router.currentRoute;
    const totals = cartStore.getTotals();

    const isHome = current === 'home';
    const isOrders = current === 'tracking';
    const isCategories = current === 'category';
    const isCart = ['cart', 'payment', 'cart-variant'].includes(current);
    const isExplore = current === 'new-for-you';

    container.innerHTML = `
      <nav class="w-full bg-white/95 backdrop-blur-xl border-t border-gray-100/80 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] select-none">
        <div class="flex items-center justify-between max-w-full mx-auto px-1">
          
          <!-- Tab 1: Home -->
          <button data-nav="home" class="flex flex-col items-center justify-center min-w-[50px] transition-all active:scale-90 ${
            isHome ? 'text-gray-900 font-black' : 'text-gray-500 hover:text-gray-900'
          }">
            <div class="w-8 h-8 rounded-full flex items-center justify-center ${isHome ? 'bg-amber-100/70 text-gray-900' : ''}">
              <span class="material-symbols-outlined text-[21px]" style="${isHome ? "font-variation-settings: 'FILL' 1;" : ''}">home</span>
            </div>
            <span class="text-[9.5px] mt-0.5 font-bold tracking-tight">Home</span>
          </button>

          <!-- Tab 2: Order Again -->
          <button data-nav="tracking" class="flex flex-col items-center justify-center min-w-[50px] transition-all active:scale-90 ${
            isOrders ? 'text-gray-900 font-black' : 'text-gray-500 hover:text-gray-900'
          }">
            <div class="w-8 h-8 rounded-full flex items-center justify-center ${isOrders ? 'bg-amber-100/70 text-gray-900' : ''}">
              <span class="material-symbols-outlined text-[21px]" style="${isOrders ? "font-variation-settings: 'FILL' 1;" : ''}">shopping_bag</span>
            </div>
            <span class="text-[9.5px] mt-0.5 font-bold tracking-tight whitespace-nowrap">Order Again</span>
          </button>

          <!-- Tab 3: Categories (Peach/Pink Active Pill in Ref) -->
          <button data-nav="category" class="flex flex-col items-center justify-center min-w-[50px] transition-all active:scale-90 ${
            isCategories ? 'text-gray-900 font-black' : 'text-gray-500 hover:text-gray-900'
          }">
            <div class="w-8 h-8 rounded-full flex items-center justify-center ${isCategories ? 'bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 text-gray-900 shadow-2xs border border-pink-200/60' : ''}">
              <span class="material-symbols-outlined text-[21px]" style="${isCategories ? "font-variation-settings: 'FILL' 1;" : ''}">grid_view</span>
            </div>
            <span class="text-[9.5px] mt-0.5 font-bold tracking-tight">Categories</span>
          </button>

          <!-- Tab 4: Cart -->
          <button data-nav="cart" class="flex flex-col items-center justify-center min-w-[50px] transition-all active:scale-90 relative ${
            isCart ? 'text-primary font-black' : 'text-gray-500 hover:text-gray-900'
          }">
            <div class="w-8 h-8 rounded-full flex items-center justify-center relative ${isCart ? 'bg-emerald-100 text-primary' : ''}">
              <span class="material-symbols-outlined text-[21px]" style="${isCart ? "font-variation-settings: 'FILL' 1;" : ''}">shopping_cart</span>
              ${totals.count > 0 ? `
                <span class="absolute -top-0.5 -right-1 bg-primary text-white text-[8.5px] font-black h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center shadow-xs">
                  ${totals.count}
                </span>
              ` : ''}
            </div>
            <span class="text-[9.5px] mt-0.5 font-bold tracking-tight">Cart</span>
          </button>

          <!-- Tab 5: EXPLORE NEW ITEMS ON BLINKIT (Distinctive Purple Glowing Circular Button from Reference Image) -->
          <button data-nav="new-for-you" id="exploreNewBlinkitBtn" class="flex items-center gap-1.5 bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] text-white px-2.5 py-1.5 rounded-full shadow-[0_4px_14px_rgba(124,58,237,0.4)] hover:shadow-lg active:scale-95 transition-all group border border-purple-300/40">
            <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
              <span class="material-symbols-outlined text-[13px] text-yellow-300 animate-pulse">auto_awesome</span>
            </div>
            <div class="flex flex-col text-left leading-none pr-0.5">
              <span class="text-[9px] font-black tracking-tight flex items-center gap-0.5">
                New on Blinkit <span class="text-[10px]">↗</span>
              </span>
              <span class="text-[7.5px] text-purple-200 font-bold">Explore items</span>
            </div>
          </button>

        </div>
      </nav>
    `;

    container.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        router.navigate(btn.getAttribute('data-nav'));
      });
    });
  }

  router.subscribe(() => update());
  cartStore.subscribe(() => update());

  update();
}
