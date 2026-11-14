<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps(['center', 'zoom', 'marker']);
const mapElement = ref(null);
let map = null;
let gps = null;
onMounted(() => {
    map = L.map(mapElement.value).setView(props.center, props.zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    gps = L.marker(props.marker).addTo(map);
});

watch(() => props.center, (newCenter) => {
    if (map) {
        map.flyTo(newCenter);
    }
});

watch(() => props.marker, newMarker => {
    if (gps) {
        gps.setLatLng(newMarker).update();
    }
});

onBeforeUnmount(() => {
    if (map) {
        map.remove();
        map = null;
        gps = null;
    }
});

</script>
<template>
    <div ref="mapElement" class="map"></div>
</template>
<style>
.map {
    height: 800px; 
}
</style>