// Refined Dev Toolbar & iPhone 17 Controls
import { router } from '../router.js';
import { cartStore } from '../state/cartStore.js';

export function renderDevToolbar(container) {
  const screens = [
    { id: 'home', label: '1. Home Feed', corePage: 'Page 1' },
    { id: 'category', label: '2. Kitchen Category', corePage: 'Page 2' },
    { id: 'product', label: '3. Product & Combo', corePage: 'Page 2' },
    { id: 'cart', label: '4. My Cart', corePage: 'Page 3' },
    { id: 'guarantee', label: '5. Risk-Free Guarantee', corePage: 'Info' },
    { id: 'payment', label: '6. Payment Method', corePage: 'Page 3' },
    { id: 'tracking', label: '7. Live Tracking', corePage: 'Page 3' },
    { id: 'cart-variant', label: '7b. Cart Variant', corePage: 'Page 3' },
    { id: 'new-for-you', label: '8. New for You Page', corePage: 'Page 1' }
  ];

  let currentScale = 'fit'; // 'fit', '100%', '85%'
  let isMobileFrame = window.localStorage.getItem('blinkit_frame_mode') !== 'false';
  let isDeskDark = true;

  function applyScale() {
    const shell = document.getElementById('device-frame-shell');
    if (!shell || !isMobileFrame) {
      if (shell) shell.style.transform = '';
      return;
    }

    if (currentScale === 'fit') {
      const availHeight = window.innerHeight - 80;
      const targetHeight = 884;
      const scaleVal = Math.min(1, Math.max(0.7, availHeight / targetHeight));
      shell.style.transform = `scale(${scaleVal})`;
      shell.style.transformOrigin = 'center top';
    } else if (currentScale === '85%') {
      shell.style.transform = 'scale(0.85)';
      shell.style.transformOrigin = 'center top';
    } else {
      shell.style.transform = 'scale(1)';
      shell.style.transformOrigin = 'center top';
    }
  }

  window.addEventListener('resize', () => {
    if (currentScale === 'fit') applyScale();
  });

  function update() {
    const current = router.currentRoute;
    const totals = cartStore.getTotals();

    container.innerHTML = `
      <aside aria-label="iPhone 17 Preview Controls" class="w-full bg-[#0d121f] text-white border-b border-gray-800 px-3 py-2 text-xs select-none shadow-md z-[100] relative">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <!-- Left: Brand & iPhone 17 Indicator -->
          <div class="flex items-center gap-2">
            <span class="font-bold flex items-center gap-1.5 text-emerald-400 text-sm">
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              Blinkit
            </span>
            <span class="bg-slate-800 text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-slate-700 hidden sm:inline-flex items-center gap-1">
              <span class="material-symbols-outlined text-[12px] text-emerald-400">phone_iphone</span>
              iPhone 17 Pro
            </span>
          </div>

          <!-- Middle: Screen Selector & Core 3-Page Flow -->
          <div class="flex items-center gap-1.5 flex-wrap">
            <label for="devScreenSelect" class="text-gray-400 text-[11px] hidden md:inline">Screen:</label>
            <select id="devScreenSelect" class="bg-gray-800 text-white rounded px-2.5 py-1 text-xs border border-gray-700 hover:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors">
              ${screens.map(s => `
                <option value="${s.id}" ${current === s.id ? 'selected' : ''}>
                  ${s.label} (${s.corePage})
                </option>
              `).join('')}
            </select>

            <!-- 3 Core Navigation Quick Buttons -->
            <div class="hidden lg:flex items-center bg-gray-800/90 p-0.5 rounded-lg border border-gray-700">
              <button data-goto="home" class="px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${['home', 'new-for-you'].includes(current) ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'}">
                1. Discovery
              </button>
              <button data-goto="product" class="px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${['product', 'category'].includes(current) ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'}">
                2. Product / Combo
              </button>
              <button data-goto="cart" class="px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${['cart', 'payment', 'tracking', 'cart-variant'].includes(current) ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'}">
                3. Cart & Order
              </button>
            </div>
          </div>

          <!-- Right: Zoom Scale, Device Toggle & Cart Stats -->
          <div class="flex items-center gap-2">
            <!-- Scale selector -->
            <div class="hidden sm:flex items-center bg-gray-800 rounded px-1 py-0.5 border border-gray-700">
              <button id="scaleFitBtn" class="px-1.5 py-0.5 rounded text-[10px] ${currentScale === 'fit' ? 'bg-gray-700 text-white font-bold' : 'text-gray-400 hover:text-white'}">Fit</button>
              <button id="scale85Btn" class="px-1.5 py-0.5 rounded text-[10px] ${currentScale === '85%' ? 'bg-gray-700 text-white font-bold' : 'text-gray-400 hover:text-white'}">85%</button>
              <button id="scale100Btn" class="px-1.5 py-0.5 rounded text-[10px] ${currentScale === '100%' ? 'bg-gray-700 text-white font-bold' : 'text-gray-400 hover:text-white'}">100%</button>
            </div>

            <!-- Frame Toggle -->
            <button id="toggleFrameBtn" class="flex items-center gap-1 px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 text-[11px] transition-colors">
              <span class="material-symbols-outlined text-[14px]">${isMobileFrame ? 'devices' : 'smartphone'}</span>
              <span class="hidden sm:inline">${isMobileFrame ? 'Responsive' : 'iPhone 17'}</span>
            </button>

            <!-- Cart button -->
            <button data-goto="cart" class="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-[11px] transition-all shadow-xs">
              <span class="material-symbols-outlined text-[14px]">shopping_bag</span>
              <span>${totals.count} items</span>
              <span class="opacity-90 font-medium">· ₹${totals.grandTotal}</span>
            </button>
          </div>
        </div>
      </aside>
    `;

    // Event listeners
    const select = container.querySelector('#devScreenSelect');
    if (select) {
      select.addEventListener('change', (e) => router.navigate(e.target.value));
    }

    container.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', () => router.navigate(btn.getAttribute('data-goto')));
    });

    const toggleBtn = container.querySelector('#toggleFrameBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        isMobileFrame = !isMobileFrame;
        window.localStorage.setItem('blinkit_frame_mode', isMobileFrame ? 'true' : 'false');
        applyFrameMode();
        update();
      });
    }

    const fitBtn = container.querySelector('#scaleFitBtn');
    if (fitBtn) {
      fitBtn.addEventListener('click', () => {
        currentScale = 'fit';
        applyScale();
        update();
      });
    }

    const s85Btn = container.querySelector('#scale85Btn');
    if (s85Btn) {
      s85Btn.addEventListener('click', () => {
        currentScale = '85%';
        applyScale();
        update();
      });
    }

    const s100Btn = container.querySelector('#scale100Btn');
    if (s100Btn) {
      s100Btn.addEventListener('click', () => {
        currentScale = '100%';
        applyScale();
        update();
      });
    }
  }

  function applyFrameMode() {
    const stage = document.getElementById('iphone-stage');
    const shell = document.getElementById('device-frame-shell');
    if (!stage || !shell) return;

    if (isMobileFrame) {
      stage.className = 'iphone-stage flex-1 flex items-center justify-center py-4 px-4 overflow-hidden';
      shell.className = 'iphone-17-case';
      document.body.classList.add('bg-slate-950');
      applyScale();
    } else {
      stage.className = 'w-full flex-1 flex flex-col items-center justify-start py-0 px-0';
      shell.className = 'w-full max-w-lg min-h-screen mx-auto bg-[#f8f9ff] flex flex-col shadow-sm rounded-none border-0 p-0';
      shell.style.transform = '';
      document.body.classList.remove('bg-slate-950');
    }
  }

  router.subscribe(() => update());
  cartStore.subscribe(() => update());

  applyFrameMode();
  update();
}
