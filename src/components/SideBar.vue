<script setup lang="ts">
import { useCyclesStore as useCyclesStore } from '../stores/cycles';
const cyclesStore = useCyclesStore()

</script>

<template>
  <aside class="sidebar">
    <div
      v-for="(cycle, cycleIndex) in cyclesStore.cycles"
      :key="'c' + cycleIndex"
    >
      <h3>
        {{ cycle.name }}
      </h3>
      <el-steps
        direction="vertical"
        :active="cyclesStore.getActiveByCycle(cycleIndex)"
        :space="70"
        finish-status="success"
      >
        <el-step
          v-for="(event, eventIndex) in cycle.events"
          :key="'e' + eventIndex"
          :title="event.description"
          :id="cycleIndex + ',' + eventIndex"
        >
          <template v-if="cyclesStore.compareEventWithCurrent(eventIndex, cycleIndex) < 0" #description>
            <el-tag type="success" effect="dark">{{ cyclesStore.cycles[cycleIndex].events[eventIndex].placeName}}</el-tag>
          </template>
        </el-step>
      </el-steps>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

@media only screen and (max-width: 600px) {
  aside.sidebar {
    width: 100%;
    max-width: initial;
    height: 50%;
  }
}

.sidebar {
  width: 400px;
  max-width: 40vw;
  padding: 12px;
  padding-right: 18px;
  overflow-y: scroll;
  background-color: #dedfe0;
  box-shadow: 8px 0px 10px 0px rgba(0, 0, 0, 0.2), 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

</style>
