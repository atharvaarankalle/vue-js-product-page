import { createApp } from 'vue/dist/vue.esm-bundler';
import ProductDisplay from './components/ProductDisplay';

const app = createApp({
    data() {
        return {
            cart: 0,
            premium: false
        }
    },
    methods: {
    },
})

app.component("product-display", ProductDisplay);
app.mount("#app");
