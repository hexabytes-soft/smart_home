import './bootstrap';

import Alpine from 'alpinejs';
import { registerStorefrontCart } from './storefront-cart';

window.Alpine = Alpine;

registerStorefrontCart(Alpine);

Alpine.start();
