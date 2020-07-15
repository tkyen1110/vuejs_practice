<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header>
</template>
<script>
// imports
import { bus } from '../main';

export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    },
    methods: {
      changeTitle: function(){
        // this.$emit('changeTitle', 'Vue Ninjas');
        this.title = 'Vue Ninjas';
        bus.$emit('titleChanged', 'Vue Ninjas');
      }
    },
    // lifecycle hooks
    // Before creating Vue component
    beforeCreate(){
        alert('beforeCreate');
    },
    // Vue component has been created
    created(){
        // Good for fetching data
        alert('created');
    },
    // Before mounting Vue component to the DOM
    beforeMount(){
        alert('beforeMount');
    },
    // Vue component has been mounted to the DOM
    mounted(){
        // Good for manipulating the DOM
        alert('mounted');
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    updated(){
        alert('updated');
    }
}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>
