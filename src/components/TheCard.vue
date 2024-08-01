<script setup lang="ts">
interface Props {
  picture: string
  title: string
  text: string
}

const getImageUrl = (fileName: string) => {
  return new URL(`../assets/images/${fileName}.png`, import.meta.url).href
}

const props = defineProps<Props>()
</script>
<template>
  <div class="card card-compact bg-base-100 w-80 shadow-xl card-bordered static">
    <figure>
      <img :src="getImageUrl(props.picture)" alt="dishes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>
