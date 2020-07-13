<template>
    <div>
        <h1>{{ title }}</h1>
        <ninjas></ninjas>
    </div>
</template>

<script>
// [comment] Register Vue component locally
import Ninjas from './Ninjas.vue';
// [comment-end]

export default {
    // [comment] Register Vue component locally
    components: {
        'ninjas': Ninjas
    },
    // [comment-end]
    data () {
        return {
          title: 'Ninja App'
        }
    }
}
</script>

<style>
</style>
