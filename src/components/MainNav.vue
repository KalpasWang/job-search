<script setup>
import { ref } from 'vue'

const websiteName = ref('Doodle Careers')
const navItems = ref(['Teams', 'Locations', 'Benefits', 'Jobs', 'Students'])
</script>

<template>
  <header class="text-sm">
    <div class="fixed left-0 top-0 w-full h-16 bg-white">
      <div
        class="flex items-center h-full px-8 border-b border-solid border-grand-gray-1"
      >
        <a href="#" class="text-xl">{{ websiteName }}</a>
        <nav class="ml-12">
          <ul class="flex space-x-9 h-full list-none">
            <li
              v-for="item in navItems"
              :key="item"
              data-test="nav-items"
              class="h-full"
            >
              <a href="#" class="flex items-center h-full">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
