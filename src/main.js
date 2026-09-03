// Main Application Initializer for iPhone 17 Blinkit App
import { router } from './router.js';
import { renderDevToolbar } from './components/DevToolbar.js';
import { renderBottomNav } from './components/BottomNav.js';

import { renderHomeScreen } from './screens/HomeScreen.js';
import { renderCategoryScreen } from './screens/CategoryScreen.js';
import { renderProductDetailScreen } from './screens/ProductDetailScreen.js';
import { renderCartScreen } from './screens/CartScreen.js';
import { renderGuaranteeScreen } from './screens/GuaranteeScreen.js';
import { renderPaymentScreen } from './screens/PaymentScreen.js';
import { renderTrackingScreen } from './screens/TrackingScreen.js';
import { renderCartVariantScreen } from './screens/CartVariantScreen.js';
import { renderNewForYouScreen } from './screens/NewForYouScreen.js';

const devContainer = document.getElementById('dev-toolbar-container');
const screenContainer = document.getElementById('screen-container');
const bottomNavContainer = document.getElementById('bottom-nav-container');
const scrollViewport = document.getElementById('screen-scroll-viewport');
const dynamicIsland = document.getElementById('dynamicIsland');

// Render dev preview bar (hidden if clean=true)
const isClean = window.location.search.includes('clean=true') || window.location.hash.includes('clean=true');
if (devContainer) {
  if (isClean) {
    devContainer.style.display = 'none';
  } else {
    renderDevToolbar(devContainer);
  }
}

// Render bottom navigation
if (bottomNavContainer) {
  renderBottomNav(bottomNavContainer);
}

// Dynamic Island micro-interaction
if (dynamicIsland) {
  let isExpanded = false;
  dynamicIsland.addEventListener('click', () => {
    isExpanded = !isExpanded;
    if (isExpanded) {
      dynamicIsland.classList.add('dynamic-island-expanded');
      dynamicIsland.innerHTML = `
        <div class="flex items-center justify-between w-full px-2 text-white">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div class="flex flex-col text-left leading-none">
              <span class="text-[10px] text-emerald-400 font-bold">Blinkit Express</span>
              <span class="text-[9px] text-gray-300">Packing in Koramangala</span>
            </div>
          </div>
          <span class="text-[11px] font-black text-white font-mono">11m</span>
        </div>
      `;
      setTimeout(() => {
        if (isExpanded) {
          isExpanded = false;
          dynamicIsland.classList.remove('dynamic-island-expanded');
          dynamicIsland.innerHTML = `
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-[11px] font-bold text-emerald-400 tracking-tight">⚡ 12m</span>
            </div>
            <div class="w-3 h-3 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center">
              <div class="w-1 h-1 rounded-full bg-blue-950"></div>
            </div>
          `;
        }
      }, 3500);
    }
  });
}

let cleanupCurrentScreen = null;

function renderRoute(route) {
  if (cleanupCurrentScreen) {
    cleanupCurrentScreen();
    cleanupCurrentScreen = null;
  }

  // Scroll to top inside the iPhone scroll viewport
  if (scrollViewport) {
    scrollViewport.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Hide bottom nav on checkout/payment/guarantee screens where sticky footer exists
  const hideBottomNavRoutes = ['payment', 'guarantee', 'cart', 'cart-variant'];
  if (bottomNavContainer) {
    if (hideBottomNavRoutes.includes(route)) {
      bottomNavContainer.style.display = 'none';
    } else {
      bottomNavContainer.style.display = 'block';
    }
  }

  switch (route) {
    case 'home':
      cleanupCurrentScreen = renderHomeScreen(screenContainer);
      break;
    case 'category':
      cleanupCurrentScreen = renderCategoryScreen(screenContainer);
      break;
    case 'product':
      cleanupCurrentScreen = renderProductDetailScreen(screenContainer);
      break;
    case 'cart':
      cleanupCurrentScreen = renderCartScreen(screenContainer);
      break;
    case 'guarantee':
      cleanupCurrentScreen = renderGuaranteeScreen(screenContainer);
      break;
    case 'payment':
      cleanupCurrentScreen = renderPaymentScreen(screenContainer);
      break;
    case 'tracking':
      cleanupCurrentScreen = renderTrackingScreen(screenContainer);
      break;
    case 'cart-variant':
      cleanupCurrentScreen = renderCartVariantScreen(screenContainer);
      break;
    case 'new-for-you':
      cleanupCurrentScreen = renderNewForYouScreen(screenContainer);
      break;
    default:
      cleanupCurrentScreen = renderHomeScreen(screenContainer);
  }
}

// Subscribe router
router.subscribe((route) => {
  renderRoute(route);
});

// Initial mount
renderRoute(router.currentRoute || 'home');
