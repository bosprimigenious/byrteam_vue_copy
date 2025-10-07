<template>
  <section class="mx-auto max-w-[1280px] pt-12 px-4 sm:px-10">
    <div class="relative block w-fit">
      <div class="absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12 bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]"></div>
      <h2 class="font-smiley relative text-3xl italic">我们的产品</h2>
    </div>
    <!-- 产品总览区域：桌面端展示 9 个服务图标，点击切换下方详情 -->
    <div class="mt-3">
      <div class="flex flex-col gap-6">
        <!-- 桌面：一行 9 个图标，选中项圆圈特效 -->
        <div class="hidden lg:block relative">
          <div class="flex items-center justify-around">
          <!-- 左箭头 -->
          <button
            class="absolute -left-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-full h-9 w-9 bg-black/50 hover:bg-black/60 text-white"
            type="button"
            @click="prev()"
            aria-label="上一项"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div
            v-for="(product, index) in products"
            :key="product.id"
            class="relative cursor-pointer transition-transform duration-300"
            role="button"
            :title="product.name"
            @click="select(index)"
          >
            <!-- 图片稍微缩小，增强圈圈对比度 -->
            <img :src="product.image" :alt="product.name" :width="index === selectedIndex ? 110 : 60" class="select-none object-contain" :class="index === selectedIndex ? 'scale-120' : 'scale-100'" />
            <svg
              v-if="index === selectedIndex"
              width="150"
              height="140"
              viewBox="0 0 117 104"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[calc(50%+6px)] top-[calc(50%+8px)] -translate-x-1/2 -translate-y-1/2 animate-[pulse_1200ms_ease-out] scale-100 sm:scale-110"
              fill="none"
            >
              <path
                d="M113.758 47.7575C100.925 67.2575 72.799 105.113 32.2585 86.2575C-10.7416 66.2579 -6.16411 7.76068 44.796 3.26009C101.575 -1.7544 115.259 46.7575 97.7588 71.7575C80.2588 96.7575 65.298 103.758 32.2585 100.257"
                stroke="#0067D1"
                stroke-width="6"
                stroke-linecap="round"
                fill="none"
                pathLength="1"
                stroke-dashoffset="1"
                stroke-dasharray="1"
                class="animate-[draw_700ms_ease-out_forwards]"
              />
            </svg>
          </div>
          <!-- 右箭头 -->
          <button
            class="absolute -right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-full h-9 w-9 bg-black/50 hover:bg-black/60 text-white"
            type="button"
            @click="next()"
            aria-label="下一项"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          </div>
        </div>

        <!-- 移动端：横向滑动选择（非轮播），选中项显示路径描边动画 -->
        <div class="relative flex items-center lg:hidden">
          <div class="w-full overflow-hidden">
            <div class="flex touch-pan-y gap-4">
              <div
                v-for="(product, index) in products"
                :key="product.id + '-m'"
                class="relative flex min-w-0 flex-[0_0_20%] items-center justify-center py-4 pt-3"
              >
                <div class="relative h-fit w-fit cursor-pointer transition-transform duration-300" role="button" :title="product.name" @click="select(index)">
                  <img :src="product.image" :alt="product.name" width="88" class="select-none object-contain" :class="index === selectedIndex ? 'scale-110' : 'scale-100'" />
                  <svg
                    v-if="index === selectedIndex"
                    width="150"
                    height="140"
                    viewBox="0 0 117 104"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-[calc(50%+6px)] top-[calc(50%+8px)] -translate-x-1/2 -translate-y-1/2 animate-[pulse_1200ms_ease-out] scale-100 sm:scale-110"
                    fill="none"
                  >
                    <path
                      d="M113.758 47.7575C100.925 67.2575 72.799 105.113 32.2585 86.2575C-10.7416 66.2579 -6.16411 7.76068 44.796 3.26009C101.575 -1.7544 115.259 46.7575 97.7588 71.7575C80.2588 96.7575 65.298 103.758 32.2585 100.257"
                      stroke="#0067D1"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                      pathLength="1"
                      stroke-dashoffset="1"
                      stroke-dasharray="1"
                      class="animate-[draw_700ms_ease-out_forwards]"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 详情面板：保持透明以继承页面灰底，仅保留边框与阴影 -->
        <div class="rounded-[18px] px-6 py-4 border border-gray-200 shadow-sm bg-transparent">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between">
              <h3 class="inline-flex w-fit flex-col items-center text-2xl">
                <a :href="current.link" target="_blank" rel="noopener noreferrer">{{ current.name }}</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="163" height="19" fill="none" viewBox="0 0 163 19">
                  <g fill="#0067D1" clip-path="url(#clip0_228_954)">
                    <path d="M3.537 7.73c1.276 0 2.613-.08 3.889-.16.547 0 1.033-.08 1.58-.08l6.928-.484c2.795-.161 5.53-.403 8.325-.564 3.95-.322 7.9-.563 11.85-.886.912-.08 1.824-.08 2.735-.16 2.31-.162 4.62-.323 6.928-.403 2.31-.161 4.62-.322 6.928-.403.912-.08 1.823-.16 2.735-.16 3.646-.162 7.353-.323 11-.484 2.248-.08 4.497-.161 6.806-.322.912 0 1.762-.08 2.674-.08l10.635-.242c3.525-.08 6.989-.161 10.513-.242h9.663c3.585 0 7.11 0 10.696-.08h11.364c-5.47.08-11 .16-16.469.322-2.309.08-4.558.08-6.867.16-.973 0-2.006 0-2.978.081-3.343.08-6.624.242-9.966.322-3.83.161-7.658.242-11.486.403-.669 0-1.276.08-1.945.08-2.066.162-4.072.242-6.138.403l-12.397.725c-.608 0-1.216.08-1.823.161-2.006.161-4.072.403-6.077.564-3.647.322-7.232.644-10.878.966-.973.08-2.006.242-2.978.322-2.31.242-4.619.483-6.928.805-2.917.323-5.895.645-8.812.967-4.072.483-8.204.966-12.276 1.45-.972.08-1.944.24-2.978.321l-5.287.725c-.182 0-.364.161-.364.483 0 .242.182.483.364.483.669 0 1.277.081 1.945.081-.121.403-.182.644-.182.886 0 .886.547 1.691 1.276 1.691 5.044-.403 10.027-.886 15.071-1.208 4.376-.242 8.751-.564 13.127-.805 4.8-.322 9.662-.645 14.463-.886 1.52-.08 3.039-.161 4.558-.322.425 0 .85-.08 1.337-.08 7.779-.242 15.558-.564 23.336-.806 4.133-.161 8.326-.322 12.458-.403 1.52-.08 2.978-.08 4.497-.16l23.883-.484 10.21-.241c2.917-.081 5.834-.081 8.751-.242 2.431-.08 4.801-.242 7.232-.322 1.215-.08 2.431-.08 3.585-.161l8.204-.725c-.182.322-.182.805-.121 1.127.061.403.243.725.547.886.243.161.608.322.851.161.607-.322 1.215-.644 1.762-.966h-.061c.061 0 .061-.08.122-.08s.121-.081.121-.081h-.061c.304-.161.608-.322.973-.564.304-.16.668-.402.972-.563.365-.242.669-.484 1.033-.725.365-.242.608-.886.608-1.45 0-.322-.061-.563-.182-.886-.122-.322-.426-.724-.73-.805-.303-.08-.607-.16-.911-.16h-.182c-.183 0-.426 0-.608.08-.486.08-.912.16-1.398.16-.365 0-.729.081-1.155.081-1.033.08-2.005.161-3.038.322-.243 0-.547.08-.79.08a.803.803 0 0 0 .182-.482c.061-.161.061-.322.061-.484 0-.08 0-.241.061-.322 0-.16 0-.322-.061-.402 0 0 .061 0 .061-.08.182-.162.364-.323.486-.645.121-.242.182-.564.182-.886 0-.322-.061-.564-.182-.886-.061-.08-.122-.241-.182-.322-.183-.241-.365-.322-.547-.402A3.047 3.047 0 0 0 152.851 0h-19.872c-6.259 0-12.458.08-18.717.161-4.68.08-9.359.161-14.039.161-2.066 0-4.193.08-6.259.161-4.68.161-9.359.242-14.038.403-1.337 0-2.674.08-4.011.08-.79 0-1.52.08-2.31.08l-13.855.726c-1.398.08-2.796.16-4.254.241-.79 0-1.58.08-2.37.161-4.619.322-9.177.644-13.795.967-2.37.16-4.74.322-7.11.563-4.072.322-8.144.645-12.155 1.047-3.524.322-7.05.564-10.574.805-.547.081-1.094.081-1.702.162-.911.08-1.823.08-2.734.16-.79.323-1.641.323-2.431.323-.06-.322-.304-.564-.486-.483-.547 0-1.033.08-1.58.16-.243.081-.486.242-.547.564-.061.403.121.806.364.886l.73.242c.243.08.425.08.668.08.608.08 1.155.08 1.763.08Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_228_954">
                      <path fill="#fff" d="M0 0h163v19H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </h3>
              <a class="cursor-pointer p-2 text-[#0067D1]" :href="current.link" target="_blank" rel="noreferrer noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.585 1.073H14.73v12.145m-.844-11.302L1.573 14.23" />
                </svg>
              </a>
            </div>
            <div class="text-[#0067D1] opacity-80">{{ current.quote }}</div>
            <article class="text-lg leading-[180%] [&>p]:indent-8">
              <p>{{ current.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type Product = {
  id: string
  name: string
  description: string
  quote: string
  link: string
  image: string
}

const products = ref<Product[]>([
  {
    id: 'byrbbs',
    name: '北邮人论坛',
    quote: '“北邮人共同的精神原乡 对一代又一代的北邮人而言 既是逗号 也是起点”',
    description:
      '作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛。建站于2003年9月26日，它是北邮人的温馨家园，支持网页和 App 访问。超过 90% 的同学使用北邮人论坛获取信息。',
    link: 'https://bbs.byr.cn/',
    image: '/byr/service-byrbbs.d125dc0f.png',
  },
  {
    id: 'dekt',
    name: '北邮第二课堂',
    quote: '“我们致力于保障师生参加活动的体验”',
    description:
      '北邮第二课堂主要通过活动申请、管理、发布、报名、签到、评价等功能记录学生在第一课堂之外的活动，对学生综合素质进行评定，生成用户画像帮助同学们正确了解自身优势、弥补自身不足，并为学校决策提供科学依据。',
    link: 'https://dekt.bupt.edu.cn/qr?f=mp',
    image: '/byr/service-dekt.a550b8f4.png',
  },
  {
    id: 'neticu',
    name: '校园网指南',
    quote: '“校园网使用指南和诊断平台重磅上线！”',
    description:
      '校园网该怎么连？mobile 和 portal 有什么区别？不在校内又该怎么访问校内网站？游戏延迟为什么这么高？不是吧，怎么网又炸了！校内诊断平台链接：link。',
    link: 'https://wiki.buptnet.icu/',
    image: '/byr/service-neticu-wiki.2e669d83.png',
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    quote: '“自从用了 bitwarden，我再也不需要记密码了！”',
    description:
      'Bitwarden 是一款自由且开源的密码管理服务，用户可在加密的保管库中存储敏感信息。Bitwarden 平台提供多种客户端应用，包含网页用户界面、桌面应用、浏览器扩展、移动应用以及命令行界面；提供云端托管服务，并支持自行部署解决方案。',
    link: 'https://bitwarden.byrio.work/',
    image: '/byr/service-bitwarden.e52b196f.png',
  },
  {
    id: 'byrio',
    name: 'Byrio社区',
    quote: '“FOR HACKER, GEEK & CREATOR LIKE YOU”',
    description:
      'BYRIOSC 是一个围绕互联网技术与开源文化的学生社区，主题涵盖科技、开发、设计、媒体。由开发者和创意工作者组成的线上交流、线下活动组织。我们吸引富有热情和兴趣的开发者、创造者加入，凝聚北邮各大学生技术组织的力量，建设最富活力与创造力的学生技术社区。',
    link: 'https://byrio.org/',
    image: '/byr/service-byrio.ecf0b2f3.png',
  },
  {
    id: 'gitlab',
    name: 'Gitlab',
    quote: '“CI/CD真是太好用了.jpg”',
    description:
      'GitLab 是由 GitLab 公司开发的，基于 Git 的集成软件开发平台。它具有 wiki 以及在线编辑、issue 跟踪功能、CI/CD 等功能。',
    link: 'https://git.byr.moe/',
    image: '/byr/service-gitlab.86891528.png',
  },
  {
    id: 'mirrors',
    name: '开源镜像服务',
    quote: '“一个字：快！”',
    description:
      '当你还在为 pip install、go add、cargo build、npm install 发愁的时候，可以使用这个。',
    link: 'https://mirrors.byr.ink/',
    image: '/byr/service-mirrors.2af06fce.png',
  },
  {
    id: 'overleaf',
    name: 'Overleaf',
    quote: '“科研必备”',
    description:
      'Overleaf 是一个云端协作式 LaTeX 编辑器，可用于编写与发布论文。该编辑器与很多科学杂志出版社有合作关系，不但提供官方期刊的 LaTeX 模板，还能直接将文件提交至这些出版社。',
    link: 'https://overleaf.byrio.work/',
    image: '/byr/service-overleaf.88b2d9be.png',
  },
  {
    id: 'efficiency',
    name: '研效体系',
    quote: '“自动化部署什么的真是太酷了！”',
    description:
      '我们拥有比肩大厂的研效体系，blazing fast 的 CI/CD 流程，超丝滑的 docker 部署方案。',
    link: '#',
    image: '/byr/service-efficiency.aefa9fc4.png',
  },
])

const selectedIndex = ref(0)
const current = computed(() => products.value[selectedIndex.value])
function select(index: number) {
  selectedIndex.value = index
}
function prev() {
  selectedIndex.value = (selectedIndex.value - 1 + products.value.length) % products.value.length
}
function next() {
  selectedIndex.value = (selectedIndex.value + 1) % products.value.length
}
</script>

<style scoped>
</style>


