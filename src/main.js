import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            brand: "Vue Mastery",
            description: "Comfortable, soft and warm socks!",
            selectedVariant: 0,
            inventory: 13,
            onSale: false,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green", image: "/src/assets/images/socks_green.jpg", quantity: 50 },
                { id: 2235, color: "blue", image: "/src/assets/images/socks_blue.jpg", quantity: 10 },
            ]
        }
    },
    methods: {
        addToCart(selectedVariant) {
            if (this.variants[selectedVariant].quantity > 0) {
                this.variants[selectedVariant].quantity -= 1;
                this.cart += 1;
            }
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
    }
})

app.mount("#app");
