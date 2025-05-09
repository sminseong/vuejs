<script>
    export default {
        emits: ['print-hello', 'onPrint-hello'],

        props: {
            name: {
                type: String,
                required: true,
                validator: function (value) {
                    return value.length >= 2;
                },
            },

            age: {
                type: Number,
                default: function() {
                    return 25;
                },
            },

            addr: {
                type: String,
            },

            phone: {
                type: String,
                validator: function(value) {
                    return value.length >= 13;
                },
            },
        },

        methods: {
            parentEventCall1() {
                this.$emit('print-hello');
            },

            parentEventCall2() {
                this.$emit('onPrint-hello', {name:"ssg", age:30});
            },
        },
        
        created() {
            console.log(typeof this.name);
            console.log(typeof this.age);
            console.log(typeof this.addr);
            console.log(typeof this.phone);
        }
    }
</script>

<template>
    <p>이름: {{ name }}</p>
    <p>나이: {{ age }}</p>
    <p>주소: {{ addr }}</p>
    <p>전화번호: {{ phone }}</p>
    <!-- <button @click="$emit('print-hello','ssg',30)">클릭</button> -->
    <button @click="parentEventCall1">클릭</button>
    <button @click="parentEventCall2">클릭</button>
</template>