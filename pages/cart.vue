<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">我的購物車</h1>

      <div v-if="cart.length > 0" class="space-y-6">
        <div v-for="item in cart" :key="item.id"
          class="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-gray-600">數量: {{ item.quantity }}</p>
            <p class="text-gray-600">價格: ${{ item.price * item.quantity }}</p>
          </div>
        </div>

        <!-- 可以在這裡加入結帳或其他購物車操作 -->
      </div>
      <div v-else>
        <p class="text-center text-gray-500">您的購物車是空的。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cart = ref([]);

onMounted(() => {
  // 從 localStorage 讀取購物車資料
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.value = storedCart;
});
</script>

<style scoped>
/* 可根據需求進行樣式定制 */
</style>
