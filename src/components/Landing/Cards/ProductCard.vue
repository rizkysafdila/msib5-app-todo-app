<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Interface Product
import { IProduct } from '../../../types/product.type'

// Helper
import { rupiahCurrency } from '../../../helpers/rupiahCurrency'

const props = defineProps<{
  data: IProduct,
}>()

const priceAfterDiscount = computed(() => {
  return props.data.price * (1 - props.data.discount / 100)
});
</script>

<template>
  <div class="md:w-[222px] xl:w-[224px] flex flex-col bg-white border border-gray-200 rounded-lg">
    <router-link to="#">
      <div class="bg-gray-100 w-full flex justify-center items-center rounded-t-lg">
        <img class="rounded-t-lg" :src="`src/assets/images/products/${data.fileName}.png`" alt="Bottle" />
      </div>
    </router-link>
    <div class="p-6">
      <div class="inline-flex px-3 py-1 bg-gray-100 rounded-2xl mix-blend-multiply">
        <span class="text-gray-700 text-sm text-center font-medium">{{ data.label }}</span>
      </div>
      <div class="mt-4">
        <span class="text-gray-900 font-normal line-clamp-2">{{ data.title }}</span>
      </div>
      <div class="flex justify-between items-center mt-2">
        <span class="text-gray-900 text-xl font-semibold">{{ rupiahCurrency(priceAfterDiscount) }}</span>
        <span class="text-gray-400 text-xs text-center font-normal uppercase">{{ `${data.value}ML` }}</span>
      </div>
      <div class="flex items-center gap-2 mt-[2px]">
        <span class="text-gray-400 text-xs font-normal line-through">{{ rupiahCurrency(data.price) }}</span>
        <div class="inline-flex px-2 py-[2px] bg-red-50 rounded-2xl mix-blend-multiply">
          <span class="text-red-700 text-xs text-center font-medium">{{ `-${data.discount}%` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>