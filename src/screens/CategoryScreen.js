// Screen 2: Category Discovery Screen (Faithfully Styled to Blinkit Reference Image)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';

export function renderCategoryScreen(container) {
  let selectedCategory = null;

  const groceryCategories = [
    { id: 'veg-fruits', name: 'Vegetables &\nFruits', image: '/assets/categories/veg-fruits.jpg', target: 'product' },
    { id: 'atta-dal', name: 'Atta, Rice &\nDal', image: '/assets/categories/atta-dal.jpg', target: 'home' },
    { id: 'oil-masala', name: 'Oil, Ghee &\nMasala', image: '/assets/categories/oil-masala.jpg', target: 'home' },
    { id: 'dairy-eggs', name: 'Dairy, Bread\n& Eggs', image: '/assets/categories/dairy-eggs.jpg', target: 'home' },
    { id: 'bakery-biscuits', name: 'Bakery &\nBiscuits', image: '/assets/categories/bakery-biscuits.jpg', target: 'home' },
    { id: 'dryfruits-cereals', name: 'Dry Fruits &\nCereals', image: '/assets/categories/dryfruits-cereals.jpg', target: 'home' },
    { id: 'meat-fish', name: 'Chicken,\nMeat & Fish', image: '/assets/categories/meat-fish.jpg', target: 'home' },
    { id: 'kitchenware', name: 'Kitchenware\n& Appliances', image: '/assets/categories/kitchenware.jpg', target: 'product' },
  ];

  const snacksCategories = [
    { id: 'chips-namkeen', name: 'Chips &\nNamkeen', image: '/assets/categories/chips-namkeen.jpg', target: 'home' },
    { id: 'sweets-chocolates', name: 'Sweets &\nChocolates', image: '/assets/categories/sweets-chocolates.jpg', target: 'home' },
    { id: 'drinks-juices', name: 'Drinks &\nJuices', image: '/assets/categories/drinks-juices.jpg', target: 'home' },
    { id: 'tea-coffee', name: 'Tea, Coffee &\nMilk Drinks', image: '/assets/categories/tea-coffee.jpg', target: 'home' },
    { id: 'instant-food', name: 'Instant\nFood', image: '/assets/categories/instant-food.jpg', target: 'home' },
    { id: 'sauces-spreads', name: 'Sauces &\nSpreads', image: '/assets/categories/sauces-spreads.jpg', target: 'home' },
    { id: 'skincare-beauty', name: 'Beauty &\nPersonal Care', image: '/assets/categories/skincare-beauty.jpg', target: 'new-for-you' },
    { id: 'pharma-wellness', name: 'Pharma &\nWellness', image: '/assets/categories/pharma-wellness.jpg', target: 'home' },
  ];

  function render() {
    const totals = cartStore.getTotals();

    container.innerHTML = `
      <!-- Top Amber/Yellow Glowing Header (Faithful to Reference Image) -->
      <header class="sticky top-0 z-30 w-full bg-gradient-to-b from-[#fed7aa]/50 via-[#fef08a]/35 to-white/95 backdrop-blur-xl border-b border-gray-100/60 px-margin-screen pt-2 pb-2.5">
        <div class="flex flex-col gap-2">
          
          <!-- Top Row: Delivery Time, Location & Actions -->
          <div class="flex items-start justify-between">
            <div class="flex flex-col">
              <span class="text-[11px] font-bold text-gray-700 leading-tight">Blinkit in</span>
              <div class="flex items-center gap-1 mt-0.5">
                <span class="text-[23px] font-black text-gray-900 tracking-tight leading-none">20 minutes</span>
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <button id="catAddressBtn" class="flex items-center gap-1 text-left mt-1 text-gray-800 hover:text-black">
                <span class="text-xs font-black uppercase tracking-tight">HOME</span>
                <span class="text-xs text-gray-600 font-semibold truncate max-w-[140px]">- Gandhi bhavan</span>
                <span class="material-symbols-outlined text-[15px] text-gray-600">arrow_drop_down</span>
              </button>
            </div>

            <div class="flex items-center gap-2 pt-0.5">
              <!-- Wallet Pill: ₹0 with Cash icon -->
              <div class="flex items-center gap-1 bg-white/90 border border-gray-200/80 rounded-full px-2.5 py-1 shadow-2xs cursor-pointer active:scale-95 transition-transform" onclick="alert('Blinkit Wallet Balance: ₹0.00 • Tap to top up')">
                <span class="text-emerald-700 text-xs">💵</span>
                <span class="text-[11px] font-black text-gray-900">₹0</span>
              </div>

              <!-- Profile Avatar -->
              <div class="w-8 h-8 rounded-full bg-white border border-gray-200/80 flex items-center justify-center text-gray-700 shadow-2xs cursor-pointer active:scale-95 transition-transform" onclick="alert('Profile: Gandhi Bhavan Hub Member')">
                <span class="material-symbols-outlined text-[19px]">person</span>
              </div>
            </div>
          </div>

          <!-- Search Bar with Mic -->
          <div class="flex items-center w-full h-10 px-3.5 bg-white rounded-2xl border border-gray-200/90 shadow-2xs focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all gap-2 mt-0.5">
            <span class="material-symbols-outlined text-gray-600 text-[20px]">search</span>
            <input type="text" placeholder="Search 'milk', 'chips', or 'atta'" class="flex-1 text-xs text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-400 font-medium" />
            <button class="w-6 h-6 flex items-center justify-center text-gray-700 hover:text-primary">
              <span class="material-symbols-outlined text-[20px]">mic</span>
            </button>
          </div>

        </div>
      </header>

      <!-- Main Scrollable Category Feed -->
      <main class="flex-1 flex flex-col px-margin-screen pt-3 pb-8 space-y-4 select-none">
        
        <!-- SECTION 1: Grocery & Kitchen (Reference 4-Col Grid) -->
        <section class="space-y-2">
          <h2 class="text-sm font-black text-gray-900 tracking-tight">Grocery &amp; Kitchen</h2>
          
          <div class="grid grid-cols-4 gap-x-2 gap-y-3">
            ${groceryCategories.map(cat => `
              <div class="category-grid-item flex flex-col items-center cursor-pointer group active:scale-95 transition-transform" data-cat-id="${cat.id}" data-target="${cat.target}">
                <!-- Soft Tinted Card Container -->
                <div class="w-full aspect-square rounded-2xl bg-[#edf6f9] p-1.5 flex items-center justify-center shadow-2xs border border-[#dceef4] group-hover:border-primary/50 group-hover:shadow-xs transition-all overflow-hidden relative">
                  <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <!-- 2-Line Centered Label -->
                <span class="text-[10px] font-extrabold text-gray-800 text-center leading-[1.2] mt-1.5 whitespace-pre-line group-hover:text-primary transition-colors">
                  ${cat.name}
                </span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- SECTION 2: Snacks & Drinks (Reference 4-Col Grid) -->
        <section class="space-y-2 pt-1">
          <h2 class="text-sm font-black text-gray-900 tracking-tight">Snacks &amp; Drinks</h2>
          
          <div class="grid grid-cols-4 gap-x-2 gap-y-3">
            ${snacksCategories.map(cat => `
              <div class="category-grid-item flex flex-col items-center cursor-pointer group active:scale-95 transition-transform" data-cat-id="${cat.id}" data-target="${cat.target}">
                <!-- Soft Tinted Card Container -->
                <div class="w-full aspect-square rounded-2xl bg-[#edf6f9] p-1.5 flex items-center justify-center shadow-2xs border border-[#dceef4] group-hover:border-primary/50 group-hover:shadow-xs transition-all overflow-hidden relative">
                  <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <!-- 2-Line Centered Label -->
                <span class="text-[10px] font-extrabold text-gray-800 text-center leading-[1.2] mt-1.5 whitespace-pre-line group-hover:text-primary transition-colors">
                  ${cat.name}
                </span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Interactive Discovery Callout Card -->
        <section class="pt-2">
          <div class="p-3 rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100/60 border border-purple-200 flex items-center justify-between shadow-2xs">
            <div class="flex flex-col pr-2">
              <span class="text-[9px] font-black text-purple-700 tracking-wide uppercase flex items-center gap-1">
                <span class="material-symbols-outlined text-[12px] text-amber-500">auto_awesome</span> New On Blinkit
              </span>
              <h4 class="text-xs font-black text-gray-900 mt-0.5">Explore New Items &amp; Aisles</h4>
              <p class="text-[9.5px] text-gray-600 mt-0.5">Brand-new launches, trial packs &amp; exclusive combos</p>
              <button id="exploreAislesBtn" class="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-[#7c3aed] text-white text-[10.5px] font-black rounded-lg shadow-2xs hover:bg-[#6d28d9] active:scale-95 w-fit transition-all">
                <span>Explore New Items</span>
                <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
              </button>
            </div>
            <div class="w-14 h-14 rounded-2xl bg-purple-200/80 p-1 flex items-center justify-center shrink-0 shadow-2xs border border-purple-300">
              <span class="material-symbols-outlined text-purple-700 text-[28px] animate-bounce">auto_awesome</span>
            </div>
          </div>
        </section>

        <!-- Floating Cart Summary Bar (Sticky inside scroll container) -->
        ${totals.count > 0 ? `
          <div class="sticky bottom-3 z-30 mx-0 mt-auto pt-2">
            <div class="bg-primary text-white rounded-2xl p-2.5 shadow-xl flex items-center justify-between border border-emerald-600/50 backdrop-blur-md">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-xs">
                  ${totals.count}
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-black leading-tight">₹${totals.grandTotal}</span>
                  <span class="text-[9.5px] text-white/80 font-medium">Saved ₹${totals.savings}</span>
                </div>
              </div>
              <button id="catViewCartBtn" class="flex items-center gap-1 bg-white text-primary px-3 py-1 rounded-xl font-black text-[11px] shadow-xs hover:bg-gray-50 active:scale-95 transition-all">
                <span>View Cart</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ` : ''}
      </main>
    `;

    // Category Grid Item Clicks
    container.querySelectorAll('.category-grid-item').forEach(item => {
      item.addEventListener('click', () => {
        const target = item.getAttribute('data-target') || 'product';
        router.navigate(target);
      });
    });

    const exploreBtn = container.querySelector('#exploreAislesBtn');
    if (exploreBtn) exploreBtn.addEventListener('click', () => router.navigate('new-for-you'));

    const viewCartBtn = container.querySelector('#catViewCartBtn');
    if (viewCartBtn) viewCartBtn.addEventListener('click', () => router.navigate('cart'));

    const addressBtn = container.querySelector('#catAddressBtn');
    if (addressBtn) addressBtn.addEventListener('click', () => alert('Delivery Location: Gandhi Bhavan, Koramangala Hub (12-20 mins)'));
  }

  const unsubscribe = cartStore.subscribe(() => {
    if (router.currentRoute === 'category') {
      render();
    }
  });

  render();
  return () => unsubscribe();
}
