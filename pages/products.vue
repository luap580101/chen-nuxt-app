<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="flex justify-between items-end">
        <div></div>
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">商品列表1</h1>
        <NuxtLink to="/cart" class="flex text-sm text-gray-800 mb-8 cursor-pointer">前往購物車</NuxtLink>
      </div>

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
  // 從 localStorage 獲取現有購物車內容，若沒有則初始化為空陣列
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // 檢查商品是否已經在購物車中
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    // 如果商品已經在購物車中，更新數量
    existingProduct.quantity += product.quantity;
  } else {
    // 如果商品不在購物車中，新增商品
    cart.push({ ...product });
  }

  // 將更新後的購物車儲存回 localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // 在控制台顯示成功信息
  console.log(`將 ${product.name} 添加到購物車，數量: ${product.quantity}`);
};
</script>

<style scoped>
/* 可以根據需求進行樣式定制 */
</style>
