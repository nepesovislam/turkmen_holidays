<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dynç alyş, baýramçylyk we hatyra günleri</h2>
      </div>
      <div class="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none">
        <h2 class="text-lg font-semibold leading-6 text-gray-900">
          Türkmenistanyň Zähmet kodeksiniň 81-nji maddasynyň birinji böleginiň rejelenen görnüşine laýyklykda, şu ählihalk baýramçylyk we hatyra günlerinde kärhanalarda, guramalarda we edaralarda işlenilmeýär: 
        </h2>
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
              <NuxtLink :to="holiday.href" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                View holiday
                <span class="sr-only">, {{ holiday.name }}</span>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
      <div class="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none">
        <h2 class="text-lg font-semibold leading-6 text-gray-900">
          Türkmenistanyň Zähmet kodeksiniň 81-nji maddasynyň birinji böleginiň rejelenen görnüşine laýyklykda, şu ählihalk baýramçylyk we hatyra günlerinde kärhanalarda, guramalarda we edaralarda işlenilmeýär: 
        </h2>
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="graduate in graduations" :key="graduate.id" class="flex items-center justify-between gap-x-6 py-5">
            <div class="min-w-0">
              <div class="flex items-start gap-x-3">
                <p class="text-md font-semibold leading-6 text-gray-900">{{ graduate.name }}</p>
              </div>
              <div class="mt-1 flex items-center gap-x-2 text-sm leading-5 text-gray-500">
                <p>Bellenilýän senesi</p>
                <svg viewBox="0 0 2 2" class="h-1 w-1 fill-current">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <strong>
                  <time :datetime="graduate.dueDateTime">
                    {{ graduate.dueDate }}
                  </time>
                </strong>
              </div>
            </div>
            <div class="flex flex-none items-center gap-x-4">
              <NuxtLink :to="graduate.href" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
                View graduate
                <span class="sr-only">, {{ graduate.name }}</span>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
      <div class="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-10 lg:mx-0 lg:max-w-none">
        <h2 class="text-lg font-semibold leading-6 text-gray-900">
          Şu Permanyň 1-nji bölüminde görkezilen baýramçylyk gününiň biriniň senesi beýleki bir baýramçylyk gününiň senesi bilen gabat gelen halatynda, Türkmenistanyň Prezidentiniň namasy bilen baýramçylygyň biriniň bellenilmegi başga güne geçirilip bilner.
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const holidays = [
  {
    id: 1,
    name: 'Täze ýyl',
    href: '#',
    dueDate: '1-nji ýanwar',
    dueDateTime: '2023-03-17T00:00Z',
  },
  {
    id: 2,
    name: 'Halkara zenanlar güni',
    href: '#',
    dueDate: '8-nji mart',
    dueDateTime: '2023-05-05T00:00Z',
  },
  {
    id: 3,
    name: 'Milli bahar baýramy',
    href: '#',
    dueDate: '21-22-nji mart',
    dueDateTime: '2023-05-25T00:00Z',
  },
  {
    id: 4,
    name: 'Türkmenistanyň Konstitusiýasynyň we Türkmenistanyň Döwlet baýdagynyň güni',
    href: '#',
    dueDate: '18-nji maý',
    dueDateTime: '2023-06-07T00:00Z',
  },
  {
    id: 5,
    name: 'Türkmenistanyň Garaşsyzlyk güni',
    href: '#',
    dueDate: '27-nji sentýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 6,
    name: 'Hatyra güni',
    href: '#',
    dueDate: '6-njy oktýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 7,
    name: 'Halkara Bitaraplyk güni',
    href: '#',
    dueDate: '12-nji dekabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 8,
    name: 'Gurban baýramy',
    href: '#',
    dueDate: 'Gurban baýramynyň anyk senesi her ýyl Türkmenistanyň Prezidentiniň Permany bilen kesgitlenilýär',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 9,
    name: 'Oraza baýramy',
    href: '#',
    dueDate: 'Oraza baýramynyň anyk senesi her ýyl Türkmenistanyň Prezidentiniň Permany bilen kesgitlenilýär.',
    dueDateTime: '2023-06-10T00:00Z',
  },
]

