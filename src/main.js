import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            product: "Socks",
            description: "Comfortable, soft and warm socks!",
            image: '/src/assets/images/socks_green.jpg',
            inStock: true
        }
    }
})

app.mount("#app");
