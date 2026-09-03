// Screen 1: Home Screen (With Beauty, Medicine, Electronics & Multi-Combos)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';
import { FEATURED_COMBOS, getComboStats } from '../data/combos.js';
import { openComboModal } from '../components/ComboModal.js';

export function renderHomeScreen(container) {
  let activeComboCategory = 'All';

  function render() {
    const totals = cartStore.getTotals();
    const potatoQty = cartStore.getItemQty('potato');
    const chilliQty = cartStore.getItemQty('chilli');
    const onionQty = cartStore.getItemQty('onion');

    const categories = ['All', 'Clothing', 'Beauty', 'Medicine', 'Electronics', 'Fitness', 'Dinner', 'Breakfast', 'Snacks'];
    const filteredCombos = activeComboCategory === 'All' 
      ? FEATURED_COMBOS 
      : FEATURED_COMBOS.filter(c => c.category === activeComboCategory);

    container.innerHTML = `
      <!-- Sticky Header inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="h-7 flex items-center">
                <span class="text-[22px] font-black tracking-tighter text-black font-sans">blink<span class="text-primary font-black">it</span></span>
              </div>
              <div class="flex flex-col text-left">
                <div class="flex items-center gap-1">
                  <span class="text-xs font-black text-on-surface leading-none">Blinkit in 12 mins</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <button id="homeAddressBtn" class="flex items-center gap-0.5 text-on-surface-variant hover:text-on-surface text-left mt-0.5">
                  <span class="text-[10px] text-gray-500 font-medium truncate max-w-[170px]">Home - Koramangala, Bengaluru</span>
                  <span class="material-symbols-outlined text-[13px] text-gray-400">expand_more</span>
                </button>
              </div>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white shadow-xs cursor-pointer active:scale-95 transition-transform" onclick="alert('Profile: Gold Member • Koramangala Hub')">
                <span class="material-symbols-outlined text-[16px]">person</span>
              </div>
            </div>
          </div>
          
          <!-- Search Bar -->
          <div class="flex items-center w-full h-9 px-3 bg-[#f1f5f9] rounded-xl border border-transparent focus-within:border-primary/40 focus-within:bg-white transition-all gap-2">
            <span class="material-symbols-outlined text-gray-400 text-[18px]">search</span>
            <input type="text" placeholder="Search 'pasta combo', 'first aid', or 'skincare'" class="flex-1 text-xs text-on-surface bg-transparent focus:outline-none placeholder:text-gray-400 font-normal" />
            <button class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-primary">
              <span class="material-symbols-outlined text-[18px]">mic</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Scrollable Content -->
      <main class="flex-1 flex flex-col pb-6 relative">
        <!-- Promo Coupon Banner: First Time Beauty Discovery -->
        <section class="px-margin-screen pt-2.5 pb-1" id="promo-coupon-banner">
          <div class="relative bg-gradient-to-br from-[#ffedd5] via-[#fed7aa] to-[#fdba74]/50 rounded-2xl p-3 shadow-xs border border-orange-200/80">
            <button class="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full bg-white/80 text-gray-500 hover:text-gray-800 transition-all" onclick="document.getElementById('promo-coupon-banner').style.display='none'">
              <span class="material-symbols-outlined text-[14px]">close</span>
            </button>
            <div class="flex items-center gap-1.5 mb-1">
              <span class="bg-secondary-container text-on-secondary text-[8.5px] px-1.5 py-0.5 rounded-full font-black tracking-wide uppercase shadow-2xs">
                FIRST TIME OFFER
              </span>
              <span class="text-[9.5px] text-secondary font-bold flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[12px]">auto_awesome</span> Beauty Special
              </span>
            </div>
            <h3 class="text-xs text-on-secondary-fixed font-bold leading-tight pr-5">
              First time in Beauty this month? Get 15% off + easy returns on orders above ₹300.
            </h3>
            <div class="flex items-center justify-between mt-2.5 pt-0.5">
              <button id="claimOfferBtn" class="h-7 px-3 bg-primary text-on-primary rounded-lg text-[11px] font-bold shadow-xs hover:bg-primary-container active:scale-95 transition-all flex items-center gap-1">
                <span>Claim Offer</span>
                <span class="material-symbols-outlined text-[14px]">chevron_right</span>
              </button>
              <button id="termsBtn" class="flex items-center gap-0.5 text-gray-600 hover:text-black text-[10px] font-medium transition-colors">
                <span class="material-symbols-outlined text-[13px]">info</span>
                <span>T&amp;C Apply</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Quick Category Discovery Pills -->
        <section class="px-margin-screen pt-2 pb-1">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Explore Aisles</span>
            <button id="viewAllCategoriesBtn" class="text-primary text-[10px] font-bold hover:underline">All Categories</button>
          </div>
          <div class="grid grid-cols-4 gap-2">
            <div class="cat-pill bg-white p-2 rounded-2xl shadow-2xs border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 active:scale-95 transition-all text-center" data-goto="category">
              <span class="text-2xl mb-0.5">🍳</span>
              <span class="text-[10px] font-bold text-gray-800 leading-tight">Kitchen</span>
            </div>
            <div class="cat-pill bg-white p-2 rounded-2xl shadow-2xs border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 active:scale-95 transition-all text-center" data-goto="new-for-you">
              <span class="text-2xl mb-0.5">💄</span>
              <span class="text-[10px] font-bold text-gray-800 leading-tight">Beauty</span>
            </div>
            <div class="cat-pill bg-white p-2 rounded-2xl shadow-2xs border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 active:scale-95 transition-all text-center" data-goto="product">
              <span class="text-2xl mb-0.5">🥔</span>
              <span class="text-[10px] font-bold text-gray-800 leading-tight">Veggies</span>
            </div>
            <div class="cat-pill bg-white p-2 rounded-2xl shadow-2xs border border-gray-100 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 active:scale-95 transition-all text-center" data-goto="guarantee">
              <span class="text-2xl mb-0.5">🛡️</span>
              <span class="text-[10px] font-bold text-gray-800 leading-tight">Guarantee</span>
            </div>
          </div>
        </section>

        <!-- MULTI-COMBO SECTION: "Banger Combos" -->
        <section class="px-margin-screen pt-2.5 pb-2">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 rounded-md bg-amber-100 flex items-center justify-center text-amber-600">
                <span class="material-symbols-outlined text-[15px]">local_fire_department</span>
              </div>
              <h2 class="text-xs font-black text-gray-900 tracking-tight">Banger Combos</h2>
            </div>
            <span class="text-[9.5px] text-amber-800 font-extrabold bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
              🔥 Up to 31% OFF
            </span>
          </div>
          <p class="text-[10px] text-gray-500 mb-2 leading-tight">
            Curated high-savings bundles. Tap any combo to view items present &amp; money saved!
          </p>

          <!-- Combo Category Tabs -->
          <div class="flex gap-1.5 overflow-x-auto pb-1.5 no-scrollbar -mx-margin-screen px-margin-screen mb-1">
            ${categories.map(cat => `
              <button class="combo-filter-chip px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${
                activeComboCategory === cat 
                  ? 'bg-primary text-white shadow-2xs' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary'
              }" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Multi-Combo Horizontal Scroll Showcase -->
          <div class="flex gap-2.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar -mx-margin-screen px-margin-screen">
            ${filteredCombos.map(combo => {
              const stats = getComboStats(combo);
              const isAdded = cartStore.hasItem(combo.id);

              return `
                <div class="combo-preview-card flex-shrink-0 w-[210px] bg-white rounded-2xl p-2.5 shadow-2xs border border-gray-200/90 hover:border-primary/50 transition-all cursor-pointer flex flex-col justify-between active:scale-[0.98] group" data-combo-preview-id="${combo.id}">
                  <div>
                    <!-- Combo Image with Badges -->
                    <div class="relative w-full h-24 rounded-xl overflow-hidden bg-slate-100 mb-1.5">
                      <img src="${combo.image}" alt="${combo.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
                      
                      <div class="absolute top-1.5 left-1.5">
                        <span class="bg-secondary-container text-white text-[8px] px-1.5 py-0.5 rounded-md font-black uppercase shadow-2xs">
                          ${stats.savingsPct}% OFF
                        </span>
                      </div>

                      <div class="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-white">
                        <span class="text-[9px] font-black bg-black/50 backdrop-blur-xs px-1.5 py-0.2 rounded">
                          ${stats.itemsCount} items inside
                        </span>
                        <span class="text-[8.5px] font-bold text-emerald-300 flex items-center gap-0.5">
                          <span class="material-symbols-outlined text-[10px]">timer</span> ${combo.prepTime}
                        </span>
                      </div>
                    </div>

                    <!-- Title & Tagline -->
                    <h3 class="text-[12px] font-black text-gray-900 line-clamp-1 leading-tight group-hover:text-primary transition-colors">
                      ${combo.title}
                    </h3>
                    <p class="text-[9.5px] text-gray-500 line-clamp-1 mt-0.5">
                      ${combo.tagline}
                    </p>

                    <!-- Items Mini Preview Stack -->
                    <div class="flex items-center gap-1 my-1.5 bg-slate-50 p-1 rounded-lg border border-gray-100">
                      <div class="flex -space-x-1.5 overflow-hidden">
                        ${combo.items.slice(0, 3).map(item => `
                          <img class="inline-block h-5 w-5 rounded-full ring-1 ring-white object-contain bg-white" src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                        `).join('')}
                      </div>
                      <span class="text-[8.5px] text-gray-600 font-bold truncate">
                        ${combo.items.map(i => i.name.split(' ')[0]).join(' + ')}
                      </span>
                    </div>
                  </div>

                  <!-- Price & Action Row -->
                  <div class="mt-auto pt-1 border-t border-gray-100 flex items-center justify-between">
                    <div class="flex flex-col">
                      <div class="flex items-baseline gap-1">
                        <span class="text-xs font-black text-gray-900">₹${stats.comboPrice}</span>
                        <span class="text-[9px] line-through text-gray-400">₹${stats.singleTotal}</span>
                      </div>
                      <span class="text-[8.5px] text-primary font-extrabold">Save ₹${stats.savings}</span>
                    </div>

                    <button class="combo-details-btn px-2.5 py-1 rounded-lg text-[10px] font-black transition-all shadow-2xs ${
                      isAdded 
                        ? 'bg-emerald-100 text-primary border border-primary' 
                        : 'bg-primary text-white hover:bg-primary-container active:scale-95'
                    }" data-combo-btn-id="${combo.id}">
                      ${isAdded ? '✓ Added' : 'View Details'}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Bestsellers Section -->
        <section class="px-margin-screen pt-1 pb-1">
          <div class="flex items-center justify-between mb-1.5">
            <div class="flex items-center gap-1.5">
              <h2 class="text-sm text-gray-900 font-extrabold tracking-tight">Bestsellers</h2>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8.5px] font-bold bg-emerald-100 text-primary">
                Fast moving
              </span>
            </div>
            <button data-goto="category" class="text-xs text-primary font-bold hover:opacity-80 transition-opacity">
              see all
            </button>
          </div>

          <!-- Horizontal Product Scroll -->
          <div class="flex gap-2 overflow-x-auto pb-1 pt-0.5 no-scrollbar -mx-margin-screen px-margin-screen">
            <!-- Item 1: Potato -->
            <div class="flex-shrink-0 w-[124px] bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between relative border border-gray-100">
              <div class="cursor-pointer" data-goto="product">
                <div class="relative w-full aspect-square bg-slate-50 rounded-xl p-1 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 bg-secondary-container text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-2xs">25% OFF</span>
                  <img class="w-full h-full object-contain mix-blend-multiply" alt="Potato" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <div class="flex items-center gap-0.5 mb-0.5">
                  <span class="material-symbols-outlined text-primary text-[11px]">schedule</span>
                  <span class="text-[9px] text-gray-500 font-bold">8 MINS</span>
                </div>
                <div class="flex flex-col min-h-[28px] mb-1">
                  <h3 class="text-[11px] text-gray-900 font-bold line-clamp-1 leading-tight hover:text-primary">Potato (Alugadde)</h3>
                  <span class="text-[10px] text-gray-500">1 kg</span>
                </div>
              </div>
              <div class="flex items-center justify-between mt-auto pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900 leading-tight">₹26</span>
                  <span class="text-[9px] text-gray-400 line-through leading-none">₹33</span>
                </div>
                ${potatoQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[64px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.blinkitCart.remove('potato')">−</button>
                    <span class="text-[11px] px-1">${potatoQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.blinkitCart.add('potato')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/50 rounded-lg text-[10px] shadow-2xs hover:bg-emerald-50 active:scale-95 transition-all font-black" onclick="window.blinkitCart.add('potato')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Item 2: Green Chilli -->
            <div class="flex-shrink-0 w-[124px] bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between relative border border-gray-100">
              <div class="relative w-full aspect-square bg-slate-50 rounded-xl p-1 flex items-center justify-center overflow-hidden mb-1">
                <span class="absolute top-1 left-1 bg-secondary-container text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-2xs">28% OFF</span>
                <img class="w-full h-full object-contain mix-blend-multiply" alt="Green Chilli" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8POul-Ts2y0jfHzRDDGxzTLj-D3ZtGgDc01KQMwsLNDCRew-xDb3Ji4OjTvh2a3rade_ZxGLc15JsKsKArNLIDUG7EqozLlZCjlplJHcy9lYB7q_OoWYAHGjqvdj1FPoMqv3v1N1TvECEP3NfKAGCoBHp5A8jKSbNRez4Mojn-lAB8tnuQJdZ7dh0narPC6ptin0AL6A0blR1bnnk6gIH3QGumcl1U3VZif8SF31ygqrJHgSP-iyV" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
              </div>
              <div class="flex items-center gap-0.5 mb-0.5">
                <span class="material-symbols-outlined text-primary text-[11px]">schedule</span>
                <span class="text-[9px] text-gray-500 font-bold">8 MINS</span>
              </div>
              <div class="flex flex-col min-h-[28px] mb-1">
                <h3 class="text-[11px] text-gray-900 font-bold line-clamp-1 leading-tight">Green Chilli</h3>
                <span class="text-[10px] text-gray-500">100 g</span>
              </div>
              <div class="flex items-center justify-between mt-auto pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900 leading-tight">₹20</span>
                  <span class="text-[9px] text-gray-400 line-through leading-none">₹28</span>
                </div>
                ${chilliQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[64px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.blinkitCart.remove('chilli')">−</button>
                    <span class="text-[11px] px-1">${chilliQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.blinkitCart.add('chilli')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/50 rounded-lg text-[10px] shadow-2xs hover:bg-emerald-50 active:scale-95 transition-all font-black" onclick="window.blinkitCart.add('chilli')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Item 3: Onion -->
            <div class="flex-shrink-0 w-[124px] bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between relative border border-gray-100">
              <div class="relative w-full aspect-square bg-slate-50 rounded-xl p-1 flex items-center justify-center overflow-hidden mb-1">
                <span class="absolute top-1 left-1 bg-secondary-container text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-2xs">21% OFF</span>
                <img class="w-full h-full object-contain mix-blend-multiply" alt="Onion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTBnPf2PSEPiwb7AfZpIHyAgTdRAk7i1LkDEiTpazErP-2fXZzzsvrpq9p6fWuzyyFcchUyICMRo7fv3-stOpQA3xtnNB7VRuLqHbDF5OOGJJgcfXmWuG06xBmGl2QDI20NEGvmnm6f7CuVz6G3Uo7lB4YLuB_wXnyPjkjsZjIOLC3SU0kGbbogrPfIKzc8dnVvlJ0eF3rlySgvzS8giWC60hVJElE6fkIaVOWtymEJirfojFYagh0" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
              </div>
              <div class="flex items-center gap-0.5 mb-0.5">
                <span class="material-symbols-outlined text-primary text-[11px]">schedule</span>
                <span class="text-[9px] text-gray-500 font-bold">8 MINS</span>
              </div>
              <div class="flex flex-col min-h-[28px] mb-1">
                <h3 class="text-[11px] text-gray-900 font-bold line-clamp-1 leading-tight">Onion (Eerulli)</h3>
                <span class="text-[10px] text-gray-500">1 kg</span>
              </div>
              <div class="flex items-center justify-between mt-auto pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900 leading-tight">₹39</span>
                  <span class="text-[9px] text-gray-400 line-through leading-none">₹50</span>
                </div>
                ${onionQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[64px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.blinkitCart.remove('onion')">−</button>
                    <span class="text-[11px] px-1">${onionQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.blinkitCart.add('onion')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/50 rounded-lg text-[10px] shadow-2xs hover:bg-emerald-50 active:scale-95 transition-all font-black" onclick="window.blinkitCart.add('onion')">
                    ADD
                  </button>
                `}
              </div>
            </div>
          </div>
        </section>

        <!-- Category Discovery Feature Card: Home & Kitchen Trial Card -->
        <section class="px-margin-screen pt-2 pb-2">
          <div class="p-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 shadow-2xs flex items-center justify-between">
            <div class="flex flex-col pr-2">
              <span class="text-[9px] font-black text-primary tracking-wide uppercase flex items-center gap-1">
                <span class="material-symbols-outlined text-[12px]">stars</span> New Aisle Discovery
              </span>
              <h4 class="text-xs font-black text-gray-900 mt-0.5">Explore Home & Kitchen</h4>
              <p class="text-[10px] text-gray-600 mt-0.5">100% Risk-Free Trial with Doorstep Returns</p>
              <button data-goto="category" class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 bg-primary text-white text-[10px] font-bold rounded-lg shadow-2xs hover:bg-primary-container active:scale-95 w-fit transition-all">
                <span>Browse Catalog</span>
                <span class="material-symbols-outlined text-[12px]">arrow_forward</span>
              </button>
            </div>
            <div class="w-16 h-16 bg-white rounded-xl shadow-2xs p-1 flex items-center justify-center shrink-0 border border-emerald-100">
              <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDkYZPUbQomyrJjDQVKtDUjgqYhvHFUqYqMHIhulqyQhPvW21sYRrYyww5KNnDUaIHC9HowFYy0S7CsYBaA-Dp8Bt3aiKbf3MyDaNV5-dcVbb3xZh79kU8Q6GUSUKGvcUhG3fL_yrXxSseE0Xb9GSIbHNfdUuKOGmuZmk2BG6OnJ_bCt_QO_6jCTEKcUfudg7mlasFYV6Y5u5sRmDUVpiJXGpy73FPCwZYEj3qLEw0tclc-G0OC6yp" alt="Kitchen Jar" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
            </div>
          </div>
        </section>

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
                  <span class="text-[9.5px] text-white/80 font-medium">Saved ₹${totals.savings} · 8 mins delivery</span>
                </div>
              </div>
              <button data-goto="cart" class="flex items-center gap-1 bg-white text-primary px-3 py-1 rounded-xl font-black text-[11px] shadow-xs hover:bg-gray-50 active:scale-95 transition-all">
                <span>View Cart</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ` : ''}
      </main>
    `;

    // Global cart helper attached to window
    window.blinkitCart = {
      add: (itemId) => {
        if (itemId === 'potato') {
          cartStore.addItem({
            id: 'potato',
            name: 'Potato (Alugadde)',
            unit: '1 kg',
            price: 26,
            originalPrice: 33,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q'
          });
        } else if (itemId === 'chilli') {
          cartStore.addItem({
            id: 'chilli',
            name: 'Green Chilli',
            unit: '100 g',
            price: 20,
            originalPrice: 28,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8POul-Ts2y0jfHzRDDGxzTLj-D3ZtGgDc01KQMwsLNDCRew-xDb3Ji4OjTvh2a3rade_ZxGLc15JsKsKArNLIDUG7EqozLlZCjlplJHcy9lYB7q_OoWYAHGjqvdj1FPoMqv3v1N1TvECEP3NfKAGCoBHp5A8jKSbNRez4Mojn-lAB8tnuQJdZ7dh0narPC6ptin0AL6A0blR1bnnk6gIH3QGumcl1U3VZif8SF31ygqrJHgSP-iyV'
          });
        } else if (itemId === 'onion') {
          cartStore.addItem({
            id: 'onion',
            name: 'Onion (Eerulli)',
            unit: '1 kg',
            price: 39,
            originalPrice: 50,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTBnPf2PSEPiwb7AfZpIHyAgTdRAk7i1LkDEiTpazErP-2fXZzzsvrpq9p6fWuzyyFcchUyICMRo7fv3-stOpQA3xtnNB7VRuLqHbDF5OOGJJgcfXmWuG06xBmGl2QDI20NEGvmnm6f7CuVz6G3Uo7lB4YLuB_wXnyPjkjsZjIOLC3SU0kGbbogrPfIKzc8dnVvlJ0eF3rlySgvzS8giWC60hVJElE6fkIaVOWtymEJirfojFYagh0'
          });
        }
      },
      remove: (itemId) => cartStore.removeItem(itemId)
    };

    // Navigation links
    container.querySelectorAll('[data-goto]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        router.navigate(el.getAttribute('data-goto'));
      });
    });

    const claimBtn = container.querySelector('#claimOfferBtn');
    if (claimBtn) claimBtn.addEventListener('click', () => router.navigate('new-for-you'));

    const termsBtn = container.querySelector('#termsBtn');
    if (termsBtn) termsBtn.addEventListener('click', () => router.navigate('guarantee'));

    const viewAllBtn = container.querySelector('#viewAllCategoriesBtn');
    if (viewAllBtn) viewAllBtn.addEventListener('click', () => router.navigate('category'));

    // Combo Category Filters
    container.querySelectorAll('.combo-filter-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        activeComboCategory = chip.getAttribute('data-cat');
        render();
      });
    });

    // Tap Combo Card to open Bottom Sheet Modal with exact items & savings
    container.querySelectorAll('.combo-preview-card').forEach(card => {
      card.addEventListener('click', () => {
        const comboId = card.getAttribute('data-combo-preview-id');
        const combo = FEATURED_COMBOS.find(c => c.id === comboId);
        if (combo) {
          openComboModal(combo, () => render());
        }
      });
    });

    // Also handle direct tap on the card's button
    container.querySelectorAll('.combo-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const comboId = btn.getAttribute('data-combo-btn-id');
        const combo = FEATURED_COMBOS.find(c => c.id === comboId);
        if (combo) {
          openComboModal(combo, () => render());
        }
      });
    });
  }

  const unsubscribe = cartStore.subscribe(() => {
    if (router.currentRoute === 'home') {
      render();
    }
  });

  render();
  return () => unsubscribe();
}