const graduations = [
  {
    id: 1,
    name: 'Watan goragçylarynyň güni',
    href: '#',
    dueDate: '27-nji ýanwar',
    dueDateTime: '2023-03-17T00:00Z',
  },
  {
    id: 2,
    name: 'Türkmenistanyň diplomatik işgärleriniň güni',
    href: '#',
    dueDate: '18-nji fewral',
    dueDateTime: '2023-05-05T00:00Z',
  },
  {
    id: 3,
    name: 'Ulaglar we aragatnaşyk toplumynyň işgärleriniň güni',
    href: '#',
    dueDate: '7-nji mart',
    dueDateTime: '2023-05-25T00:00Z',
  },
  {
    id: 4,
    name: 'Himiýa senagatynyň işgärleriniň güni',
    href: '#',
    dueDate: '31-nji mart',
    dueDateTime: '2023-06-07T00:00Z',
  },
  {
    id: 5,
    name: 'Bütindünýä saglyk güni',
    href: '#',
    dueDate: '7-nji aprel',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 6,
    name: 'Türkmenistanyň Migrasiýa edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '17-nji aprel',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 7,
    name: 'Türkmen bedewiniň baýramy',
    href: '#',
    dueDate: 'Aprel aýynyň soňky ýekşenbesi',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 8,
    name: '1941–1945-nji ýyllaryň Beýik Watançylyk urşunda Ýeňiş güni',
    href: '#',
    dueDate: '9-njy maý',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 9,
    name: 'Aşgabat şäheriniň güni',
    href: '#',
    dueDate: '25-nji maý',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 10,
    name: 'Türkmenistanyň içeri işler edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '29-njy maý',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 11,
    name: 'Türkmen halysynyň baýramy',
    href: '#',
    dueDate: 'Maý aýynyň soňky ýekşenbesi',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 12,
    name: 'Çagalary goramagyň halkara güni',
    href: '#',
    dueDate: '1-nji iýun',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 13,
    name: 'Daşky gurşawy goramagyň bütindünýä güni',
    href: '#',
    dueDate: '5-nji iýun',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 14,
    name: 'Dokma senagatynyň işgärleriniň güni',
    href: '#',
    dueDate: 'Iýun aýynyň birinji ýekşenbesi',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 15,
    name: 'Ylymlar güni',
    href: '#',
    dueDate: '12-nji iýun',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 16,
    name: 'Türkmenistanyň Adalat edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '18-nji iýun',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 17,
    name: 'Türkmenistanyň Prokuratura edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '26-nji iýun',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 18,
    name: 'Medeniýet we sungat işgärleriniň hem-de Magtymguly Pyragynyň şygryýet güni',
    href: '#',
    dueDate: '27-nji iýun',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 19,
    name: 'Türkmenistanyň Kazyýet edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '5-nji iýul',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 20,
    name: 'Saglygy goraýyş we derman senagaty işgärleriniň güni',
    href: '#',
    dueDate: '21-nji iýul',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 21,
    name: 'Serhetçiler güni',
    href: '#',
    dueDate: '11-nji awgust',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 22,
    name: 'Bilimler we talyp ýaşlar güni',
    href: '#',
    dueDate: '1-nji sentýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 23,
    name: 'Energetika senagatynyň işgärleriniň güni',
    href: '#',
    dueDate: 'Sentýabr aýynyň ikinji şenbesi',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 24,
    name: 'Türkmenistanyň Milli howpsuzlyk edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '30-njy sentýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 25,
    name: 'Ýaşulularyň halkara güni',
    href: '#',
    dueDate: '1-nji oktýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 26,
    name: 'Türkmenistanyň Harby-Deňiz Güýçleriniň güni',
    href: '#',
    dueDate: '9-njy oktýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 27,
    name: 'Türkmenistanyň Gümrük edaralarynyň işgärleriniň güni',
    href: '#',
    dueDate: '4-nji noýabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 28,
    name: 'Hasyl toýy',
    href: '#',
    dueDate: 'Noýabr aýynyň ikinji ýekşenbesi',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 29,
    name: 'Nebitgaz senagaty we geologiýa işgärleriniň güni',
    href: '#',
    dueDate: '14-nji dekabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
  {
    id: 30,
    name: 'Türkmenistanyň ilkinji Prezidenti S.A.Nyýazowy (Beýik Saparmyrat Türkmenbaşyny) ýatlama güni',
    href: '#',
    dueDate: '21-nji dekabr',
    dueDateTime: '2023-06-10T00:00Z',
  },
]
</script>