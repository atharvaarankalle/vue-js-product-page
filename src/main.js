import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            brand: "Vue Mastery",
            description: "Comfortable, soft and warm socks!",
            image: "/src/assets/images/socks_green.jpg",
            inventory: 13,
            onSale: false,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green", image: "/src/assets/images/socks_green.jpg" },
                { id: 2235, color: "blue", image: "/src/assets/images/socks_blue.jpg" },
            ]
        }
    },
    methods: {
        addToCart() {
            if (this.inventory > 0) {
                this.inventory -= 1;
                this.cart += 1;
            }
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        }
    }
})

app.mount("#app");
