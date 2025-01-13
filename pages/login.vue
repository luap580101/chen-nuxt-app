<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">登入</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">電子郵件</label>
          <input id="email" type="email" v-model="email" required
            class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="請輸入電子郵件" />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">密碼</label>
          <input id="password" type="password" v-model="password" required
            class="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="請輸入密碼" />
        </div>
        <button type="submit"
          class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          登入
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        還沒有帳號嗎？ <a href="/signup" class="text-blue-500 hover:text-blue-700">註冊</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const submitLogin = () => {
  // 處理登入邏輯
  console.log('登入資訊:', email.value, password.value);
  window.alert(`歡迎", ${email.value}, "使用者`)
};
</script>

<style scoped>
/* 可以根據需求自定義樣式 */
</style>
