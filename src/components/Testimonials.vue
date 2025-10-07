<template>
  <section class="bg-gray-50">
    <div class="mx-auto max-w-[1280px] px-4 sm:px-10 pt-12 md:pt-16">
      <div class="relative block w-fit">
        <div class="absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12 bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]"></div>
        <h2 class="font-smiley relative text-3xl italic">学长学姐说</h2>
      </div>
      <p class="mt-3 text-gray-600">只要你喜欢、想了解，你都可以来定义 byrTeam 的。</p>

      <div class="mt-8 pb-12 relative">
        <Swiper
          :slides-per-view="1.2"
          :centered-slides="true"
          :space-between="16"
          :loop="true"
          :breakpoints="{640:{slidesPerView:1.1},1024:{slidesPerView:1.4}}"
          :speed="700"
          :autoplay="{ delay: 3500, disableOnInteraction: false }"
          navigation
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="card in cards" :key="card.id">
            <div class="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-6 h-full shadow-sm">
              <div class="flex items-center gap-4">
                <div class="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <img v-if="card.avatar" :src="card.avatar" alt="avatar" class="h-full w-full object-cover" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ card.name }}</div>
                  <div class="text-sm text-gray-500">{{ card.meta }}</div>
                </div>
              </div>
              <p class="mt-4 text-gray-700 leading-relaxed">{{ card.content }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F5F5F5] to-transparent hidden sm:block"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F5F5F5] to-transparent hidden sm:block"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 使用大写组件名以保持风格一致
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Testimonial = { id: string; name: string; meta: string; content: string; avatar?: string }
const cards = ref<Testimonial[]>([
  { id: 'a', name: '@momo 「新媒体组」', meta: '21 级 · 网络空间安全学院', content: 'BYR Team 是我的快乐老家，可可爱爱的学长，温温柔柔的学弟，酷酷哒呆呆的老板老姨叔以及一些可爱的小姐姐。成年人的生活本就需要这样的轻松和慰藉。我们是线上好友和伙伴，也是线下的小姐妹、好朋友。' },
  { id: 'b', name: '@tech 「技术组」', meta: '19 级 · 计算机学院', content: '在团队里通过真实项目和完善的工程规范，快速积累了后端与前端协作经验。' },
  { id: 'c', name: '@designer 「设计组」', meta: '20 级 · 数媒', content: '把想法通过合理的规划与细致的设计表达出来，是一件快乐的事。' },
])
</script>

<style scoped>
.testimonial-swiper :deep(.swiper-slide) {
  transition: transform 400ms ease, opacity 400ms ease, filter 400ms ease;
  transform: scale(0.9);
  opacity: 0.6;
  filter: blur(1px);
}
.testimonial-swiper :deep(.swiper-slide-active) {
  transform: scale(1);
  opacity: 1;
  filter: none;
}
</style>


