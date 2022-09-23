import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            product: "Socks",
            description: "Comfortable, soft and warm socks!"
        }
    }
})

app.mount("#app");
