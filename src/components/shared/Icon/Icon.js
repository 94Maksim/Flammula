import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Icon',
    data() {
        return {
            image: '/images/sprite.svg'
        }
    },
    props: {
        name: {
            type: String,
            required: true
        }
    }
});