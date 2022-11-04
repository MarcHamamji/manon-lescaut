<script setup lang="ts">
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import jsConfetti from '../confetti';
import SideBar from '../components/SideBar.vue';

import { useCyclesStore as useCyclesStore } from '../stores/cycles';
const cyclesStore = useCyclesStore()

const audio = {
  success: new Audio('sounds/success.mp3'),
  fail: new Audio('sounds/fail.mp3'),
};

const mapElement = ref<HTMLDivElement>();

const markers: L.Marker[] = [];

let polyline = L.polyline([cyclesStore.cycles[0].events[0].latlng], {
  lineCap: 'round',
  lineJoin: 'round',
  smoothFactor: 3,
  weight: 2,
});

let map: L.Map;

onMounted(() => {
  map = L.map(mapElement.value!, {
    renderer: L.canvas(),
  })
  polyline.addTo(map);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 3,
    noWrap: true,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.control.scale({
    imperial: false,
  }).addTo(map);

  cyclesStore.cycles.forEach((cycle) => {
    cycle.events.forEach((event) => {
      const marker = L.marker(event.latlng, {
        title: event.placeName,
        icon: L.divIcon({
          className: 'pin2',
          iconAnchor: L.point(12, 30),
          tooltipAnchor: L.point(0, -30),
        }),
      }).addTo(map);
      marker.bindTooltip(`<span style="font-size: 16px;">${event.placeName}</span>`, {
        interactive: true,
        direction: 'top',
        content: '<h3>HELLO</h3>'
      });
      marker.addEventListener('click', (e) => {
        if (cyclesStore.currentEventInfo.latlng.equals(e.latlng)) {
          audio.success.pause();
          audio.success.currentTime = 0;
          audio.success.play();
          nextEvent();
        } else {
          audio.fail.play();
          cyclesStore.wrongGuesses++;
        }
      });
      markers.push(marker);
    });
  });

  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds());
});

const nextEvent = () => {
  map.flyTo(cyclesStore.currentEventInfo.latlng, undefined, {
    easeLinearity: 8,
  });
  polyline.addLatLng(cyclesStore.currentEventInfo.latlng);
  cyclesStore.nextIndex();
  document.getElementById(cyclesStore.cycleIndex + ',' + cyclesStore.eventIndex)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  jsConfetti.addConfetti();
};

const playAgain = () => {
  cyclesStore.absoluteIndex = 0;
  cyclesStore.eventIndex = 0;
  cyclesStore.cycleIndex = 0;
  cyclesStore.wrongGuesses = 0;

  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds());

  polyline.removeFrom(map);
  polyline = L.polyline([cyclesStore.cycles[0].events[0].latlng], {
    lineCap: 'round',
    lineJoin: 'round',
    smoothFactor: 3,
    weight: 2,
  });
  polyline.addTo(map);

  console.log(document.getElementById('0,0'));
  setTimeout(() => {
    document.getElementById('0,0')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 0);
};
</script>

<template>
  <div class="view">
    <side-bar />
    <div ref="mapElement" class="map fh"></div>
    <button @click="() => {nextEvent(); audio.success.play()}"></button>
  </div>
  <el-dialog
    v-model="cyclesStore.isDone"
    align-center
    :show-close="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    width="420px"
  >
    <el-result
      class="result"
      icon="success"
      title="Vous avez gagné!"
    >
      <template #sub-title>
        <b>
          Erreurs: {{ cyclesStore.wrongGuesses }}
        </b>
      </template>
      <template #extra>
        <el-button @click="playAgain" type="primary" class="replay" size="large">Rejouer</el-button>
      </template>
    </el-result>
  </el-dialog>
</template>

<style scoped lang="scss">
.view {
  min-height: 0px;
  display: flex;
  flex-direction: row;

  .map {
    padding: 0;
    flex-grow: 1;
  }
}

.result {
  padding: 2px;

  .replay {
    width: 360px;
  }
}
</style>
