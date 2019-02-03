var app = new Vue({
    el : '#app',
    data : {
        message: 'Vue.js!',
        list : ['りんご', 'バナナ', 'いちご'],
        count : 0,
        show : true,
        show2 : true
    },

    methods : {
        handleClick : function(event) {
            alert(event.target)
        }
    }
})
