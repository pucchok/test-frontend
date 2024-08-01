<script setup lang="ts">
import TheContact from '@/components/TheContact.vue'
import TheMenu from '@/components/TheMenu.vue'
import TheHero from '@/components/TheHero.vue'
</script>
<template>
  <!-- フルスクリーン部分 -->
  <TheHero />

  <!-- メニューの表示部分 -->
  <TheMenu />

  <!-- 連絡先の表示部分 -->
  <TheContact />
</template>
<style scoped>
.anton-regular {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
