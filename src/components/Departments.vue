<template>
  <!-- 部门介绍：左侧分组切换，右侧内容面板，带淡入淡出过渡 -->
  <section>
    <div class="mx-auto max-w-[1280px] px-4 sm:px-10 pt-12 md:pt-16">
      <div class="relative block w-fit">
        <div class="absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12 bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]"></div>
        <h2 class="font-smiley relative text-3xl italic">部门介绍</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6 pb-12">
        <!-- 左侧竖向分组：按钮选中高亮，未选中悬停描边 -->
        <div class="lg:col-span-1 rounded-2xl bg-white border border-gray-200 p-2">
          <div class="flex lg:flex-col gap-2">
            <button
              v-for="(tab, idx) in tabs"
              :key="tab.id"
              class="flex-1 rounded-xl px-4 py-3 text-left border transition-all lg:w-full"
              :class="activeIndex === idx ? 'bg-[#E9F2FF] border-[#8DBDFF] text-[#175DDC]' : 'bg-white border-transparent hover:border-gray-300'"
              @click="activeIndex = idx"
            >
              <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-lg flex items-center justify-center"
                     :class="activeIndex === idx ? 'bg-[#175DDC] text-white' : 'bg-gray-100 text-gray-700'">
                  {{ tab.icon }}
                </div>
                <div class="text-lg font-semibold">{{ tab.name }}</div>
              </div>
            </button>
          </div>
        </div>

        <!-- 右侧内容框（带过渡动画） -->
        <div class="lg:col-span-4 rounded-2xl border border-gray-200 bg-white p-6 relative overflow-hidden">
          <div class="absolute inset-0 pointer-events-none select-none opacity-10 bg-[radial-gradient(circle_at_20%_20%,#175DDC_0,transparent_40%)]"></div>
          <transition name="fade-slide" mode="out-in">
            <div :key="current.id" class="relative">
              <h3 class="text-xl font-semibold text-gray-900">{{ current.name }}</h3>
              <div class="mt-3 space-y-4 text-gray-700 leading-relaxed">
                <p v-for="line in current.paragraphs" :key="line">{{ line }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type Dept = { id: string; name: string; icon: string; paragraphs: string[] }

const tabs = ref<Dept[]>([
  {
    id: 'media',
    name: '新媒体组',
    icon: 'M',
    paragraphs: [
      'Hi，欢迎来到有趣灵魂聚集地新媒体组！我们是——',
      '# 生活观察员 # 在这里，与同行，与所想。我们驻守在官方新媒体平台，捕捉校园生活中的小确幸、小美好，以图文定格北邮人的独家记忆。',
    ],
  },
  {
    id: 'design',
    name: '设计组',
    icon: 'D',
    paragraphs: [
      '找一些新的人做新的。把一种设想通过合理的规划、周密的计划，通过各种方式表达出来的过程。',
      '# 坛服 # 文创 # 第二课堂',
    ],
  },
  {
    id: 'tech',
    name: '技术组',
    icon: 'T',
    paragraphs: [
      '在北邮，有这样一群人，他们专注于高性能、高体验的校内公共服务开发，为校内活动、师生便利提供技术支持。',
      '快捷方便的研效体系、敏捷健壮的基础架构、随意自在的工作氛围；我们在技术领域不断探索、挑战自我、开拓进取。心怀热忱，守正创新，技术组期待你的加入。',
    ],
  },
  {
    id: 'product',
    name: '产品运营组',
    icon: 'P',
    paragraphs: [
      '负责对产品进行定义并进行需求分析绘制使用流程图，协调整体推进项目开发进度。',
      '收集师生需求并整合资源，撰写产品需求文档等文本材料；欢迎全新的你加入我们，一起构思新的产品、策划新的活动！',
    ],
  },
])

const activeIndex = ref(2) // 默认技术组，对应截图
const current = computed(() => tabs.value[activeIndex.value])
</script>

<style scoped>
/* 部门内容切换动画 */
.fade-slide-enter-active,
.fade-slide-leave-active { transition: all 300ms ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(8px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>


