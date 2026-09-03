// Cart State Store for Blinkit Category Discovery App

class CartStore {
  constructor() {
    this.listeners = new Set();
    this.items = [
      {
        id: 'potato',
        name: 'Potato (Alugadde)',
        unit: '1 kg',
        price: 26,
        originalPrice: 33,
        qty: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwFWNNHPJOxki1Mif73B_X-pAvOejB40JHtEmDL-EkjIW3M4xLwLuo1VcekaTcoHnr-6-gYvHYvc1ymx-sOsKDrFQTXGs5Lg2gwiSk4ZvzIN_kdjp6uSPBc3r7q6NDpZZGj_hePa_Fkqxpi5_drvf8EEvWLUy9KZ5cuW3yGW6P3ulBliRfp3ee2yAsOTnGbf5R_ET9FdbcSoSF9quYaXFEa8jZYRlGZ544-DOC7aK6Q1G3c8ebRS9q',
        badge: '25% OFF',
        category: 'Fresh Vegetables'
      },
      {
        id: 'onion',
        name: 'Onion (Eerulli)',
        unit: '1 kg',
        price: 39,
        originalPrice: 50,
        qty: 2,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTBnPf2PSEPiwb7AfZpIHyAgTdRAk7i1LkDEiTpazErP-2fXZzzsvrpq9p6fWuzyyFcchUyICMRo7fv3-stOpQA3xtnNB7VRuLqHbDF5OOGJJgcfXmWuG06xBmGl2QDI20NEGvmnm6f7CuVz6G3Uo7lB4YLuB_wXnyPjkjsZjIOLC3SU0kGbbogrPfIKzc8dnVvlJ0eF3rlySgvzS8giWC60hVJElE6fkIaVOWtymEJirfojFYagh0',
        badge: '21% OFF',
        category: 'Fresh Vegetables'
      }
    ];

    this.trialCombosAdded = new Set();
    this.selectedAddress = 'Home · B1 H2, Hermes Heritage Society, Pune';
    this.appliedCoupon = 'BEAUTY15';
    this.deliveryEta = '11 minutes';
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  getItem(id) {
    return this.items.find(i => i.id === id);
  }

  hasItem(id) {
    return this.items.some(i => i.id === id);
  }

  getItemQty(id) {
    const item = this.getItem(id);
    return item ? item.qty : 0;
  }

  addItem(itemData, delta = 1) {
    const existing = this.items.find(i => i.id === itemData.id);
    if (existing) {
      existing.qty += delta;
    } else {
      this.items.push({
        ...itemData,
        qty: delta,
        originalPrice: itemData.originalPrice || Math.round(itemData.price * 1.3)
      });
    }
    this.notify();
  }

  removeItem(id, delta = 1) {
    const index = this.items.findIndex(i => i.id === id);
    if (index !== -1) {
      this.items[index].qty -= delta;
      if (this.items[index].qty <= 0) {
        this.items.splice(index, 1);
        this.trialCombosAdded.delete(id);
      }
      this.notify();
    }
  }

  setQty(id, qty) {
    const index = this.items.findIndex(i => i.id === id);
    if (index !== -1) {
      if (qty <= 0) {
        this.items.splice(index, 1);
        this.trialCombosAdded.delete(id);
      } else {
        this.items[index].qty = qty;
      }
      this.notify();
    }
  }

  addCombo(combo) {
    this.trialCombosAdded.add(combo.id);
    this.addItem({
      id: combo.id,
      name: combo.name,
      unit: combo.unit || 'Special Combo',
      price: combo.price,
      originalPrice: combo.originalPrice,
      image: combo.image,
      badge: 'COMBO SAVER',
      category: 'Trial Combo'
    }, 1);
  }

  getTotals() {
    const count = this.items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const originalTotal = this.items.reduce((sum, item) => sum + (item.originalPrice * item.qty), 0);
    const savings = Math.max(0, originalTotal - subtotal);
    const deliveryFee = subtotal >= 100 || count === 0 ? 0 : 15;
    const handlingFee = count > 0 ? 2 : 0;
    const grandTotal = subtotal + deliveryFee + handlingFee;

    return {
      count,
      subtotal,
      originalTotal,
      savings,
      deliveryFee,
      handlingFee,
      grandTotal
    };
  }
}

export const cartStore = new CartStore();
