<script setup>
    import { ref } from 'vue';

    let message = ref('I need help'); //Ref updateib kõike, mis kasutab seda kui see muutub


</script>

<template>
    <div class="container">
        <h1>{{ message.split('').reverse().join('') }}</h1>
        <button class="button is-primary" @click="message = 'I need sleep!'">This is a button</button>
        <input class="input" v-model="message">
    </div>
</template>

<style>
