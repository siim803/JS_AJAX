<script setup>
import { computed, ref } from 'vue';
import Tabs from './components/Tabs.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

const titles = ref([
  'Pictures',
  'Movies',
  'Bloons TD6',
  'Git Gud',
]);

const active_tab = ref(0);

const currentPage = computed(() => {
  switch (active_tab.value) {
    case 0:
      return ToDo;
    case 1:
      return Modals;
    default:
      return {
        template: '<div class="box has-text-centered"><h2 class="title is-5">{{ title }}</h2><p>This tab is not implemented yet.</p></div>',
        props: ['title'],
      };
  }
});
</script>

<template>
  <Tabs :titles="titles" :active="active_tab" @change="active_tab = $event"></Tabs>

  <div class="container">
    <component :is="currentPage" :title="titles[active_tab]" />
  </div>
</template>

