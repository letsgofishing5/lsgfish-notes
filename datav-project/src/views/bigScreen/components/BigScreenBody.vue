<template>
  <div class="big_screen_body_container">
    <big-screen-body-left/>
    <BigScreenBodyCenter/>
    <BigScreenBodyRight/>
  </div>
</template>

<script>
import BigScreenBodyLeft from '@/views/bigScreen/components/BigScreenBodyLeft'
import BigScreenBodyRight from '@/views/bigScreen/components/BigScreenBodyRight'
import BigScreenBodyCenter from '@/views/bigScreen/components/BigScreenBodyCenter'
export default {
  name: 'BigScreenBody',
  components: {
    BigScreenBodyLeft,
    BigScreenBodyRight,
    BigScreenBodyCenter
  }
}
</script>

<style scoped>
.big_screen_body_container {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
</style>
