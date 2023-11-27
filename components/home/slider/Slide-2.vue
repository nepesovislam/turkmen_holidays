<template>
    <section class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
                <div class="border-b border-gray-200 pb-10">
                    <h2 class="font-medium text-gray-500">12-nji Dekabr</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Halkara Bitaraplyk güni </p>
                </div>

                <dl class="mt-10 space-y-10">
                    <div v-for="feature in features" :key="feature.name">
                        <dt class="text-sm font-medium text-gray-900">{{ feature.name }}</dt>
                        <dd class="mt-3 text-sm text-gray-500">{{ feature.description }}</dd>
                    </div>
                </dl>
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
      name: 'Sleek design',
      description:
        'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
    },
    { name: 'Comfort handle', description: 'Shaped for steady pours and insulated to prevent burns.' },
    {
      name: 'One-button control',
      description:
        'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
    },
    { name: 'Long spout', description: "Designed specifically for controlled pour-overs that don't slash or sputter." },
  ]
</script>