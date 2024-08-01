<script setup lang='ts'>
import TheCard from '@/components/TheCard.vue'

const items = [
  { picture: '/images/pasta.jpg', title: 'ナポリタン', text: '料理説明サンプルメッセージ' },
  { picture: '/images/curry.jpg', title: 'カレーライス', text: '料理説明サンプルメッセージ' },
  { picture: '/images/panCake.jpg', title: 'パンケーキ', text: '料理説明サンプルメッセージ' }
]
</script>
<template>
  <section>
    <p class="text-center mb-4 text-white text-2xl font-bold">MENU</p>
    <div v-for="(item, index) in items" :key="index" class="flex flex-column justify-center">
      <TheCard :picture="item.picture" :title="item.title" :text="item.text" class="mb-6" />
    </div>
  </section>
</template>
