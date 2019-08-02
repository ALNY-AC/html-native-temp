new Vue({
    el: '#App',
    data() {
        return {
            list: []
        };
    },
    methods: {
        update() {
            let list = [
                { text: '项目' },
                { text: '项目' },
                { text: '项目' },
                { text: '项目' },
            ]
            // pageData.list
            list.forEach((el) => {
                this.list.push(el);
            })
        }
    },
    mounted() {

    }
})