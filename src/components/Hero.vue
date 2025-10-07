<template>
  <section class="relative h-[90vh] md:h-screen overflow-hidden">
    <div
      class="absolute inset-0 cursor-grab select-none transition-transform duration-300 will-change-transform"
      :class="{ 'cursor-grabbing duration-0': isDragging }"
      :style="{ transform: `translate3d(${offsetX}px, ${offsetY}px, 0)` }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @pointerleave="onPointerUp"
    >
      <img
        src="/byr/demo-hero-bg.1a3a89ae.jpg"
        alt="hero"
        class="absolute inset-0 h-full w-full object-cover brightness-110 transform-gpu origin-center [backface-visibility:hidden]"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

    <div class="relative w-full px-3 sm:px-6 lg:px-8 h-full flex items-center">
      <!-- 左右按钮：点击推动背景左右滑动，带惯性回弹 -->
      <button
        type="button"
        class="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/50"
        aria-label="向左"
        @click="nudge(-1)"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/50"
        aria-label="向右"
        @click="nudge(1)"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="max-w-[620px] text-white ml-[1ch]">
        <h1 class="text-[44px] sm:text-[68px] font-medium leading-[1.15] tracking-wide">We want you:</h1>
        <p class="mt-3 text-[38px] sm:text-[58px] font-medium leading-[1.2] tracking-wide">我们在这里，</p>
        <p class="mt-1 text-[38px] sm:text-[58px] font-medium leading-[1.2] tracking-wide">等风也等你</p>
        <p class="mt-8 text-sm sm:text-base text-white/90 leading-[2]">
          成立于2000年初，北邮人团队已经陪伴了北邮师生20年有余。我们一直致力于服务北邮人，为北邮师生提供更加便利的服务，一代代北邮人薪火传承北邮人的服务实干精神，用青春书写北邮人的辉煌历程。而现在，无论你是新生还是老司机，只要你怀揣梦想，热爱探索，我们都欢迎你的加入！北邮人总有适合你的地方，让我们一起书写精彩的青春篇章！We Want You！
        </p>
        <p class="mt-4 text-sm sm:text-base text-white/90 leading-[2]">
          点击加入群聊
          <a class="underline underline-offset-4" href="https://qm.qq.com/q/pZEUocoClk" target="_blank" rel="noreferrer noopener">【2025北邮人团队招新群】</a>
          或搜索qq群：
          <span>1027591247</span>
          <br />了解更多吧
        </p>
        <div class="mt-8 flex items-center gap-4">
          <a class="px-10 py-5 sm:px-8 sm:py-4 rounded-full bg-white/40 text-white text-base font-medium backdrop-blur pointer-events-auto" href="https://byr-team.feishu.cn/share/base/form/shrcnbI9QKKRLxwLpjXpxqjVU3d" target="_blank" rel="noreferrer noopener">加入我们</a>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const offsetX = ref(0)
const offsetY = ref(0)
const maxOffset = 48

const velocityX = ref(0)
const velocityY = ref(0)
let lastTime = 0
let rafId: number | null = null

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function stopInertia() {
  if (rafId != null) { cancelAnimationFrame(rafId); rafId = null }
}

function onPointerDown(e: PointerEvent) {
  ;(e.currentTarget as HTMLElement)?.setPointerCapture?.(e.pointerId)
  isDragging.value = true
  stopInertia()
  startX.value = e.clientX - offsetX.value
  startY.value = e.clientY - offsetY.value
  lastTime = performance.now()
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value) return
  const now = performance.now()
  const newX = clamp(e.clientX - startX.value, -maxOffset, maxOffset)
  const newY = clamp(e.clientY - startY.value, -maxOffset, maxOffset)
  const dt = Math.max(1, now - lastTime)
  velocityX.value = (newX - offsetX.value) / dt
  velocityY.value = (newY - offsetY.value) / dt
  offsetX.value = newX
  offsetY.value = newY
  lastTime = now
}

function onPointerUp() {
  if (!isDragging.value) return
  isDragging.value = false
  const friction = 0.93
  const spring = 0.07

  function step() {
    velocityX.value *= friction
    velocityY.value *= friction
    offsetX.value += velocityX.value * 16
    offsetY.value += velocityY.value * 8
    if (offsetX.value > maxOffset) { offsetX.value = maxOffset; velocityX.value *= -0.35 }
    else if (offsetX.value < -maxOffset) { offsetX.value = -maxOffset; velocityX.value *= -0.35 }
    if (offsetY.value > maxOffset) { offsetY.value = maxOffset; velocityY.value *= -0.35 }
    else if (offsetY.value < -maxOffset) { offsetY.value = -maxOffset; velocityY.value *= -0.35 }
    velocityX.value += -offsetX.value * spring
    velocityY.value += -offsetY.value * (spring * 0.5)
    if (
      Math.abs(velocityX.value) < 0.01 &&
      Math.abs(velocityY.value) < 0.01 &&
      Math.abs(offsetX.value) < 0.5 &&
      Math.abs(offsetY.value) < 0.5
    ) { offsetX.value = 0; offsetY.value = 0; rafId = null; return }
    rafId = requestAnimationFrame(step)
  }
  rafId = requestAnimationFrame(step)
}

// 点击按钮给予水平推动并触发惯性回弹
function nudge(direction: number) {
  const delta = 18 * direction
  offsetX.value = clamp(offsetX.value + delta, -maxOffset, maxOffset)
  velocityX.value = delta / 16
  velocityY.value = 0
  if (!isDragging.value) {
    const friction = 0.93
    const spring = 0.07
    const step = () => {
      velocityX.value *= friction
      offsetX.value += velocityX.value * 16
      if (offsetX.value > maxOffset) { offsetX.value = maxOffset; velocityX.value *= -0.35 }
      else if (offsetX.value < -maxOffset) { offsetX.value = -maxOffset; velocityX.value *= -0.35 }
      velocityX.value += -offsetX.value * spring
      if (Math.abs(velocityX.value) < 0.01 && Math.abs(offsetX.value) < 0.5) { offsetX.value = 0; return }
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
}
</script>

<style scoped>
</style>


