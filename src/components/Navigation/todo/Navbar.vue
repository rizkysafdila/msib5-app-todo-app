<script setup lang="ts">
// Menu
import menuItems from './menus'
</script>

<template>
  <nav class="w-full border-b border-zinc-600 mb-5">
    <div class="flex flex-wrap items-center justify-center mx-auto p-4">
      <ul>
        <li class="flex md:gap-40 md:text-lg font-medium">
          <div class="py-2" v-for="menu in menuItems">
            <router-link :to="menu.url"
              class="text-white px-6 py-2 rounded-lg hover:text-emerald-500 transition-colors duration-200" active-class="link-active">
              <span>{{ menu.name }}</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>