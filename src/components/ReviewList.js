export default {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br>
                "{{ review.review }}"
                <br>
                {{ review.recommend === "Yes" ? "This user recommends this product" : "This user does not recommend this product" }}
            </li>
        </ul>
    </div>
    `
}