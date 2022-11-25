import { computed, reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import { cycles as cyclesList } from '../cycles';

export const useCyclesStore = defineStore('cycles', () => {
  const cycles = reactive(cyclesList);

  const wrongGuesses = ref(0);

  const absoluteIndex = ref(0);
  const cycleIndex = ref(0);
  const eventIndex = ref(0);

  const eventCounts = cycles.map(c => c.events.length);
  const totalEvents = eventCounts.reduce((sum, num) => {
    return sum + num;
  }, 0);
  
  const startTime = ref(0);
  const deltaTime = ref(0);
  const timerInterval = ref<number>();

  const updateTimer = () => {
    const now = Date.now();
    deltaTime.value = Math.floor((now - startTime.value) / 1000);
  };

  const time = computed(() => {
    return String(Math.floor(deltaTime.value / 60)).padStart(2, '0') + ':' + String(deltaTime.value % 60).padStart(2, '0');
  });

  const startTimer = () => {
    startTime.value = Date.now();
    stopTimer();
    updateTimer();
    timerInterval.value = setInterval(() => {
      updateTimer();
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerInterval.value);
  };

  const resetTimer = () => {
    deltaTime.value = 0;
  };

  const nextIndex = () => {
    if (absoluteIndex.value === totalEvents) return;

    absoluteIndex.value++;

    if (eventIndex.value < eventCounts[cycleIndex.value] - 1) {
      eventIndex.value++;
    } else {
      cycleIndex.value++;
      eventIndex.value = 0;
    }
  };

  const getActiveByCycle = (index: number) => {
    if (index < cycleIndex.value) return eventCounts[index];
    if (index > cycleIndex.value) return -1;

    let finalEventIndex = absoluteIndex.value;
    for (let i = 0; i < index; i++) {
      finalEventIndex -= eventCounts[i];
    }

    return finalEventIndex;
  }

  const compareEventWithCurrent = (event: number, cycle: number) => {
    // Argument is before current
    if (cycle < cycleIndex.value) return -1;
    // Argument is after current
    if (cycle > cycleIndex.value) return 1;

    if (event < eventIndex.value) return -1;
    if (event > eventIndex.value) return 1;

    return 0;
  };

  const getAbsoluteEventIndex = (event: number, cycle: number) => {
    const absolute = ref(event);
    let cycleIndex = cycle - 1;
    while (cycleIndex >= 0) {
      absolute.value += eventCounts[cycleIndex];
      cycleIndex--;
    }
    return absolute.value;
  };

  const currentEventInfo = computed(() => {
    const cycle = cycles[cycleIndex.value];
    if (cycle) {
      return cycles[cycleIndex.value].events[eventIndex.value];
    }
    const c = cycles[cycleIndex.value - 1];
    const e = c.events[c.events.length - 1];
    return e;
  });

  const isDone = computed(() => {
    return absoluteIndex.value >= totalEvents;
  });

  return {
    cycles,
    cycleIndex,
    eventIndex,
    absoluteIndex,
    nextIndex,
    getAbsoluteEventIndex,
    getActiveByCycle,
    compareEventWithCurrent,
    currentEventInfo,
    isDone,
    wrongGuesses,
    time,
    startTimer,
    stopTimer,
    resetTimer,
  };
})
