<script setup lang="ts">
import type { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/vue3';

const calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin]
}
</script>

<template>
  <main>
    <FullCalendar :options="calendarOptions"></FullCalendar>
  </main>
</template>
