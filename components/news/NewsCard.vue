<template>
    <article v-for="post in news" :key="post.id" class="relative isolate flex flex-col justify-end overflow-hidden max-h-[28rem] rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
        </div>
        <h3 class="mt-3 text-lg font-semibold text-left leading-6 text-white">
            <NuxtLink :to="`/news/${post.href}`">
                <span class="absolute inset-0" />
                {{ post.title }}
            </NuxtLink>
        </h3>
    </article>
</template>

<script setup>
const { news } = defineProps([`news`])
</script>