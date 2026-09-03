// Screen 6: Payment Method Screen (Refined for iPhone 17)
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';

export function renderPaymentScreen(container) {
  let isWalletOpen = false;
  let isProcessing = false;

  function render() {
    const totals = cartStore.getTotals();

    container.innerHTML = `
      <!-- Sticky Top Bar inside iPhone Viewport -->
      <header class="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-xs border-b border-gray-100 px-margin-screen py-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button id="paymentBackBtn" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div class="h-6 flex items-center">
              <span class="text-lg font-black tracking-tighter text-black font-sans">blink<span class="text-primary font-black">it</span></span>
            </div>
            <h1 class="text-xs font-black text-on-surface truncate ml-1">Checkout Flow</h1>
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

      <!-- Main Payment Content -->
      <main class="flex-1 flex flex-col p-margin-screen gap-3 relative pb-28">
        <!-- Top Bill & Delivery Bar -->
        <div class="bg-white rounded-2xl p-3 shadow-2xs flex items-center justify-between border border-gray-100">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[9.5px] text-gray-400 uppercase tracking-wider font-bold">Total Payable</span>
              <span class="text-base text-gray-900 font-black">₹${totals.grandTotal}</span>
            </div>
          </div>
          <div class="flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <span class="material-symbols-outlined text-primary text-[14px]">bolt</span>
            <span class="text-[10px] text-primary font-black">12 MINS</span>
          </div>
        </div>

        <!-- Title -->
        <div>
          <h2 class="text-xs font-black text-gray-900">Select Payment Method</h2>
          <p class="text-[10px] text-gray-500">Choose how you'd like to pay for this instant delivery</p>
        </div>

        <!-- Wallets Accordion Row -->
        <div class="bg-white rounded-2xl shadow-2xs overflow-hidden border border-gray-100 transition-all">
          <button id="toggleWalletBtn" class="w-full p-3 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors" type="button">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              </div>
              <div>
                <h3 class="text-xs text-gray-900 font-bold">Wallets</h3>
                <p class="text-[9.5px] text-gray-400">Paytm, PhonePe, Amazon Pay</p>
              </div>
            </div>
            <span class="material-symbols-outlined text-gray-400 text-[18px] transition-transform duration-200 ${isWalletOpen ? 'rotate-180' : ''}">
              expand_more
            </span>
          </button>

          ${isWalletOpen ? `
            <div class="px-3 pb-3 pt-0.5 space-y-1.5 border-t border-gray-100">
              <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer" onclick="alert('Linking Paytm...')">
                <div class="flex items-center gap-2.5">
                  <div class="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-2xs border border-gray-100">
                    <span class="text-[9px] text-secondary font-black">Paytm</span>
                  </div>
                  <span class="text-xs text-gray-800 font-semibold">Paytm Wallet</span>
                </div>
                <span class="text-xs text-primary font-black">Link</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer" onclick="alert('Linking PhonePe...')">
                <div class="flex items-center gap-2.5">
                  <div class="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-2xs border border-gray-100">
                    <span class="material-symbols-outlined text-primary text-[15px]">payments</span>
                  </div>
                  <span class="text-xs text-gray-800 font-semibold">PhonePe Wallet</span>
                </div>
                <span class="text-xs text-primary font-black">Link</span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Credit & Debit Cards Card -->
        <div class="bg-white rounded-2xl shadow-2xs overflow-hidden border border-gray-100">
          <div class="p-3 flex items-center justify-between bg-white border-b border-gray-50">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[18px]">credit_card</span>
              </div>
              <div>
                <h3 class="text-xs text-gray-900 font-bold">Credit / Debit cards</h3>
                <p class="text-[9.5px] text-gray-400">Save cards securely via RBI guidelines</p>
              </div>
            </div>
            <span class="material-symbols-outlined text-primary text-[18px]">expand_less</span>
          </div>

          <!-- Badges -->
          <div class="px-3 py-1 flex items-center gap-1.5 overflow-x-auto bg-slate-50">
            <span class="text-[8.5px] px-1.5 py-0.5 rounded bg-white text-gray-800 font-black border border-gray-200">VISA</span>
            <span class="text-[8.5px] px-1.5 py-0.5 rounded bg-white text-secondary font-black border border-gray-200">Mastercard</span>
            <span class="text-[8.5px] px-1.5 py-0.5 rounded bg-white text-primary font-black border border-gray-200">RuPay</span>
            <span class="text-[8.5px] px-1.5 py-0.5 rounded bg-white text-emerald-800 font-black border border-gray-200">AMEX</span>
          </div>

          <!-- Card Form -->
          <form class="p-3 space-y-2.5" onsubmit="event.preventDefault();">
            <div class="flex flex-col gap-1">
              <label class="text-[10px] text-gray-500 font-bold">Name on Card</label>
              <input type="text" placeholder="e.g. Rahul Sharma" value="Rahul Sharma" class="w-full h-9 px-2.5 rounded-xl bg-slate-50 text-gray-900 text-xs focus:bg-white focus:ring-1 focus:ring-primary focus:outline-none transition-all border border-gray-200" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-[10px] text-gray-500 font-bold">Card Number</label>
              <div class="relative flex items-center">
                <input type="text" maxlength="19" placeholder="4532 8901 2345 6789" value="4532 •••• •••• 6789" class="w-full h-9 pl-2.5 pr-8 rounded-xl bg-slate-50 text-gray-900 text-xs focus:bg-white focus:ring-1 focus:ring-primary focus:outline-none transition-all border border-gray-200 font-mono" />
                <span class="material-symbols-outlined absolute right-2.5 text-gray-400 text-[18px]">credit_card</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col gap-1">
                <label class="text-[10px] text-gray-500 font-bold">Expiry Date</label>
                <input type="text" maxlength="5" placeholder="MM / YY" value="08/28" class="w-full h-9 px-2.5 rounded-xl bg-slate-50 text-gray-900 text-xs focus:bg-white focus:ring-1 focus:ring-primary focus:outline-none transition-all border border-gray-200 font-mono" />
              </div>
              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between">
                  <label class="text-[10px] text-gray-500 font-bold">CVV</label>
                  <span class="text-[9px] text-primary cursor-pointer font-bold">Info</span>
                </div>
                <div class="relative flex items-center">
                  <input type="password" maxlength="4" placeholder="•••" value="888" class="w-full h-9 px-2.5 rounded-xl bg-slate-50 text-gray-900 text-xs focus:bg-white focus:ring-1 focus:ring-primary focus:outline-none transition-all border border-gray-200" />
                  <span class="material-symbols-outlined absolute right-2.5 text-gray-400 text-[16px]">lock</span>
                </div>
              </div>
            </div>
            <div class="flex items-start gap-1.5 pt-0.5">
              <input type="checkbox" id="saveCardCheck" checked class="mt-0.5 accent-primary h-3.5 w-3.5 rounded" />
              <label for="saveCardCheck" class="text-[9.5px] text-gray-500 leading-tight select-none">
                Securely save card as per RBI guidelines.
              </label>
            </div>
          </form>
        </div>

        <!-- Other Options -->
        <div class="bg-white rounded-2xl shadow-2xs overflow-hidden border border-gray-100 divide-y divide-gray-100">
          <!-- UPI -->
          <div class="p-2.5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer" onclick="alert('UPI: Google Pay, PhonePe, BHIM')">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[16px]">qr_code_scanner</span>
              </div>
              <span class="text-xs text-gray-800 font-bold">UPI (Google Pay, PhonePe)</span>
            </div>
            <span class="material-symbols-outlined text-gray-400 text-[16px]">chevron_right</span>
          </div>

          <!-- Cash On Delivery -->
          <div class="p-2.5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer" onclick="alert('Cash on Delivery selected')">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[16px]">local_atm</span>
              </div>
              <span class="text-xs text-gray-800 font-bold">Cash on Delivery</span>
            </div>
            <span class="material-symbols-outlined text-gray-400 text-[16px]">chevron_right</span>
          </div>
        </div>
      </main>

      <!-- Sticky Bottom Checkout Action (Inside iPhone Viewport) -->
      <div class="sticky bottom-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md p-3 shadow-[0_-3px_12px_rgba(0,0,0,0.06)] border-t border-gray-200/80">
        <button id="simulateCheckoutBtn" class="w-full h-11 bg-primary rounded-xl text-white font-black text-xs flex items-center justify-between px-3 shadow-md hover:bg-primary-container active:scale-[0.98] transition-all ${isProcessing ? 'opacity-90 pointer-events-none' : ''}">
          ${isProcessing ? `
            <div class="flex items-center justify-center gap-2 w-full">
              <span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
              <span>Processing Payment...</span>
            </div>
          ` : `
            <span class="text-xs">Pay &amp; Place Order</span>
            <div class="flex items-center gap-1">
              <span class="text-sm font-black">₹${totals.grandTotal}</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </div>
          `}
        </button>
      </div>
    `;

    const backBtn = container.querySelector('#paymentBackBtn');
    if (backBtn) backBtn.addEventListener('click', () => router.navigate('cart'));

    const walletToggle = container.querySelector('#toggleWalletBtn');
    if (walletToggle) {
      walletToggle.addEventListener('click', () => {
        isWalletOpen = !isWalletOpen;
        render();
      });
    }

    const payBtn = container.querySelector('#simulateCheckoutBtn');
    if (payBtn) {
      payBtn.addEventListener('click', () => {
        isProcessing = true;
        render();

        setTimeout(() => {
          router.navigate('tracking');
        }, 1100);
      });
    }
  }

  const unsubscribe = cartStore.subscribe(() => {
    if (router.currentRoute === 'payment') {
      render();
    }
  });

  render();
  return () => unsubscribe();
}
