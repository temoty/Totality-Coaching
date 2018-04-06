<template>
<div>
    <h1>{{ message }}</h1>
    <app-input :msg="message"></app-input>
</div>

</template>

<script>
import Input from './submitquiz.vue';

export default {
    data() {
        return {
            message: 'Your Final Score!'
        }
    },
    components: {
        'app-input': Input
    }
}
</script>