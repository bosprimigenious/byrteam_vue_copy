<template>
  <!-- 顶部导航：在首屏顶部透明，滚动后变浅色背景并加模糊与边框 -->
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b',
      atTop ? 'bg-transparent border-transparent' : 'bg-white/80 backdrop-blur border-gray-100'
    ]"
  >
    <div class="py-3 grid grid-cols-2 items-center px-2 sm:px-6"
         :class="atTop ? 'text-white' : 'text-gray-900'">
      <div class="pl-1 sm:pl-2 flex items-center">
        <LogoMark :class="['text-current', atTop ? 'text-white' : 'text-gray-900', 'h-10 w-[150px] sm:h-10']" />
      </div>
      <!-- 桌面端导航链接：仅展示常用外链，可按需扩展 -->
      <nav class="hidden md:flex justify-end pr-2 sm:pr-2 items-center gap-8 text-lg">
        <a href="https://bbs.byr.cn/" target="_blank" rel="noopener noreferrer" :class="atTop ? 'text-white' : 'text-gray-900'">北邮人论坛</a>
        <a href="https://byr.pt/" target="_blank" rel="noopener noreferrer" :class="atTop ? 'text-white' : 'text-gray-900'">北邮人BT</a>
        <a href="https://byrio.org/" target="_blank" rel="noopener noreferrer" :class="atTop ? 'text-white' : 'text-gray-900'">BYRIO技术社区</a>
      </nav>
    </div>
  </header>
  
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LogoMark from '@/assets/byrteam-logo.svg'

const atTop = ref(true)

function handleScroll() {
  atTop.value = window.scrollY < 24
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
</style>


