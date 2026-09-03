// Screen 7: Live Delivery Tracking Screen (With "Next time, try this combo" & Itemized Breakdown)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';
import { FEATURED_COMBOS } from '../data/combos.js';
import { renderComboCardHtml, bindComboCardEvents } from '../components/ComboCard.js';

export function renderTrackingScreen(container) {
  let isTrackingGps = false;
  let gpsResult = null;
  const pastaCombo = FEATURED_COMBOS.find(c => c.id === 'pasta-night-combo') || FEATURED_COMBOS[0];

  function render() {
    const totals = cartStore.getTotals();

    container.innerHTML = `
      <!-- Sticky Top Bar inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="trackBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="h-6 flex items-center">
              <span class="text-lg font-black tracking-tighter text-black font-sans">blink<span class="text-primary font-black">it</span></span>
            </div>
            <h1 class="text-xs font-black text-on-surface truncate ml-1">Live Order Tracking</h1>
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

      <!-- Main Tracking Content -->
      <main class="flex-1 flex flex-col p-margin-screen gap-3 pb-6 relative">
        <!-- Dynamic ETA / Address Banner -->
        <section class="bg-white px-3 py-2 rounded-2xl shadow-2xs border border-gray-100 flex items-center justify-between">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[17px]">electric_bolt</span>
            </div>
            <div class="flex flex-col min-w-0">
              <div class="flex items-center gap-1">
                <span class="text-xs text-gray-900 font-black">Delivery in 11 minutes</span>
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <span class="text-[9.5px] text-gray-500 truncate">Home - B1 H2, Hermes Heritage Society</span>
            </div>
          </div>
          <button class="px-2 py-0.5 rounded-full bg-slate-100 text-gray-700 text-[9px] font-bold shrink-0 flex items-center gap-0.5 hover:bg-slate-200" onclick="alert('Address: Hermes Heritage Society')">
            <span>Change</span>
            <span class="material-symbols-outlined text-[11px]">expand_more</span>
          </button>
        </section>

        <!-- Hero Success Card -->
        <section class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100/40 p-3 shadow-2xs border border-emerald-200">
          <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-primary mb-1.5 w-fit">
            <span class="material-symbols-outlined text-[13px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
            <span class="text-[9px] uppercase tracking-wider font-black">Order Confirmed</span>
          </div>
          <h2 class="text-sm text-gray-900 font-black leading-tight">Order Placed Successfully! ⚡</h2>
          <p class="text-[10px] text-gray-500 mt-0.5">Your items are being packed at Koramangala Dark Store</p>

          <!-- ETA Badge Box -->
          <div class="bg-white rounded-xl p-2.5 shadow-2xs my-2.5 flex items-center justify-between border border-emerald-100">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[20px]">schedule</span>
              </div>
              <div class="flex flex-col">
                <span class="text-[9px] text-gray-400 font-bold uppercase">Estimated Arrival</span>
                <span class="text-xs text-primary font-black">In 11 mins <span class="text-[9.5px] text-gray-500 font-normal">(Instant Dispatch)</span></span>
              </div>
            </div>
            <div class="h-2 w-16 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-primary w-3/4 rounded-full animate-pulse"></div>
            </div>
          </div>

          <!-- Item Preview Row -->
          <div class="bg-slate-50/80 rounded-xl p-2 flex items-center gap-2 border border-gray-100">
            <div class="flex -space-x-2 shrink-0">
              <div class="w-8 h-8 rounded-full overflow-hidden bg-white shadow-2xs border border-white">
                <img class="w-full h-full object-cover" alt="Potato" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q" />
              </div>
              <div class="w-8 h-8 rounded-full overflow-hidden bg-white shadow-2xs border border-white">
                <img class="w-full h-full object-cover" alt="Onion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTBnPf2PSEPiwb7AfZpIHyAgTdRAk7i1LkDEiTpazErP-2fXZzzsvrpq9p6fWuzyyFcchUyICMRo7fv3-stOpQA3xtnNB7VRuLqHbDF5OOGJJgcfXmWuG06xBmGl2QDI20NEGvmnm6f7CuVz6G3Uo7lB4YLuB_wXnyPjkjsZjIOLC3SU0kGbbogrPfIKzc8dnVvlJ0eF3rlySgvzS8giWC60hVJElE6fkIaVOWtymEJirfojFYagh0" />
              </div>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-[10px] text-gray-900 font-bold truncate">Items in transit</p>
              <p class="text-[9px] text-gray-500">${totals.count} items • ₹${totals.grandTotal} paid securely</p>
            </div>
            <button class="text-[10px] text-primary font-bold hover:underline shrink-0" onclick="alert('Digital Invoice #BK-98241')">
              Receipt
            </button>
          </div>
        </section>

        <!-- Live Rider Telemetry Micro-Card -->
        <section class="bg-white rounded-2xl p-2.5 shadow-2xs flex items-center justify-between border border-gray-100">
          <div class="flex items-center gap-2">
            <div class="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-emerald-200">
              <img class="w-full h-full object-cover" alt="Ramesh K." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk3tcQoG3f5f5LXNhcSltH-jhSNp4IrPgRqiI4x_k05D1yIaxmLWYhJvsvFj-zz7GyDAaa38yHX8l5nLiVzklRmuELN9cdtUNlYg6yD-at74N434XkHQw5HDeYoN9ZriSGM--vq5xPbABVf9AxEgnH4YHVe9CvcENLwZAoQj594stQaHV67FzUs39AdN1iqciKu3MUgyb_qCirIN42u3mMcW8u5KE8vmlXbzkPU6abRL3csrMtpgUO" />
              <div class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></div>
            </div>
            <div class="flex flex-col min-w-0">
              <div class="flex items-center gap-1">
                <span class="text-xs text-gray-900 font-black">Ramesh K.</span>
                <span class="px-1 py-0.2 rounded bg-slate-100 text-gray-600 text-[8.5px] font-bold">★ 4.9</span>
              </div>
              <span class="text-[9.5px] text-gray-500">Delivery Partner • Verified Vaccinated</span>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <button class="w-8 h-8 rounded-full bg-slate-100 text-gray-700 hover:bg-slate-200 flex items-center justify-center transition-colors" onclick="alert('Calling delivery partner Ramesh K....')">
              <span class="material-symbols-outlined text-[16px]">call</span>
            </button>
            <button id="quickTrackBtn" class="w-8 h-8 rounded-full bg-primary text-white hover:bg-primary-container flex items-center justify-center transition-colors shadow-2xs">
              <span class="material-symbols-outlined text-[16px]">near_me</span>
            </button>
          </div>
        </section>

        <!-- FEATURED IN ORDER TRACKING: "Next time, try this combo" with Full Items Breakdown & Math -->
        <section class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between px-0.5">
            <span class="text-[10px] font-black uppercase tracking-wider text-gray-600">
              Recommended Routine for your Next Delivery
            </span>
            <span class="text-[9.5px] text-primary font-bold">Save ₹76 (29% OFF)</span>
          </div>

          ${renderComboCardHtml(pastaCombo, { context: 'order' })}
        </section>

        <!-- Live GPS Map Tracking Action -->
        <section class="flex flex-col gap-2">
          <button id="liveMapTrackBtn" class="w-full h-11 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-[0.99] ${gpsResult ? 'bg-emerald-700 text-white' : 'bg-primary text-white hover:bg-primary-container'}">
            <span class="material-symbols-outlined text-[18px] ${isTrackingGps ? 'animate-spin' : ''}">
              ${isTrackingGps ? 'refresh' : (gpsResult ? 'check' : 'map')}
            </span>
            <span>${gpsResult ? gpsResult : (isTrackingGps ? 'Locating Rider GPS...' : 'Live Map Tracking')}</span>
          </button>

          <div class="flex items-center justify-between px-1">
            <button class="text-gray-500 hover:text-gray-900 text-[10px] font-semibold flex items-center gap-0.5" onclick="alert('Support: 24x7 Customer Helpdesk is live.')">
              <span class="material-symbols-outlined text-[13px]">help</span>
              <span>Need help?</span>
            </button>
            <button class="text-error text-[10px] font-semibold hover:underline" onclick="alert('Orders are packed instantly. Please contact partner Ramesh directly.')">
              Cancel order
            </button>
          </div>
        </section>
      </main>
    `;

    const backBtn = container.querySelector('#trackBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.navigate('home'));

    const quickTrack = container.querySelector('#quickTrackBtn');
    if (quickTrack) {
      quickTrack.addEventListener('click', () => triggerGpsTrack());
    }

    const mapBtn = container.querySelector('#liveMapTrackBtn');
    if (mapBtn) {
      mapBtn.addEventListener('click', () => triggerGpsTrack());
    }

    function triggerGpsTrack() {
      isTrackingGps = true;
      gpsResult = null;
      render();

      setTimeout(() => {
        isTrackingGps = false;
        gpsResult = 'Rider is 1.2 km away (Near 80ft Road)';
        render();
      }, 900);
    }

    // Bind combo card events
    bindComboCardEvents(container, () => render());
  }

  render();
}
