Vue.component('greeting', {
    // template: '<p>Hey there, I am a re-usable component</p>',
    template: ` <div>
                    <p>Hey there, I am a re-usable component</p>
                    <p>Hey there, I am {{ name }} <button v-on:click="changeName">Change name</button></p>
                </div>`,
    data: function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Mario'
        }
    }
});

// new Vue({
//     el: '.test',
//     template: '<p>I am a template</p>'
// });

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
