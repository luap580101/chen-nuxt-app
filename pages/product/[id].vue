<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div v-if="product" class="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">{{ product.name }}</h2>

      <div class="flex justify-center mb-6">
        <img :src="product.image" :alt="product.name" class="w-80 h-60 object-cover rounded-md" />
      </div>

      <div class="mb-4">
        <h3 class="text-xl font-semibold text-gray-700">描述</h3>
        <p class="text-gray-600">{{ product.description }}</p>
      </div>

      <div class="mb-4">
        <h3 class="text-xl font-semibold text-gray-700">價格</h3>
        <p class="text-gray-600">${{ product.price }}</p>
      </div>

      <button @click="addToCart(product)"
        class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        加入購物車
      </button>
    </div>

    <!-- 載入中顯示 -->
    <div v-else class="text-center text-gray-500">
      載入中...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getProductById } from '@/api/product'; // 引入 API 函數

const route = useRoute(); // 使用路由參數來獲取 id
const product = ref(null);

// 根據路由的 id 獲取商品資料
const fetchProduct = async () => {
  const productId = route.params.id; // 獲取商品 id
  try {
    const fetchedProduct = await getProductById(productId); // 使用 API 函數來獲取商品資料
    product.value = fetchedProduct; // 將獲取到的商品資料存入變量
  } catch (error) {
    console.error("無法獲取商品資料:", error);
  }
};

// 當頁面加載時，調用 fetchProduct 函數
onMounted(() => {
  fetchProduct();
});

// 加入購物車的函數（示範）
const addToCart = (product) => {
  console.log(`將 ${product.name} 添加到購物車`);
};
</script>

<style scoped>
/* 根據需求自定義樣式 */
</style>
