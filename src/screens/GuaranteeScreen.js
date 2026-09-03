// Screen 5: Risk-Free Guarantee Screen (Refined for iPhone 17)
import { router } from '../router.js';

export function renderGuaranteeScreen(container) {
  function render() {
    container.innerHTML = `
      <!-- Sticky Top Bar inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="guaranteeBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="h-6 flex items-center">
              <span class="text-lg font-black tracking-tighter text-black font-sans">blink<span class="text-primary font-black">it</span></span>
            </div>
            <h1 class="text-xs font-black text-on-surface truncate ml-1">Risk-Free Guarantee</h1>
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

      <!-- Main Content -->
      <main class="flex-1 flex flex-col p-margin-screen gap-3 relative pb-24">
        <!-- Green Banner Pill -->
        <div class="inline-flex items-center gap-1 self-start px-2.5 py-1 rounded-full bg-emerald-100/70 text-primary text-[10px] font-extrabold border border-emerald-300">
          <span class="material-symbols-outlined text-[14px]">verified_user</span>
          <span>100% Risk-Free Category Discovery</span>
        </div>

        <!-- Hero Header Card -->
        <div class="bg-white rounded-2xl p-3 shadow-2xs flex flex-col gap-2.5 border border-gray-100">
          <div class="flex items-start gap-2.5">
            <div class="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[24px]">shield_with_heart</span>
            </div>
            <div class="flex flex-col flex-1">
              <h2 class="text-xs font-black text-gray-900 leading-snug">
                Try Risk-Free — New Category Guarantee
              </h2>
              <p class="text-[10px] text-gray-500 mt-1 leading-relaxed">
                Explore untried categories with total peace of mind. 7-day doorstep returns on non-perishable categories, and instant 24-hour freshness refund or replacement on fresh groceries — no physical return needed.
              </p>
            </div>
          </div>

          <!-- Key Benefit Pill Stats -->
          <div class="grid grid-cols-3 gap-1.5 pt-2 border-t border-gray-100">
            <div class="flex flex-col items-center text-center p-1.5 rounded-xl bg-slate-50 border border-gray-100">
              <span class="material-symbols-outlined text-[18px] text-primary">event_repeat</span>
              <span class="text-[10px] text-gray-900 font-bold mt-0.5">7-Day / 24-Hr</span>
              <span class="text-[8.5px] text-gray-500">Flexible Returns</span>
            </div>
            <div class="flex flex-col items-center text-center p-1.5 rounded-xl bg-slate-50 border border-gray-100">
              <span class="material-symbols-outlined text-[18px] text-primary">local_shipping</span>
              <span class="text-[10px] text-gray-900 font-bold mt-0.5">Doorstep</span>
              <span class="text-[8.5px] text-gray-500">Free Pickup</span>
            </div>
            <div class="flex flex-col items-center text-center p-1.5 rounded-xl bg-slate-50 border border-gray-100">
              <span class="material-symbols-outlined text-[18px] text-primary">account_balance_wallet</span>
              <span class="text-[10px] text-gray-900 font-bold mt-0.5">Instant</span>
              <span class="text-[8.5px] text-gray-500">UPI / Wallet</span>
            </div>
          </div>
        </div>

        <!-- Terms & Conditions Section -->
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between px-0.5 py-0.5">
            <h3 class="text-[10px] text-gray-500 uppercase tracking-wider font-extrabold">
              Terms &amp; Conditions
            </h3>
            <span class="text-[9px] text-primary font-bold">UPDATED APR 2025</span>
          </div>

          <!-- Accordion Card 1 -->
          <details class="group bg-white rounded-xl shadow-2xs overflow-hidden border border-gray-100 transition-all" open>
            <summary class="p-2.5 flex items-center justify-between cursor-pointer list-none select-none">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-primary flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                <span class="text-[11px] text-gray-900 font-bold">Non-Perishable Categories</span>
              </div>
              <span class="material-symbols-outlined text-[16px] text-gray-400 group-open:rotate-180 transition-transform duration-200">expand_more</span>
            </summary>
            <div class="px-2.5 pb-2.5 pt-0.5 text-[10.5px] text-gray-500 border-t border-gray-50 flex flex-col gap-1.5">
              <p class="leading-relaxed">
                7–10 day doorstep return window. If you don't like it or it doesn't meet expectations, return unused items in original packaging. Our partner picks it up from your doorstep at zero extra cost.
              </p>
              <div class="flex flex-wrap gap-1 mt-0.5">
                <span class="px-2 py-0.5 rounded-full bg-slate-100 text-gray-700 text-[9px] font-semibold">💄 Beauty &amp; Care</span>
                <span class="px-2 py-0.5 rounded-full bg-slate-100 text-gray-700 text-[9px] font-semibold">🍳 Kitchen Tools</span>
                <span class="px-2 py-0.5 rounded-full bg-slate-100 text-gray-700 text-[9px] font-semibold">🍫 Gourmet Foods</span>
              </div>
            </div>
          </details>

          <!-- Accordion Card 2 -->
          <details class="group bg-white rounded-xl shadow-2xs overflow-hidden border border-gray-100 transition-all" open>
            <summary class="p-2.5 flex items-center justify-between cursor-pointer list-none select-none">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-primary flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                <span class="text-[11px] text-gray-900 font-bold">Fresh &amp; Grocery Categories</span>
              </div>
              <span class="material-symbols-outlined text-[16px] text-gray-400 group-open:rotate-180 transition-transform duration-200">expand_more</span>
            </summary>
            <div class="px-2.5 pb-2.5 pt-0.5 text-[10.5px] text-gray-500 border-t border-gray-50 flex flex-col gap-1.5">
              <p class="leading-relaxed">
                Freshness &amp; Quality Guarantee — 24-hour refund or replacement window. No physical return required! Simply report any freshness, quality, or damage issue within 24 hours of delivery.
              </p>
              <div class="flex flex-wrap gap-1 mt-0.5">
                <span class="px-2 py-0.5 rounded-full bg-slate-100 text-gray-700 text-[9px] font-semibold">🥦 Fresh Veggies</span>
                <span class="px-2 py-0.5 rounded-full bg-slate-100 text-gray-700 text-[9px] font-semibold">🥛 Milk &amp; Bread</span>
              </div>
            </div>
          </details>

          <!-- Accordion Card 3 -->
          <details class="group bg-white rounded-xl shadow-2xs overflow-hidden border border-gray-100 transition-all">
            <summary class="p-2.5 flex items-center justify-between cursor-pointer list-none select-none">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-primary flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                <span class="text-[11px] text-gray-900 font-bold">Item Condition &amp; Refund Rules</span>
              </div>
              <span class="material-symbols-outlined text-[16px] text-gray-400 group-open:rotate-180 transition-transform duration-200">expand_more</span>
            </summary>
            <div class="px-2.5 pb-2.5 pt-0.5 text-[10.5px] text-gray-500 border-t border-gray-50">
              <p class="leading-relaxed">
                Non-perishables: Items must be unused in original packaging. Fresh items: Fast photo verification directly via chat with zero pickup needed.
              </p>
            </div>
          </details>

          <!-- Accordion Card 4 -->
          <details class="group bg-white rounded-xl shadow-2xs overflow-hidden border border-gray-100 transition-all">
            <summary class="p-2.5 flex items-center justify-between cursor-pointer list-none select-none">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-100 text-primary flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
                <span class="text-[11px] text-gray-900 font-bold">Frequency &amp; Validity</span>
              </div>
              <span class="material-symbols-outlined text-[16px] text-gray-400 group-open:rotate-180 transition-transform duration-200">expand_more</span>
            </summary>
            <div class="px-2.5 pb-2.5 pt-0.5 text-[10.5px] text-gray-500 border-t border-gray-50">
              <p class="leading-relaxed">
                Applies only to your first purchase in that category this month. Renews every calendar month so you can continuously discover new products stress-free!
              </p>
            </div>
          </details>
        </div>

        <!-- Trust Guarantee Stamp Box -->
        <div class="bg-emerald-50/80 rounded-2xl p-2.5 border border-emerald-200 flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
            <span class="material-symbols-outlined text-[20px]">verified</span>
          </div>
          <div class="flex flex-col flex-1 min-w-0">
            <span class="text-[11px] text-gray-900 font-black">Blinkit Trust Promise</span>
            <p class="text-[9.5px] text-gray-600 leading-tight mt-0.5">
              100% genuine products sourced directly from authorized brand partners with fresh delivery guarantee.
            </p>
          </div>
        </div>
      </main>

      <!-- Sticky Bottom Action Bar (Inside iPhone Viewport) -->
      <div class="sticky bottom-0 z-30 w-full p-3 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-3px_12px_rgba(0,0,0,0.06)] border-t border-gray-200/80 flex flex-col gap-1">
        <button id="shopBeautyBtn" class="w-full h-11 rounded-xl bg-primary active:bg-primary-container text-white text-xs font-black flex items-center justify-center gap-1.5 tracking-wide transition-all shadow-md active:scale-[0.99]">
          <span>Shop Beauty Now</span>
          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
        <p class="text-center text-[10px] text-primary font-bold">
          ✨ 15% coupon will be auto-applied at checkout
        </p>
      </div>
    `;

    const backBtn = container.querySelector('#guaranteeBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.back());

    const shopBtn = container.querySelector('#shopBeautyBtn');
    if (shopBtn) shopBtn.addEventListener('click', () => router.navigate('new-for-you'));
  }

  render();
}
