const WA_NUMBER = '96878064276';
const STORAGE_KEY = 'smart_home_store_cart';

function loadCart() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const items = raw ? JSON.parse(raw) : [];
        return Array.isArray(items) ? items : [];
    } catch {
        return [];
    }
}

function saveCart(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formatPrice(amount) {
    if (amount == null || amount === '') return 'On request';
    const n = Number(amount);
    if (!Number.isFinite(n)) return 'On request';
    return n.toFixed(3);
}

function buildWhatsAppUrl(lines) {
    const header = 'مرحبا، أريد طلب المنتجات التالية من Smart Home:';
    const body = lines.map((line, i) => {
        const price = line.price != null ? ` — ${formatPrice(line.price)} OMR` : '';
        return `${i + 1}. ${line.title} × ${line.qty}${price}`;
    }).join('\n');
    const total = lines.reduce((sum, line) => {
        const p = Number(line.price);
        return sum + (Number.isFinite(p) ? p * line.qty : 0);
    }, 0);
    const footer = total > 0 ? `\n\nالإجمالي التقريبي: ${total.toFixed(3)} OMR` : '';
    const text = `${header}\n\n${body}${footer}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function registerStorefrontCart(Alpine) {
    Alpine.store('cart', {
        items: loadCart(),
        open: false,

        get count() {
            return this.items.reduce((n, item) => n + item.qty, 0);
        },

        get subtotal() {
            return this.items.reduce((sum, item) => {
                const p = Number(item.price);
                return sum + (Number.isFinite(p) ? p * item.qty : 0);
            }, 0);
        },

        persist() {
            saveCart(this.items);
        },

        add(product) {
            if (!product?.id) return;
            const id = String(product.id);
            const existing = this.items.find((item) => item.id === id);
            if (existing) {
                existing.qty += 1;
            } else {
                this.items.push({
                    id,
                    title: product.title || 'Product',
                    price: product.price ?? null,
                    image: product.image || null,
                    qty: 1,
                });
            }
            this.persist();
            this.open = true;
        },

        setQty(id, qty) {
            const item = this.items.find((row) => row.id === String(id));
            if (!item) return;
            const next = Math.max(1, Math.min(99, Number(qty) || 1));
            item.qty = next;
            this.persist();
        },

        remove(id) {
            this.items = this.items.filter((item) => item.id !== String(id));
            this.persist();
        },

        clear() {
            this.items = [];
            this.persist();
        },

        checkoutWhatsApp() {
            if (!this.items.length) return;
            window.open(buildWhatsAppUrl(this.items), '_blank', 'noopener');
        },

        buyNow(product) {
            if (!product?.id) return;
            const line = {
                id: String(product.id),
                title: product.title || 'Product',
                price: product.price ?? null,
                qty: 1,
            };
            window.open(buildWhatsAppUrl([line]), '_blank', 'noopener');
        },
    });

    Alpine.data('productCardActions', (product) => ({
        product,
        addToCart() {
            Alpine.store('cart').add(this.product);
        },
        buyNow() {
            Alpine.store('cart').buyNow(this.product);
        },
    }));
}
