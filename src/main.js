import { createApp } from 'vue/dist/vue.esm-bundler';
import ProductDisplay from './components/ProductDisplay';

const app = createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    },
})

app.component("product-display", ProductDisplay);
app.mount("#app");
