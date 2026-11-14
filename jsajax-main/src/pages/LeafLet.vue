<script setup>
import { onBeforeUnmount, ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';

let center = ref([59.42699, 24.74368]);

let coords = ref([0, 0]);
let geolocationWatchId = null;
if ("geolocation" in navigator) {
    geolocationWatchId = navigator.geolocation.watchPosition((position) => {
        coords.value = [position.coords.latitude, position.coords.longitude];
    });
} else {
    /* geolocation IS NOT available */
}

onBeforeUnmount(() => {
    if (geolocationWatchId !== null) {
        navigator.geolocation.clearWatch(geolocationWatchId);
    }
});

</script>
<template>
    
 <button class="button is-primary" @click="center = [57.76174545532467, 26.62421834241272]">Go to Litsi</button>
<LeafletMap :center="center" :zoom="18" :marker="coords"></LeafletMap>
</template>
<style>
</style>