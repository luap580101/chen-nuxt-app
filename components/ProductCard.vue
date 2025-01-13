<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h2 class="text-xl font-semibold text-gray-800">{{ product.name }}</h2>
      <p class="text-gray-600 mt-2">{{ product.description }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-lg font-bold text-gray-900">${{ product.price }}</span>
        <div class="flex items-center space-x-2">
          <input type="number" v-model="product.quantity" min="1"
            class="w-16 p-2 border border-gray-300 rounded-md text-center" />
          <button @click="addToCart" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

// 使用 defineEmits 來定義 emit
const emit = defineEmits();

// 添加商品到購物車
const addToCart = () => {
  // 使用 emit 來觸發父組件事件
  emit('add-to-cart', props.product);
};
</script>

<style scoped>
/* 可根據需要添加樣式 */
</style>
