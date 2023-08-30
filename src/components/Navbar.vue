<script setup lang="ts">

</script>

<template>
  <nav class="w-full border-b border-zinc-600 mb-5">
    <div class="flex flex-wrap items-center justify-center mx-auto p-4">
      <ul>
        <li class="flex md:gap-40 md:text-lg font-medium">
          <router-link to="/" class="text-white px-6 py-2 rounded-lg hover:text-emerald-500 transition-colors duration-200" exact>
            Home
          </router-link>
          <router-link to="/todos" class="text-white px-6 py-2 rounded-lg hover:text-emerald-500 transition-colors duration-200" exact>
            Todos
          </router-link>
          <router-link to="/about" class="text-white px-6 py-2 rounded-lg hover:text-emerald-500 transition-colors duration-200" exact>
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>