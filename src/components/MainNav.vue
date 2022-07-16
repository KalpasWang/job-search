<script setup>
import { ref } from 'vue'

const websiteName = ref('Doodle Careers')
</script>

<template>
  <header class="text-sm">
    <div class="fixed left-0 top-0 w-full h-16 bg-white">
      <div
        class="flex items-center h-full px-8 border-b border-solid border-grand-gray-1"
      >
        <a href="#" class="text-xl">{{ websiteName }}</a>
      </div>
      <nav class=""></nav>
    </div>
  </header>
</template>
