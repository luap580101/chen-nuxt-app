<template>

  <div class="flex flex-col min-h-screen item-center justify-center">
    <div v-if="channel" class="w-full flex items-center justify-center">
      <div class="flex flex-col w-[300px] rounded-2xl overflow-hidden hover:translate-y-[-10px] duration-300">
        <img :src="channel.image" :alt="channel.name" class="w-full h-32 object-cover" />
        <div class="flex flex-col pt-6 pb-2 px-4 bg-white">
          <h2 class="flex text-xl items-center justify-center pb-4">{{ channel.name }}</h2>
          <div class="flex text-gray-400 text-sm">{{ channel.description }}</div>
        </div>
        <div @click="connectUser"
          class="flex px-12 py-2 text-xs text-white bg-[#007bff] hover:bg-[#0056b3] items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out">
          聯絡我</div>

      </div>

    </div>
  </div>
</template>
<script setup>
import { getChannelById } from "@/api/channel"
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"

const router = useRoute()
const channel = ref(null);

const fetchChannel = async () => {
  const channelId = router.params.uid;
  try {
    const fetchedChannel = await getChannelById(channelId)
    channel.value = fetchedChannel
  } catch (e) {
    console.error("失敗", e)
  }

}

const connectUser = () => {
  const userId = router.params.uid
  window.alert(`正在幫你聯繫 ${userId} 使用者`)
}


onMounted(() => {
  fetchChannel()
})

</script>