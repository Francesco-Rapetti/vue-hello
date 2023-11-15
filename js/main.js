const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            src: 'https://picsum.photos/200/300'
        }
    }
}).mount('#app');
