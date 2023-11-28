<template>
    <section class="py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Habarlar</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Свежие события, традиции и радости: праздники, культура Туркменистана.</p>
            </div>
            <div class="mx-auto mt-4 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <NewsCard :news="news"/>
            </div>
        </div>
    </section>
</template>
  
<script setup>
const news = [
{
        id: 1,
        title: 'Berlinde Magtymguly Pyragynyň nemes dilindäki goşgular ýygyndysynyň tanyşdyrylyşy bolar',
        href: '1',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://turkmenportal.com/images/uploads/cache/blogs/ec439464f36586b8e6336c14e1642880-8955028-382x254-2.webp',
        date: '27.11.2023',
        datetime: '2023-11-27',
    },
    {
        id: 2,
        title: 'Garaşsyzlygyň 32 ýyllygy mynasybetli, medeniýet ulgamynyň işgärlerini sylaglamak dabarasy bolar',
        href: '2',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://turkmenportal.com/images/uploads/cache/blogs/3fb5b01fbaf7b1e59fc381cca69c7cc7-8948237-382x254-2.webp',
        date: '23.09.2023',
        datetime: '2023-09-23',
    },
    {
        id: 3,
        title: 'Türkmenistanyň Döwlet muzeýinde Garaşsyzlyk gününe bagyşlanan sergi açyldy',
        href: '3',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://turkmenportal.com/images/uploads/cache/blogs/3ef022c889867f975c0cc79219a0886a-8948071-382x254-2.webp',
        date: '21.09.2023',
        datetime: '2023-09-21',
    },
]
</script>