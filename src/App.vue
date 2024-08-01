<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheContents from '@/components/TheContents.vue'
</script>
<template>
  <div class='flex flex-col'>
    <TheHeader class='sticky top-0'/>
    <TheContents class='flex-grow' />
    <TheFooter class='sticky bottom-0'/>
  </div>
</template>
<style scoped>

</style>
