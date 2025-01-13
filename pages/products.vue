<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">商品列表</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const products = ref([
  {
    id: 1,
    name: '商品 1',
    description: '這是商品 1 的描述，這是一個非常好的商品。',
    price: 29.99,
    image: 'https://fakeimg.pl/400x300/',
    quantity: 1,
  },
  {
    id: 2,
    name: '商品 2',
    description: '這是商品 2 的描述，這是一個非常好的商品。',
    price: 39.99,
    image: 'https://fakeimg.pl/400x300/',
    quantity: 1,
  },
  {
    id: 3,
    name: '商品 3',
    description: '這是商品 3 的描述，這是一個非常好的商品。',
    price: 19.99,
    image: 'https://fakeimg.pl/400x300/',
    quantity: 1,
  },
]);

const addToCart = (product) => {
  // 處理加入購物車邏輯
  console.log(`將 ${product.name} 添加到購物車，數量: ${product.quantity}`);
  // 這裡可以繼續使用 localStorage 或 Vuex/Pinia 來處理購物車
};
</script>

<style scoped>
/* 可以根據需求進行樣式定制 */
</style>
