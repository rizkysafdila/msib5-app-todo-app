<script setup lang="ts">
// Menus
import Menus from './menus.ts'

// Icons
import { IconChevronDown } from '@tabler/icons-vue'  
import { IconMenu2 } from '@tabler/icons-vue'
</script>

<template>
  <nav class="w-full">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
      <div class="flex items-center gap-10">
        <router-link to="/" class="flex items-center gap-2.5">
          <img src="@/assets/images/logos/Logomark.svg" class="h-8" alt="GITS ID">
          <img src="@/assets/images/logos/Logotype.png" class="h-8" alt="GITS ID">
        </router-link>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:gap-x-8 md:mt-0">
            <li v-for="menu in Menus" :key="menu.name">
              <router-link :to="menu.url" class="block py-2 pl-3 pr-4 text-[#475467] rounded md:bg-transparent md:p-0">
                <span class="flex items-center gap-2">
                  {{ menu.name }}
                  <span :class="{ 'hidden' : !menu.hasSubMenu }">
                    <IconChevronDown :size="20" />
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2">
        <div class="flex gap-3">
          <router-link to="#" class="text-gray-600 font-semibold px-[18px] py-[14px] rounded-lg hover:bg-white transition-colors duration-200">
            Log in
          </router-link>
          <router-link to="#"
            class="text-white font-semibold px-[18px] py-[14px] rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
            Sign Up
          </router-link>
        </div>
        <button type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <IconMenu2 />
        </button>
      </div>
    </div>
  </nav>
</template>