<template>
    <section class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
                <div class="border-b border-gray-200 pb-8">
                    <p class="font-medium text-gray-500">Indiki Dynç alyş</p>
                    <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Halkara Bitaraplyk güni </h2>
                    <p class="font-bold text-gray-900">12-nji Dekabr</p>
                </div>

                <dl class="mt-8 space-y-6">
                    <div v-for="feature in features" :key="feature.name">
                        <dt class="text-sm font-medium text-gray-900">{{ feature.name }}</dt>
                        <dd class="mt-3 text-sm text-gray-500">{{ feature.description }}</dd>
                    </div>
                </dl>

                <div class="mt-2">
                    <div class="mt-4 flex justify-center">
                        <NuxtLink to="#" class="text-sm font-medium text-gray-900">Doly Okamak<span class="ml-0.5" aria-hidden="true">→</span></NuxtLink>
                    </div>
                </div>
            </div>

            <div>
                <div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <img src="images/home-2.jpeg" alt="Bitaraplyk Bayramy" class="h-full w-full object-cover object-center" />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
  const features = [
    {
        name: 'История и Значение',
        description: 'День Нейтралитета, учрежденный в 1995 году и отмечаемый 12 декабря, стал важным этапом в истории Туркменистана, подчеркивая стремление страны к установлению мира, стабильности и нейтралитета в мировых конфликтах.',
    },
    { 
        name: 'Мероприятия и Традиции', 
        description: 'В этот день проводятся разнообразные торжественные мероприятия, включая парады, церемонии, выставки и культурные события, которые подчеркивают национальную гордость и посвящены демонстрации достижений и ценностей нейтралитета.' 
    },
    { 
        name: 'Символ Нейтралитета в Современном Мире', 
        description: "Этот день становится важным символом в современном мире, выражающим принципы нейтралитета, которые играют важную роль в обеспечении стабильности и мира, а также служат примером для международного сообщества." 
    },
  ]
</script>