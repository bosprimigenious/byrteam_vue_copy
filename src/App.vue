<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Products from './components/Products.vue'
import Reasons from './components/Reasons.vue'
import Departments from './components/Departments.vue'
import Testimonials from './components/Testimonials.vue'
import Recruitment from './components/Recruitment.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-900">
    <Navbar />
    <main class="flex-1">
      <Hero />
      <About />
      <Products />
      <Departments />
      <Reasons />
      <Testimonials />
      <Recruitment />
    </main>
    <Footer />
  </div>
  
</template>
