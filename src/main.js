import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            cart: 0,
            product: "Socks",
            description: "Comfortable, soft and warm socks!",
            image: "/src/assets/images/socks_green.jpg",
            inventory: 100,
            onSale: false,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green" },
                { id: 2235, color: "blue" },
            ]
        }
    }
})

app.mount("#app");
