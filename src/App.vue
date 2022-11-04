<script setup lang="ts">
import { useCyclesStore } from './stores/cycles';

const cyclesStore = useCyclesStore();
</script>

<template>
  <main class="main">
    <header>
      <h2>Manon Lescaut</h2>
      <span class="infos">
        <span class="text">
          Selectionner le lieu où l'évènement suivant a lieu:
        </span>
        <span class="event">
          {{ cyclesStore.currentEventInfo.description }}
        </span>
      </span>
      <span class="score">
        <span class="text">
          Erreurs:
        </span>
        <span class="event">
          {{ cyclesStore.wrongGuesses }}
        </span>
      </span>
    </header>
    <router-view></router-view>
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh !important;

  header {
    padding: 12px;
    box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.8);
    background-color: #1e6091;
    color: #e8e1e1;
    display: flex;
    flex-direction: row;
    z-index: 110;
    height: 84px;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      margin: 0px 18px;
    }

    .infos {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .event {
        // font-size: 28px;
        font-size: 1.5rem;
        font-style: italic;
      }
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 2vw;

      .event {
        font-size: 38px;
      }
    }
  }
}
</style>
