<template>
  <!-- N 个理由：三列卡片说明，卡片为白底，外侧继承灰背景 -->
  <section>
    <div class="mx-auto max-w-[1280px] px-4 sm:px-10 pt-12 md:pt-16">
      <div class="relative block w-fit">
        <div class="absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12 bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]"></div>
        <h2 class="font-smiley relative text-3xl italic">加入byrTeam的N个理由</h2>
      </div>

      <div class="mx-auto mt-3 grid grid-cols-1 gap-6 sm:grid-cols-3 pb-12">
        <div class="relative mx-auto flex max-w-[344px] flex-col items-center">
          <div class="z-10 -mb-6 h-[80px] sm:-mb-8 sm:h-[100px] lg:-mb-20 lg:h-[150px] w-full flex items-center justify-center">
            <!-- 预留插画位：可替换为品牌插画或 SVG -->
            <div class="h-full w-[160px] rounded-full bg-[#175DDC]/10"></div>
          </div>
          <div class="grow rounded-2xl bg-white text-center px-6 pb-6 pt-[30px] sm:px-6 sm:pb-6 sm:pt-[40px] lg:px-12 lg:pb-9 lg:pt-[100px] shadow-sm border border-gray-200">
            <h3 class="text-[20px] sm:text-[24px] lg:text-[28px]">开放自由</h3>
            <p class="mt-5 text-xs text-[#585858] sm:text-sm lg:text-base">自由开放的文化氛围让你的声音会被认真聆听，你可以与整个团队的同学进行思想碰撞，点燃创意的火花。</p>
          </div>
        </div>

        <div class="relative mx-auto flex max-w-[344px] flex-col items-center">
          <div class="z-10 -mb-6 h-[80px] sm:-mb-8 sm:h-[100px] lg:-mb-20 lg:h-[150px] w-full flex items-center justify-center">
            <div class="h-full w-[135px] rounded-full bg-[#175DDC]/10"></div>
          </div>
          <div class="grow rounded-2xl bg-white text-center px-6 pb-6 pt-[30px] sm:px-6 sm:pb-6 sm:pt-[40px] lg:px-12 lg:pb-9 lg:pt-[100px] shadow-sm border border-gray-200">
            <h3 class="text-[20px] sm:text-[24px] lg:text-[28px]">发挥价值</h3>
            <p class="mt-5 text-xs text-[#585858] sm:text-sm lg:text-base">我们为每一个有想法的同学搭建舞台，把思考变成现实，好的内容值得被更多人看见。</p>
          </div>
        </div>

        <div class="relative mx-auto flex max-w-[344px] flex-col items-center">
          <div class="z-10 -mb-6 h-[80px] sm:-mb-8 sm:h-[100px] lg:-mb-20 lg:h-[150px] w-full flex items-center justify-center">
            <div class="h-full w-[141px] rounded-full bg-[#175DDC]/10"></div>
          </div>
          <div class="grow rounded-2xl bg-white text-center px-6 pb-6 pt-[30px] sm:px-6 sm:pb-6 sm:pt-[40px] lg:px-12 lg:pb-9 lg:pt-[100px] shadow-sm border border-gray-200">
            <h3 class="text-[20px] sm:text-[24px] lg:text-[28px]">收获满满</h3>
            <p class="mt-5 text-xs text-[#585858] sm:text-sm lg:text-base">从0到1做项目，积累工程经验与作品，和一群志同道合的伙伴一起成长。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// no-op
</script>

<style scoped>
</style>


