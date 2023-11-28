<template>
    <section class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-3xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Habarlar
                </h2>
            </div>
            <div class="mx-auto border-t border-gray-200 mt-4 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '1',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 5,
        title: 'Boost your conversion rate',
        href: '2',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 6,
        title: 'Boost your conversion rate',
        href: '3',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },

    {
        id: 7,
        title: 'Boost your conversion rate',
        href: '1',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 8,
        title: 'Boost your conversion rate',
        href: '2',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    {
        id: 9,
        title: 'Boost your conversion rate',
        href: '3',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    
]
</script>