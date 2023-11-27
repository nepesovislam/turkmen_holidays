<template>
    <Swiper
      :modules="[SwiperEffectCreative, Mousewheel, Pagination]"
      :slides-per-view="1"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-40%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide>
        <HomeSliderSlide-1 @childEvent="handleChildEvent"/>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Mousewheel, Pagination } from 'swiper/modules';
</script>
  