// 뷰 어플리케이션을 초기화하고 구성하는 역할

import { createApp, h } from 'vue'     // vue 패키지에서 함수를 가져온다. 모든 뷰 어플리케이션은 하나의 인스턴스를 가진다. createApp() 뷰 어플리케이션의 인스턴스를 생성하는 함수

createApp({
    
    data() {
        return {message : 'Hello Vuejs!', }
    },

    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('');
        },
    },

    render() {
        return h('div', [h('p', this.message), h('button', {onClick : this.reverse}, 'Reverse'),]);
    },
}).mount('#app');

createApp(App).mount('#app')
