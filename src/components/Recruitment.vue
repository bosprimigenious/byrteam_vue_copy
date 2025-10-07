<template>
  <section class="bg-gray-100">
    <div class="mx-auto max-w-[1280px] px-4 sm:px-10 pt-12 md:pt-16">
      <div class="relative block w-fit">
        <div class="absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12 bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]"></div>
        <h2 class="font-smiley relative text-3xl italic">招新公告与招新流程</h2>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-6 pb-12">
        <img :src="flowImg" alt="招新流程" class="w-full h-auto select-none opacity-90" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 使用本地资源（assets 中）
import flowImg from '@/assets/recruit-flow.png'
</script>

<style scoped>
</style>


