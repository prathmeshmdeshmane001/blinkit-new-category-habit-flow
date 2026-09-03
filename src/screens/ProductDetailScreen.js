// Screen 3: Product Detail Screen (Refined for iPhone 17)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';

export function renderProductDetailScreen(container) {
  let selectedUnit = '1 kg';
  let isFavorite = false;

  function render() {
    const totals = cartStore.getTotals();
    const potatoQty = cartStore.getItemQty('potato');
    const isComboAdded = cartStore.trialCombosAdded.has('potato-oil-combo');

    const price = selectedUnit === '1 kg' ? 26 : 75;
    const strikethrough = selectedUnit === '1 kg' ? 33 : 99;

    container.innerHTML = `
      <!-- Sticky Top Bar inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="productBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="h-6 flex items-center">
              <span class="text-lg font-black tracking-tighter text-black font-sans">blink<span class="text-primary font-black">it</span></span>
            </div>
            <h1 class="text-xs font-black text-on-surface truncate ml-1">Product Details</h1>
          </div>
          <div class="flex items-center gap-1">
            <button class="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 hover:text-on-surface">
              <span class="material-symbols-outlined text-[18px]">share</span>
            </button>
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              <span class="material-symbols-outlined text-[15px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Scrollable Content -->
      <main class="flex-1 flex flex-col pb-6 relative">
        <div class="flex flex-col w-full">
          <!-- Delivery Promise Pill -->
          <div class="px-margin-screen pt-2 pb-1 flex items-center justify-between">
            <div class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80 shadow-2xs">
              <span class="material-symbols-outlined text-primary text-[14px]">bolt</span>
              <span class="text-[10px] font-bold">Delivery in 8 mins</span>
              <span class="text-gray-400 text-[9px]">• Instant dispatch</span>
            </div>
            <div class="flex items-center gap-0.5 text-primary">
              <span class="material-symbols-outlined text-[15px]">verified</span>
              <span class="text-[9.5px] font-black">Farm Certified</span>
            </div>
          </div>

          <!-- Hero Image Container -->
          <div class="relative w-full px-margin-screen mt-1">
            <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-2xs flex items-center justify-center p-3 border border-gray-100">
              <img class="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300" alt="Fresh Potatoes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAsGvdPMFR0ksrhoggX5M5Eyr_x0uADAISOZuzh_GL8saBb0XJm-Bj5SMwfzENjEa2Te7-0jajwZ5LdIktpA9ilgtRz31xxQqDE9JK_nASQNTx2SAa-Zs1pBKauDK5_efz7ICFixfwKwfnA7Q35Y6F_J4Oh1OJ9nj24GDAcFZ-pjp4Kg-s87utfqouXSgiklETdEzqhdXDKUsExSLKfd2sfkrbOKmvZc21D7ynDYkxy0rpS3yWOVEJ" />

              <!-- Badges on image -->
              <div class="absolute top-2.5 left-2.5 flex flex-col gap-1">
                <span class="px-2 py-0.5 rounded-full bg-secondary-container text-white text-[8px] uppercase tracking-wide shadow-2xs font-black">
                  25% OFF
                </span>
                <span class="px-2 py-0.5 rounded-full bg-white/90 text-primary text-[8.5px] flex items-center gap-0.5 font-bold border border-emerald-200 shadow-2xs">
                  <span class="material-symbols-outlined text-[10px]">eco</span>
                  Naturally Grown
                </span>
              </div>

              <!-- Bookmark / Favorite toggle -->
              <button id="favoriteBtn" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 shadow-2xs flex items-center justify-center text-gray-500 hover:text-secondary active:scale-95 transition-transform border border-gray-100">
                <span class="material-symbols-outlined text-[18px] ${isFavorite ? 'text-red-500' : ''}" style="${isFavorite ? "font-variation-settings: 'FILL' 1;" : ''}">
                  ${isFavorite ? 'favorite' : 'favorite_border'}
                </span>
              </button>

              <!-- Carousel Dots -->
              <div class="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-1">
                <span class="w-4 h-1 rounded-full bg-primary transition-all duration-200"></span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
              </div>
            </div>
          </div>

          <!-- Breadcrumbs & Title Section -->
          <div class="px-margin-screen pt-2">
            <div class="flex items-center gap-0.5 text-[9.5px] text-gray-500 mb-0.5">
              <span>Home</span>
              <span class="material-symbols-outlined text-[10px]">chevron_right</span>
              <span>Fresh Vegetables</span>
              <span class="material-symbols-outlined text-[10px]">chevron_right</span>
              <span class="text-gray-900 font-bold">Potato</span>
            </div>
            <div class="flex items-start justify-between gap-2 mt-0.5">
              <div>
                <h2 class="text-base text-gray-900 font-black tracking-tight leading-snug">
                  Potato (Alugadde)
                </h2>
                <p class="text-[11px] text-gray-500 mt-0.5 flex items-center gap-1">
                  <span>Freshly harvested from farms</span>
                  <span class="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
                  <span class="text-primary font-bold">Crisp &amp; firm</span>
                </p>
              </div>
              <div class="flex flex-col items-end shrink-0 pt-0.5">
                <div class="flex items-center gap-0.5 text-primary">
                  <span class="material-symbols-outlined text-[13px]">schedule</span>
                  <span class="text-xs font-black">8 MINS</span>
                </div>
                <span class="text-[8.5px] text-gray-400 font-semibold">to your door</span>
              </div>
            </div>
          </div>

          <!-- Unit Selector Chips -->
          <div class="px-margin-screen mt-2">
            <span class="text-[9.5px] text-gray-500 uppercase tracking-wider block mb-1.5 font-bold">
              Select Unit
            </span>
            <div class="grid grid-cols-2 gap-2">
              <!-- Option 1: 1 kg -->
              <div id="unitOption1" class="cursor-pointer p-2 rounded-2xl bg-white shadow-2xs transition-all relative overflow-hidden border ${selectedUnit === '1 kg' ? 'ring-2 ring-primary border-primary' : 'border-gray-200 hover:bg-slate-50'}">
                <div class="absolute top-0 right-0 bg-primary text-white text-[7.5px] px-1.5 py-0.5 rounded-bl-lg font-black">
                  25% OFF
                </div>
                <p class="text-xs text-gray-900 font-extrabold">1 kg</p>
                <div class="flex items-baseline gap-1 mt-0.5">
                  <span class="text-xs font-black text-gray-900">₹26</span>
                  <span class="text-[9px] text-gray-400 line-through">₹33</span>
                </div>
                ${selectedUnit === '1 kg' ? `
                  <p class="text-[9px] text-primary mt-0.5 flex items-center gap-0.5 font-bold">
                    <span class="material-symbols-outlined text-[11px]">check_circle</span> Selected
                  </p>
                ` : `
                  <p class="text-[9px] text-gray-400 mt-0.5">Daily staple</p>
                `}
              </div>

              <!-- Option 2: Bulk Pack -->
              <div id="unitOption2" class="cursor-pointer p-2 rounded-2xl bg-white shadow-2xs transition-all relative overflow-hidden border ${selectedUnit === '3 x 1 kg' ? 'ring-2 ring-primary border-primary' : 'border-gray-200 hover:bg-slate-50'}">
                <div class="absolute top-0 right-0 bg-secondary-container text-white text-[7.5px] px-1.5 py-0.5 rounded-bl-lg font-black">
                  SUPER SAVER
                </div>
                <p class="text-xs text-gray-900 font-extrabold">3 x 1 kg</p>
                <div class="flex items-baseline gap-1 mt-0.5">
                  <span class="text-xs font-black text-gray-900">₹75</span>
                  <span class="text-[9px] text-gray-400 line-through">₹99</span>
                </div>
                ${selectedUnit === '3 x 1 kg' ? `
                  <p class="text-[9px] text-primary mt-0.5 flex items-center gap-0.5 font-bold">
                    <span class="material-symbols-outlined text-[11px]">check_circle</span> Selected
                  </p>
                ` : `
                  <p class="text-[9px] text-gray-400 mt-0.5">Save ₹24 bulk</p>
                `}
              </div>
            </div>
          </div>

          <!-- Interactive Unit Price & Stepper Row -->
          <div class="px-margin-screen mt-2">
            <div class="p-2.5 rounded-2xl bg-white shadow-2xs flex items-center justify-between border border-gray-100">
              <div>
                <span class="text-[9px] text-gray-400 uppercase tracking-wider block font-bold">Total in Cart</span>
                <div class="flex items-baseline gap-1.5 mt-0.5">
                  <span class="text-sm text-gray-900 font-black">₹${price}</span>
                  <span class="text-[10px] text-gray-400 line-through">₹${strikethrough}</span>
                  <span class="px-1 py-0.2 rounded bg-emerald-100 text-primary text-[8.5px] font-black">Save 25%</span>
                </div>
              </div>

              <!-- Quantity Stepper -->
              ${potatoQty > 0 ? `
                <div class="inline-flex items-center rounded-xl bg-primary text-white shadow-2xs h-8 px-1 font-bold">
                  <button id="stepDownBtn" class="w-7 h-7 flex items-center justify-center hover:bg-primary-container rounded transition-colors active:scale-95">
                    <span class="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span class="text-xs px-2 select-none">${potatoQty}</span>
                  <button id="stepUpBtn" class="w-7 h-7 flex items-center justify-center hover:bg-primary-container rounded transition-colors active:scale-95">
                    <span class="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              ` : `
                <button id="addPotatoBtn" class="h-8 px-4 bg-primary text-white rounded-xl text-xs font-black shadow-xs hover:bg-primary-container active:scale-95 transition-all">
                  ADD TO CART
                </button>
              `}
            </div>
          </div>

          <!-- Delight Feature: Trial Combo Card -->
          <div class="px-margin-screen mt-3">
            <div class="rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/60 shadow-2xs p-3 relative overflow-hidden border border-emerald-300">
              <div class="flex items-center justify-between pb-2">
                <div class="flex items-center gap-1.5">
                  <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-2xs">
                    <span class="material-symbols-outlined text-[14px]">auto_awesome</span>
                  </div>
                  <div>
                    <h3 class="text-xs text-gray-900 leading-tight font-extrabold">
                      Trial Combo — Save more, try something new
                    </h3>
                    <p class="text-[9.5px] text-gray-500">Recommended with Potato orders</p>
                  </div>
                </div>
                <span class="px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[8px] uppercase tracking-wider font-black">
                  Save ₹31
                </span>
              </div>

              <!-- Products in Combo preview -->
              <div class="bg-white rounded-xl p-2 shadow-2xs border border-emerald-100 flex items-center justify-between gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <div class="flex -space-x-2 shrink-0">
                    <div class="w-10 h-10 rounded-xl bg-slate-50 p-0.5 border border-white shadow-2xs overflow-hidden">
                      <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q" alt="Potato" />
                    </div>
                    <div class="w-10 h-10 rounded-xl bg-slate-50 p-0.5 border border-white shadow-2xs overflow-hidden">
                      <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDkYZPUbQomyrJjDQVKtDUjgqYhvHFUqYqMHIhulqyQhPvW21sYRrYyww5KNnDUaIHC9HowFYy0S7CsYBaA-Dp8Bt3aiKbf3MyDaNV5-dcVbb3xZh79kU8Q6GUSUKGvcUhG3fL_yrXxSseE0Xb9GSIbHNfdUuKOGmuZmk2BG6OnJ_bCt_QO_6jCTEKcUfudg7mlasFYV6Y5u5sRmDUVpiJXGpy73FPCwZYEj3qLEw0tclc-G0OC6yp" alt="Cold Pressed Mustard Oil" />
                    </div>
                  </div>
                  <div class="flex flex-col min-w-0">
                    <span class="text-[10.5px] text-gray-900 font-bold truncate">Potato (1 kg) + Cold Pressed Oil (200ml)</span>
                    <span class="text-[9px] text-primary font-bold flex items-center gap-0.5">
                      <span class="material-symbols-outlined text-[10px]">verified</span> 100% Risk-Free Guarantee
                    </span>
                  </div>
                </div>

                <div class="flex flex-col items-end shrink-0">
                  <div class="flex items-baseline gap-0.5">
                    <span class="text-xs font-black text-gray-900">₹89</span>
                    <span class="text-[9px] text-gray-400 line-through">₹120</span>
                  </div>
                  <button id="addComboBtn" class="mt-1 px-2.5 py-1 rounded-lg text-[10px] font-black transition-all shadow-2xs ${isComboAdded ? 'bg-emerald-100 text-primary border border-primary' : 'bg-primary text-white hover:bg-primary-container active:scale-95'}">
                    ${isComboAdded ? '✓ Added' : '+ Add Combo'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Cart Summary Bar (Sticky inside scroll container) -->
        ${totals.count > 0 ? `
          <div class="sticky bottom-3 z-30 mx-margin-screen mt-auto pt-2">
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
              <button id="productViewCartBtn" class="flex items-center gap-1 bg-white text-primary px-3 py-1 rounded-xl font-black text-[11px] shadow-xs hover:bg-gray-50 active:scale-95 transition-all">
                <span>View Cart</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ` : ''}
      </main>
    `;

    // Event handlers
    const backBtn = container.querySelector('#productBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.navigate('home'));

    const favBtn = container.querySelector('#favoriteBtn');
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        isFavorite = !isFavorite;
        render();
      });
    }

    const opt1 = container.querySelector('#unitOption1');
    if (opt1) {
      opt1.addEventListener('click', () => {
        selectedUnit = '1 kg';
        render();
      });
    }

    const opt2 = container.querySelector('#unitOption2');
    if (opt2) {
      opt2.addEventListener('click', () => {
        selectedUnit = '3 x 1 kg';
        render();
      });
    }

    const stepDown = container.querySelector('#stepDownBtn');
    if (stepDown) {
      stepDown.addEventListener('click', () => cartStore.removeItem('potato'));
    }

    const stepUp = container.querySelector('#stepUpBtn');
    if (stepUp) {
      stepUp.addEventListener('click', () => {
        cartStore.addItem({
          id: 'potato',
          name: 'Potato (Alugadde)',
          unit: selectedUnit,
          price: selectedUnit === '1 kg' ? 26 : 75,
          originalPrice: selectedUnit === '1 kg' ? 33 : 99,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q'
        });
      });
    }

    const addBtn = container.querySelector('#addPotatoBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        cartStore.addItem({
          id: 'potato',
          name: 'Potato (Alugadde)',
          unit: selectedUnit,
          price: selectedUnit === '1 kg' ? 26 : 75,
          originalPrice: selectedUnit === '1 kg' ? 33 : 99,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q'
        });
      });
    }

    const addCombo = container.querySelector('#addComboBtn');
    if (addCombo) {
      addCombo.addEventListener('click', () => {
        cartStore.addCombo({
          id: 'potato-oil-combo',
          name: 'Potato + Cold Pressed Oil Trial Combo',
          unit: '1 kg + 200ml',
          price: 89,
          originalPrice: 120,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDkYZPUbQomyrJjDQVKtDUjgqYhvHFUqYqMHIhulqyQhPvW21sYRrYyww5KNnDUaIHC9HowFYy0S7CsYBaA-Dp8Bt3aiKbf3MyDaNV5-dcVbb3xZh79kU8Q6GUSUKGvcUhG3fL_yrXxSseE0Xb9GSIbHNfdUuKOGmuZmk2BG6OnJ_bCt_QO_6jCTEKcUfudg7mlasFYV6Y5u5sRmDUVpiJXGpy73FPCwZYEj3qLEw0tclc-G0OC6yp'
        });
      });
    }

    const viewCart = container.querySelector('#productViewCartBtn');
    if (viewCart) viewCart.addEventListener('click', () => router.navigate('cart'));
  }

  const unsubscribe = cartStore.subscribe(() => {
    if (router.currentRoute === 'product') {
      render();
    }
  });

  render();
  return () => unsubscribe();
}
