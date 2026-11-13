<script setup>
import { computed, ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue'
</script>

<template>
    <Tabs :titles="titles" :active="activeTab" @setActive="activeTab=$event"></Tabs>
      <div class="container">
          <component :is="contents[activeTab]"></component>
      </div>
</template>

