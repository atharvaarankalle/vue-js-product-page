import { createApp } from 'vue/dist/vue.esm-bundler';
import ProductDisplay from './components/ProductDisplay';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

const app = createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            this.cart.splice(this.cart.indexOf(id), 1);
        }
    },
})

app.component("product-display", ProductDisplay);
app.component("review-form", ReviewForm);
app.component("review-list", ReviewList);
app.mount("#app");
