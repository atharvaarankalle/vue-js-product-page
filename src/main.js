import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({
    data() {
        return {
            product: 'Socks'
        }
    }
})

app.mount("#app");
