export default {
    props: {
        cart: {
        },
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <img :src="image" :class="{ 'out-of-stock-img': variants[selectedVariant].quantity == 0 }">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-show="onSale">On sale while stocks last!</p>
            <p>{{ description }}</p>
            <p v-if="variants[selectedVariant].quantity > 10">In Stock ({{ variants[selectedVariant].quantity }})</p>
            <p v-else-if="variants[selectedVariant].quantity <= 10 && variants[selectedVariant].quantity > 0">Low Stock! ({{ variants[selectedVariant].quantity }})</p>
            <p v-else>Out of Stock</p>

            <p>Shipping: {{ shipping }}</p>
            <ul>
            <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle"
            :style="{ backgroundColor: variant.color }">
            {{ }}
            </div>
            <button class="button" v-on:click="addToCart(selectedVariant)" :class="{ disabledButton: variants[selectedVariant].quantity == 0 }" :disabled="variants[selectedVariant].quantity == 0">Add to Cart</button>
            <button class="button" v-on:click="removeFromCart(selectedVariant)" :class="{ disabledButton: variants[selectedVariant].quantity == 0 }" :disabled="variants[selectedVariant].quantity == 0">Remove</button>
        </div>
    </div>
    <review-list v-show="reviews.length > 0" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            description: "Comfortable, soft and warm socks!",
            selectedVariant: 0,
            onSale: false,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green", image: "/src/assets/images/socks_green.jpg", quantity: 50 },
                { id: 2235, color: "blue", image: "/src/assets/images/socks_blue.jpg", quantity: 10 },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart(selectedVariant) {
            if (this.variants[selectedVariant].quantity > 0) {
                this.variants[selectedVariant].quantity -= 1;
                this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
            }
        },
        removeFromCart(selectedVariant) {
            if (this.cart.length > 0) {
                this.variants[selectedVariant].quantity += 1;
                this.$emit("remove-from-cart", this.variants[selectedVariant].id);
            }
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        shipping() {
            if (this.premium) {
                return "Free";
            }
            return "$2.99";
        }
    }
}