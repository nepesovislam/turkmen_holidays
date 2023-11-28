<template>
    <Swiper
      :modules="[SwiperEffectCreative, Mousewheel, Pagination]"
      :direction="'vertical'"
      :slides-per-view="1"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
    >
        <SwiperSlide>
            <HomeSliderSlide-1/>
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderSlide-2/>
        </SwiperSlide>
        <SwiperSlide>
          <HomeSliderSlide-3/>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Mousewheel, Pagination } from 'swiper/modules';
</script>
  