<script setup lang="ts">
import ValueCard from '@/components/ValueCard.vue';
import VChart from "vue-echarts";
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts';

use([GridComponent, LineChart, CanvasRenderer]);

let option: EChartsOption = {
  color: '#FF0',
  textStyle: {
    color: '#000',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    nameTextStyle: {
      color: '#F00',
    },
    splitLine: {
      lineStyle: {
        color: '#F00',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#FF0',
      }
    }
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#34d399',
        width: 3,
      },
      areaStyle: {
        opacity: 0,
        shadowColor: '#34d399',
      }
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
    <section class="bg-zinc-900 h-full">
      <v-chart :option="option" autoresize class="chart"></v-chart>
    </section>
  </main>
</template>

<style>
.chart {
  height: 700px;
}
</style>