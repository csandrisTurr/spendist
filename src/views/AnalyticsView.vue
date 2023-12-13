<script setup lang="ts">
import ValueCard from '@/components/ValueCard.vue';
import VChart from "vue-echarts";
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts';
import colors from 'tailwindcss/colors';
import { install$10 } from 'echarts/types/dist/shared';

use([GridComponent, LineChart, CanvasRenderer]);

let option: EChartsOption = {
  color: colors['emerald']['800'],
  textStyle: {
    color: colors['zinc']['500'],
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      lineStyle: {
        color: colors['zinc']['500'],
        width: 2,
      },
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: colors['zinc']['800'],
        width: 2,
      }
    }
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: false,
      lineStyle: {
        color: colors['emerald']['500'],
        width: 5,
        shadowColor: colors['emerald']['500'],
        shadowBlur: 15,
        shadowOffsetY: 10,
      },
    }
  ],
};
</script>

<template>
  <main class="w-full flex flex-col justify-between gap-4">
    <section class="grid gap-4 grid-rows-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
      <ValueCard title="All earnings" value="304 683 Ft" />
      <ValueCard title="All spendings" value="95 332 Ft" />
      <ValueCard title="30 day earnings" value="20 000 Ft" />
      <ValueCard title="30 day spendings" value="30 215 Ft" />
    </section>
    <section class="bg-zinc-900 h-full rounded-md flex items-center justify-center">
      <v-chart :option="option" autoresize class="chart"></v-chart>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.chart {
  height: 600px;
}
</style>