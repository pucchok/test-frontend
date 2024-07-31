<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
<template>
  <div>
    <TheHeader />
    <main class="flex-1 bg-blue-50">
      <!-- ヒーロー部分 -->
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content">
          <div class="h-48 rounded-lg shadow-2xl img-sample text-center">
            <div class="px-2 py-20">Sample Image</div>
          </div>
          <div>
            <h1 class="text-5xl font-bold">サンプル見出し</h1>
            <p class="pt-6">
              サンプルメッセージサンプルメッセージサンプルメッセージサンプルメッセージサンプルメッセージサンプルメッセージ
            </p>
            <p class='pb-6'>
              サンプルメッセージサンプルメッセージサンプルメッセージサンプルメッセージサンプルメッセージサンプルメッセージ
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <!-- カード部分 -->
      <!-- フッター部分 -->
    </main>
    <TheFooter />
  </div>
</template>
<style scoped>
.img-sample {
  background-color: blue;
}
</style>
