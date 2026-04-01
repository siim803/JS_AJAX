<script setup>
    import { ref } from 'vue';

    let items = ref(['Sai', 'Piim', 'Viin', 'Ma', 'Tahan', 'Magada'])
    let new_item = ref('')

    function add_shi()
    {
        if (new_item.value.trim())
        {
            items.value.push(new_item.value);
            new_item.value = ''
        }
    }
</script>

<template>
    <div class="container">
        <div class="field has-addons mt-3">
            <div class="control is-expanded">
                <input class="input" type="text" v-model="new_item" @keypress.enter="add_shi">
            </div>
            <div class="control">
                <button class="button is-info" @click="add_shi">
                    Add shit
                </button>
            </div>
        </div>

        <div class="content">
            <h1>All items</h1>
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>

    </div>
</template>

<style>
