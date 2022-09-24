import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            description: "Comfortable, soft and warm socks!",
            image: "/src/assets/images/socks_green.jpg",
            inventory: 0,
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
    }
})

app.mount("#app");
