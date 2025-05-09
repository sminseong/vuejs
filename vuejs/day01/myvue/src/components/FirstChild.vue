<script>
import { message, reversedMessage } from '@/keys';
import SecondChild from './SecondChild.vue';

    export default {
        components: {
            SecondChild
        },

        provide() {
            return {
                secondMessage: this.secondMessage,
            };
        },

        data() {
            return {
                secondMessage: 'second Message!',
            };
        },

        inject: {
            customMessage: {
            from: message,
            default: 'default value',
            },
            customReversedMessage: {
            from: reversedMessage,
            default: 'default value',
            },
        },
    };
</script>

<template>
  <h1>{{ message }}</h1>
  <h2>{{ reversedMessage }}</h2>
  <h1>{{ customMessage }}</h1>
  <h2>{{ customReversedMessage }}</h2>
  <SecondChild/>
</template>

<style>
     h1 {
        color: blue;
     }
     p {
         color: green;
     }
     
</style>