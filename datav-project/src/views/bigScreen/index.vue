<template>
  <div class="big_screen_container">
    <dv-full-screen-container class="big_screen_body">
      <big-screen-header class="header"/>
      <big-screen-body class="body"/>
    </dv-full-screen-container>
  </div>
</template>

<script>
import BigScreenHeader from './components/BigScreenHeader'
import BigScreenBody from '@/views/bigScreen/components/BigScreenBody'
export default {
  name: 'index',
  components: {
    BigScreenHeader,
    BigScreenBody
  }
}
</script>

<style scoped>
.big_screen_body {
  background: url("../../assets/bg.png") no-repeat center/cover;
}
.header,.body{
  margin-top:20px;
}
</style>
