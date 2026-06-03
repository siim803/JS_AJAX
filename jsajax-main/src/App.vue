<script setup>
    import { ref } from 'vue';
    import Tabs from './components/Tabs.vue';
    import ToDo from './pages/ToDo.vue';

    let titles = ref([
        'Pictures',
        'Movies',
        'Bloons TD6',
        'Git Gud',
    ]);

let active_tab = ref(0);

</script>

<template>
    <Tabs :titles="titles" :active="active_tab" @change="active_tab = $event"></Tabs>
    
    <div class="container">
        <ToDo />
    </div>
</template>

