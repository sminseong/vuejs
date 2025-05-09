<script>
    export default {
        inject: {
            customSecondMessage: {
            from: 'secondMessage',
            default: 'default value',
            },
        },
    }
</script>

<template>
    <h1>{{ customSecondMessage }}</h1>
</template>

<style>
    h1 {
        color: brown;
    }
</style>