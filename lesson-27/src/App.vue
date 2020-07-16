<template>
    <div>
        <form-helper>
            <h2 slot="title">{{title}}</h2>
            <p slot="text" class="paragraph1">I am the paragraph text for the slot</p>
            <div slot="form-header">
                <h3>This is the title of a form</h3>
                <p>This is some info about the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required />
                <input type="password" placeholder="password" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './components/formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
            title: 'I am a dynamic slot title'
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
h2{
    text-align: center;
}
p.paragraph1{
    text-align: center;
}
</style>
