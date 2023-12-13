<script setup lang="ts">
import type { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/vue3';

const calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin],
}
</script>

<template>
  <main class="w-full">
    <FullCalendar :options="calendarOptions" class="w-full h-full fc"></FullCalendar>
  </main>
</template>

<style lang="scss" scoped>
.fc-toolbar-title {
  @apply text-3xl font-bold #{!important};
}

.fc-button {
  @apply bg-emerald-500 #{!important};
}

.fc-day-today {
  @apply bg-emerald-500/50 #{!important};
}

.fc * {
  @apply border-zinc-600 #{!important};
}
</style>