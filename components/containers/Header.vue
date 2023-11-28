<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <NuxtLink href="/" class="-m-1.5 p-1.5 text-xl text-gray-900 font-semibold">
                    Türkmenistanyň Milli Baýramçylyklary
                </NuxtLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <PhosphorIconDotsThreeVertical size="28" class="text-gray-900 font-semibold" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <NuxtLink to="/about" class="text-sm font-semibold leading-6 text-gray-900">Biz Barada</NuxtLink>
                <NuxtLink to="/holidays" class="text-sm font-semibold leading-6 text-gray-900">Baýramçylyklaryň Sanawy</NuxtLink>
                <NuxtLink to="/news" class="text-sm font-semibold leading-6 text-gray-900">Habarlar</NuxtLink>
                <NuxtLink to="/contact" class="text-sm font-semibold leading-6 text-gray-900">Habarlaşmak</NuxtLink>
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <NuxtLink href="/" class="-m-1.5 p-1.5 text-lg text-gray-900 font-semibold">
                        Türkmenistanyň Milli Baýramçylyklary
                    </NuxtLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <PhosphorIconX size="28" class="text-gray-900 font-semibold" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <NuxtLink to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Biz Barada</NuxtLink>
                            <NuxtLink to="/holidays" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Baýramçylyklaryň Sanawy</NuxtLink>
                            <NuxtLink to="/news" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Habarlar</NuxtLink>
                            <NuxtLink to="/contact" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Habarlaşmak</NuxtLink>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue'

const mobileMenuOpen = ref(false)
</script>