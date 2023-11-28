<template>
    <ul role="list" class="divide-y divide-gray-100">
        <li v-for="holiday in holidays" :key="holiday.id" class="flex items-center justify-between gap-x-6 py-5">
            <div class="min-w-0">
                <div class="flex items-start gap-x-3">
                    <p class="text-md font-semibold leading-6 text-gray-900">{{ holiday.name }}</p>
                </div>
                <div class="mt-1 flex items-center gap-x-2 text-sm leading-5 text-gray-500">
                    <p>Bellenilýän senesi</p>
                    <svg viewBox="0 0 2 2" class="h-1 w-1 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <strong>
                        <time :datetime="holiday.dueDateTime">
                            {{ holiday.dueDate }}
                        </time>
                    </strong>
                </div>
            </div>
            <div class="flex flex-none items-center gap-x-4">
                <NuxtLink :to="`/holidays/${holiday.href}`" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                    View holiday
                    <span class="sr-only">, {{ holiday.name }}</span>
                </NuxtLink>
            </div>
        </li>
    </ul>
</template>

<script setup>
const { holidays } = defineProps([`holidays`])
</script>