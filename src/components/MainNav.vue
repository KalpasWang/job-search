<script setup>
import { ref } from 'vue'

const websiteName = ref('Doodle Careers')
const navItems = ref(['Teams', 'Locations', 'Benefits', 'Jobs', 'Students'])
</script>

<template>
  <header class="text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-grand-gray-1 flex h-full items-center border-b border-solid px-8"
      >
        <a href="#" class="text-xl">{{ websiteName }}</a>
        <nav class="ml-12">
          <ul class="flex h-full list-none space-x-9">
            <li
              v-for="item in navItems"
              :key="item"
              data-test="nav-items"
              class="h-full"
            >
              <a href="#" class="flex h-full items-center">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
