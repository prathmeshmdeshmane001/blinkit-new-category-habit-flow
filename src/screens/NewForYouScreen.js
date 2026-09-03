// Screen 8: New on Blinkit Landing Page (Featuring Undergarments & Clothing Section)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';
import { FEATURED_COMBOS } from '../data/combos.js';
import { renderComboCardHtml, bindComboCardEvents } from '../components/ComboCard.js';

export function renderNewForYouScreen(container) {
  function render() {
    const totals = cartStore.getTotals();
    const plumQty = cartStore.getItemQty('plum-facewash');
    const almondsQty = cartStore.getItemQty('roasted-almonds');
    const trunksQty = cartStore.getItemQty('xyxx-trunks');
    const vestQty = cartStore.getItemQty('jockey-vest');
    const braletteQty = cartStore.getItemQty('amante-bralette');
    const socksQty = cartStore.getItemQty('puma-socks');
    const tshirtQty = cartStore.getItemQty('vanheusen-tee');

    const innerwearCombo = FEATURED_COMBOS.find(c => c.id === 'innerwear-basics-combo') || FEATURED_COMBOS[0];

    container.innerHTML = `
      <!-- Sticky Top Bar inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="nfyBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="h-6 flex items-center">
              <span class="text-lg font-black tracking-tighter text-black font-sans">blink<span class="text-primary font-black">it</span></span>
            </div>
            <h1 class="text-xs font-black text-on-surface truncate ml-1">New on Blinkit</h1>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[9px] font-black uppercase">Aisle Discovery</span>
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              <span class="material-symbols-outlined text-[15px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Scrollable Content -->
      <main class="flex-1 flex flex-col pb-8 relative select-none">
        
        <!-- Top Location & ETA Subheader -->
        <div class="px-margin-screen py-2 bg-white flex items-center justify-between shadow-2xs border-b border-gray-100">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[15px]">electric_bolt</span>
            </div>
            <div class="flex flex-col min-w-0">
              <div class="flex items-center gap-1">
                <span class="text-[10px] text-gray-900 uppercase font-black">Blinkit in 12 minutes</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p class="text-[9px] text-gray-500 truncate">Home · Gandhi bhavan, Koramangala Hub</p>
            </div>
          </div>
          <button class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 hover:text-on-surface transition-colors" onclick="router.navigate('category')">
            <span class="material-symbols-outlined text-[16px]">search</span>
          </button>
        </div>

        <!-- Hero Banner: Discovery Archetype -->
        <div class="px-margin-screen pt-2.5">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#4338ca] shadow-sm p-3.5 text-white">
            <div class="relative z-10 flex flex-col gap-1">
              <div class="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full w-fit">
                <span class="material-symbols-outlined text-[12px] text-yellow-300">auto_awesome</span>
                <span class="text-[9px] uppercase tracking-wider font-bold">New Launches on Blinkit</span>
              </div>
              <h2 class="text-base text-white leading-tight mt-0.5 font-black">Explore Fresh Categories</h2>
              <p class="text-[10.5px] text-purple-100 max-w-[270px] leading-snug">
                Undergarments, apparel basics, beauty glow &amp; health kits — delivered in 10 minutes.
              </p>

              <!-- Guarantee Pill -->
              <div class="mt-2 bg-white/15 backdrop-blur-md rounded-xl p-2 flex items-center justify-between border border-white/20">
                <div class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[18px] text-amber-300">verified_user</span>
                  <div class="flex flex-col">
                    <span class="text-[11px] font-bold">100% Fit &amp; Quality Guarantee</span>
                    <span class="text-[8.5px] text-purple-200">7-Day Free Doorstep Size Exchange on Clothing</span>
                  </div>
                </div>
                <span class="text-[9px] font-black bg-white text-purple-800 px-2 py-0.5 rounded-full">Risk-Free</span>
              </div>
            </div>
          </div>
        </div>

        <!-- NEW AISLES DISCOVERY TILES (Including Undergarments & Clothing) -->
        <div class="px-margin-screen pt-3">
          <div class="flex items-center justify-between mb-1.5">
            <div class="flex flex-col">
              <h3 class="text-xs text-gray-900 font-extrabold">New Aisles to Explore</h3>
              <p class="text-[9.5px] text-gray-500">Fast delivery on everyday essentials</p>
            </div>
            <span class="text-[10px] text-primary font-bold shrink-0">Just Added</span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <!-- Tile 1: Undergarments & Clothing (FEATURED NEW) -->
            <div class="group relative bg-gradient-to-br from-indigo-50/90 to-purple-50 rounded-2xl p-2.5 shadow-2xs flex flex-col justify-between overflow-hidden cursor-pointer hover:border-purple-400 border border-purple-200 active:scale-[0.98] transition-all" onclick="document.getElementById('clothingSection').scrollIntoView({behavior:'smooth'})">
              <div class="absolute top-2 right-2 z-10">
                <span class="px-1.5 py-0.2 rounded-full bg-purple-600 text-white text-[8px] font-black uppercase tracking-wide">
                  New Launch
                </span>
              </div>
              <div class="w-full h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden mb-1 p-1 border border-purple-100 shadow-2xs">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg" alt="Clothing" src="/assets/categories/clothing-innerwear.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
              </div>
              <div class="flex flex-col">
                <span class="text-[11px] text-gray-900 line-clamp-1 font-black">Undergarments &amp; Wear</span>
                <span class="text-[9px] text-purple-700 font-bold">Jockey, XYXX, Cotton Basics</span>
              </div>
            </div>

            <!-- Tile 2: Beauty & Grooming -->
            <div class="group relative bg-white rounded-2xl p-2.5 shadow-2xs flex flex-col justify-between overflow-hidden cursor-pointer hover:border-primary/40 border border-gray-100 active:scale-[0.98] transition-all" onclick="router.navigate('category')">
              <div class="absolute top-2 right-2 z-10">
                <span class="px-1.5 py-0.2 rounded-full bg-pink-100 text-pink-800 text-[8px] font-bold">
                  Trending
                </span>
              </div>
              <div class="w-full h-20 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Beauty Care" src="/assets/beauty-combo.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
              </div>
              <div class="flex flex-col">
                <span class="text-[11px] text-gray-900 line-clamp-1 font-bold">Beauty &amp; Glow</span>
                <span class="text-[9px] text-gray-400">Serums &amp; Facewash</span>
              </div>
            </div>

            <!-- Tile 3: Health & Pharmacy -->
            <div class="group relative bg-white rounded-2xl p-2.5 shadow-2xs flex flex-col justify-between overflow-hidden cursor-pointer hover:border-primary/40 border border-gray-100 active:scale-[0.98] transition-all" onclick="router.navigate('category')">
              <div class="absolute top-2 right-2 z-10">
                <span class="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[8px] font-bold">
                  Emergency
                </span>
              </div>
              <div class="w-full h-20 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Medicine" src="/assets/medicine-combo.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
              </div>
              <div class="flex flex-col">
                <span class="text-[11px] text-gray-900 line-clamp-1 font-bold">Pharmacy &amp; First Aid</span>
                <span class="text-[9px] text-gray-400">10-min urgent health</span>
              </div>
            </div>

            <!-- Tile 4: Electronics & Tech -->
            <div class="group relative bg-white rounded-2xl p-2.5 shadow-2xs flex flex-col justify-between overflow-hidden cursor-pointer hover:border-primary/40 border border-gray-100 active:scale-[0.98] transition-all" onclick="router.navigate('category')">
              <div class="absolute top-2 right-2 z-10">
                <span class="px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-800 text-[8px] font-bold">
                  Fast Dispatch
                </span>
              </div>
              <div class="w-full h-20 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Electronics" src="/assets/tech-combo.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
              </div>
              <div class="flex flex-col">
                <span class="text-[11px] text-gray-900 line-clamp-1 font-bold">Tech Accessories</span>
                <span class="text-[9px] text-gray-400">65W Cables &amp; Plugs</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================== -->
        <!-- NEW DEDICATED SECTION: UNDERGARMENTS & CLOTHING -->
        <!-- ============================================== -->
        <section id="clothingSection" class="pt-4 px-margin-screen">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center gap-1.5">
              <div class="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-700">
                <span class="material-symbols-outlined text-[16px]">checkroom</span>
              </div>
              <div>
                <h3 class="text-xs text-gray-900 font-black">Undergarments &amp; Clothing Basics</h3>
              </div>
            </div>
            <span class="text-[9px] font-black text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
              Doorstep Size Swap
            </span>
          </div>
          <p class="text-[9.5px] text-gray-500 mb-2 leading-tight">
            100% combed cotton, anti-microbial &amp; breathable innerwear. Delivery in 10-12 mins.
          </p>

          <!-- Horizontal Scroll of Clothing Products -->
          <div class="flex gap-2.5 overflow-x-auto py-1 no-scrollbar -mx-margin-screen px-margin-screen">
            
            <!-- Item 1: XYXX Modal Trunks -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100 hover:border-purple-300 transition-all">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    27% OFF
                  </span>
                  <img class="w-full h-full object-cover" alt="XYXX Trunks" src="/assets/clothing/trunks.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 font-black line-clamp-1 leading-snug">XYXX Modal Trunks</span>
                <span class="text-[9px] text-gray-500">Pack of 2 • Size M/L</span>
                <span class="text-[8px] text-emerald-700 font-semibold block mt-0.5">Anti-chafing fabric</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹399</span>
                  <span class="text-[9px] line-through text-gray-400">₹549</span>
                </div>
                ${trunksQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('xyxx-trunks')">−</button>
                    <span class="text-[10px] px-1">${trunksQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('xyxx-trunks')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('xyxx-trunks')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Item 2: Jockey Cotton Undershirt Vest -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100 hover:border-purple-300 transition-all">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    22% OFF
                  </span>
                  <img class="w-full h-full object-cover" alt="Jockey Vest" src="/assets/clothing/vest.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 font-black line-clamp-1 leading-snug">Jockey Cotton Vest</span>
                <span class="text-[9px] text-gray-500">100% Combed Cotton</span>
                <span class="text-[8px] text-emerald-700 font-semibold block mt-0.5">Stay-tuck ribbing</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹249</span>
                  <span class="text-[9px] line-through text-gray-400">₹320</span>
                </div>
                ${vestQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('jockey-vest')">−</button>
                    <span class="text-[10px] px-1">${vestQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('jockey-vest')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('jockey-vest')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Item 3: Amante Seamless Bralette -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100 hover:border-purple-300 transition-all">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    28% OFF
                  </span>
                  <img class="w-full h-full object-cover" alt="Amante Bralette" src="/assets/clothing/bralette.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 font-black line-clamp-1 leading-snug">Amante Seamless Bra</span>
                <span class="text-[9px] text-gray-500">Wireless • Nude tone</span>
                <span class="text-[8px] text-emerald-700 font-semibold block mt-0.5">Ultra-stretch fit</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹499</span>
                  <span class="text-[9px] line-through text-gray-400">₹699</span>
                </div>
                ${braletteQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('amante-bralette')">−</button>
                    <span class="text-[10px] px-1">${braletteQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('amante-bralette')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('amante-bralette')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Item 4: Puma Ankle Socks Pack -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100 hover:border-purple-300 transition-all">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    33% OFF
                  </span>
                  <img class="w-full h-full object-cover" alt="Puma Socks" src="/assets/clothing/socks.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 font-black line-clamp-1 leading-snug">Puma Ankle Socks</span>
                <span class="text-[9px] text-gray-500">Pack of 3 • Terry cushion</span>
                <span class="text-[8px] text-emerald-700 font-semibold block mt-0.5">Reinforced heel</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹199</span>
                  <span class="text-[9px] line-through text-gray-400">₹299</span>
                </div>
                ${socksQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('puma-socks')">−</button>
                    <span class="text-[10px] px-1">${socksQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('puma-socks')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('puma-socks')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Item 5: Van Heusen Supima T-shirt -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100 hover:border-purple-300 transition-all">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    30% OFF
                  </span>
                  <img class="w-full h-full object-cover" alt="Van Heusen Tee" src="/assets/clothing/tshirt.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 font-black line-clamp-1 leading-snug">Van Heusen Cotton Tee</span>
                <span class="text-[9px] text-gray-500">100% Supima • Black</span>
                <span class="text-[8px] text-emerald-700 font-semibold block mt-0.5">Ultra-soft finish</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹349</span>
                  <span class="text-[9px] line-through text-gray-400">₹499</span>
                </div>
                ${tshirtQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('vanheusen-tee')">−</button>
                    <span class="text-[10px] px-1">${tshirtQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('vanheusen-tee')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('vanheusen-tee')">
                    ADD
                  </button>
                `}
              </div>
            </div>

          </div>
        </section>

        <!-- ROUTINE COMBO: Innerwear & Fresh Basics Bundle -->
        <div class="px-margin-screen pt-3">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-black text-gray-900">Curated Innerwear Combo</span>
            <span class="text-[9.5px] text-primary font-bold">Bundle &amp; Save ₹208</span>
          </div>
          ${renderComboCardHtml(innerwearCombo, { context: 'new-for-you' })}
        </div>

        <!-- Top Beauty & Snack Picks for you Carousel -->
        <div class="pt-3">
          <div class="px-margin-screen flex items-center justify-between mb-1.5">
            <div>
              <h3 class="text-xs text-gray-900 font-extrabold">Top picks in Beauty &amp; Snacks</h3>
              <p class="text-[9.5px] text-gray-500">Most tried by exploratory shoppers</p>
            </div>
            <button class="text-xs text-primary font-bold hover:underline" onclick="router.navigate('category')">
              see all
            </button>
          </div>

          <div class="flex gap-2 overflow-x-auto px-margin-screen py-0.5 no-scrollbar">
            <!-- Plum Face Wash -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    30% OFF
                  </span>
                  <img class="w-full h-full object-cover rounded-lg" alt="Plum Face Wash" src="/assets/items/facewash.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 line-clamp-1 font-bold">Plum Green Tea Face Wash</span>
                <span class="text-[9px] text-gray-500">50 ml • Cleansing</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹189</span>
                  <span class="text-[9px] line-through text-gray-400">₹299</span>
                </div>
                ${plumQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('plum-facewash')">−</button>
                    <span class="text-[10px] px-1">${plumQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('plum-facewash')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('plum-facewash')">
                    ADD
                  </button>
                `}
              </div>
            </div>

            <!-- Roasted Almonds -->
            <div class="w-36 shrink-0 bg-white rounded-2xl p-2 shadow-2xs flex flex-col justify-between border border-gray-100">
              <div>
                <div class="relative w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden mb-1">
                  <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-white text-[7.5px] font-black">
                    20% OFF
                  </span>
                  <img class="w-full h-full object-cover rounded-lg" alt="Roasted Almonds" src="/assets/categories/dryfruits-cereals.jpg" onerror="this.onerror=null; this.src='/assets/fallback-product.svg';" />
                </div>
                <span class="text-[11px] text-gray-900 line-clamp-1 font-bold">Artisanal Roasted Almonds</span>
                <span class="text-[9px] text-gray-500">200 g • Salted</span>
              </div>
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-gray-50">
                <div class="flex flex-col">
                  <span class="text-xs font-black text-gray-900">₹149</span>
                  <span class="text-[9px] line-through text-gray-400">₹210</span>
                </div>
                ${almondsQty > 0 ? `
                  <div class="flex items-center justify-between font-bold bg-primary text-white rounded-lg px-1 h-6 w-[60px] shadow-2xs">
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.remove('roasted-almonds')">−</button>
                    <span class="text-[10px] px-1">${almondsQty}</span>
                    <button class="text-sm px-1 leading-none hover:opacity-80 active:scale-125" onclick="window.nfyActions.add('roasted-almonds')">+</button>
                  </div>
                ` : `
                  <button class="h-6 px-2.5 bg-white text-primary border border-primary/40 rounded-lg text-[10px] font-black shadow-2xs hover:bg-emerald-50 active:scale-95" onclick="window.nfyActions.add('roasted-almonds')">
                    ADD
                  </button>
                `}
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
                  <span class="text-[9.5px] text-white/80 font-medium">Saved ₹${totals.savings} · 12 mins</span>
                </div>
              </div>
              <button id="nfyViewCartBtn" class="flex items-center gap-1 bg-white text-primary px-3 py-1 rounded-xl font-black text-[11px] shadow-xs hover:bg-gray-50 active:scale-95 transition-all">
                <span>View Cart</span>
                <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ` : ''}

      </main>
    `;

    // Global action dispatchers for items
    window.nfyActions = {
      add: (itemId) => {
        if (itemId === 'xyxx-trunks') {
          cartStore.addItem({
            id: 'xyxx-trunks',
            name: 'XYXX Micro-Modal Anti-Bacterial Trunks (2 Pcs)',
            unit: 'Pack of 2 • M/L',
            price: 399,
            originalPrice: 549,
            category: 'Clothing',
            image: '/assets/clothing/trunks.jpg'
          });
        } else if (itemId === 'jockey-vest') {
          cartStore.addItem({
            id: 'jockey-vest',
            name: 'Jockey 100% Combed Cotton Ribbed Undershirt',
            unit: 'White • Premium Ribbed',
            price: 249,
            originalPrice: 320,
            category: 'Clothing',
            image: '/assets/clothing/vest.jpg'
          });
        } else if (itemId === 'amante-bralette') {
          cartStore.addItem({
            id: 'amante-bralette',
            name: 'Amante Seamless Comfort Non-Wired Bralette',
            unit: 'Wireless • Ultra-Stretch',
            price: 499,
            originalPrice: 699,
            category: 'Clothing',
            image: '/assets/clothing/bralette.jpg'
          });
        } else if (itemId === 'puma-socks') {
          cartStore.addItem({
            id: 'puma-socks',
            name: 'Puma All-Day Cushioned Ankle Socks (Pack of 3)',
            unit: '3 Pairs • Terry Cushion',
            price: 199,
            originalPrice: 299,
            category: 'Clothing',
            image: '/assets/clothing/socks.jpg'
          });
        } else if (itemId === 'vanheusen-tee') {
          cartStore.addItem({
            id: 'vanheusen-tee',
            name: 'Van Heusen 100% Supima Cotton Lounge T-shirt',
            unit: '100% Supima Cotton • Black',
            price: 349,
            originalPrice: 499,
            category: 'Clothing',
            image: '/assets/clothing/tshirt.jpg'
          });
        } else if (itemId === 'plum-facewash') {
          cartStore.addItem({
            id: 'plum-facewash',
            name: 'Plum Green Tea Pore Cleansing Face Wash',
            unit: '50 ml',
            price: 189,
            originalPrice: 299,
            category: 'Beauty',
            image: '/assets/items/facewash.jpg'
          });
        } else if (itemId === 'roasted-almonds') {
          cartStore.addItem({
            id: 'roasted-almonds',
            name: 'Artisanal Roasted Almonds',
            unit: '200 g',
            price: 149,
            originalPrice: 210,
            category: 'Snacks',
            image: '/assets/categories/dryfruits-cereals.jpg'
          });
        }
      },
      remove: (itemId) => cartStore.removeItem(itemId)
    };

    const backBtn = container.querySelector('#nfyBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.navigate('home'));

    const cartBtn = container.querySelector('#nfyViewCartBtn');
    if (cartBtn) cartBtn.addEventListener('click', () => router.navigate('cart'));

    // Bind combo card events
    bindComboCardEvents(container, () => render());
  }

  const unsubscribe = cartStore.subscribe(() => {
    if (router.currentRoute === 'new-for-you') {
      render();
    }
  });

  render();
  return () => unsubscribe();
}
