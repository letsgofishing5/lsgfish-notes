<template>
  <div class="big_screen_header_container">
    <div class="left">
      <div class="header_sider">
        <dv-decoration-10 class="auto_grow elongate" style="width:100%;height:.0625rem;margin-bottom: 20px;"/>
        <div class="d_flex">
          <dv-decoration-11 class="small_handle" @click.native="test()" style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
          <dv-decoration-11 class="small_handle" @click.native="test" style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
          <dv-decoration-7 class="small_handle" @click.native="test" style="width:150px;height:30px;">Decoration</dv-decoration-7>
        </div>
      </div>
    </div>
    <dv-decoration-8 style="width:300px;height:50px;"/>
    <div class="communityName d_flex_column">
      <div class="text_center">西子曼城</div>
      <dv-decoration-6 :reverse="true" :color="['#50e3c2', '#67a1e5']" style="width:300px;height:20px;" />
    </div>
    <dv-decoration-8 :reverse="true" style="width:300px;height:50px;"/>
    <div class="right">
      <div class="header_sider">
        <dv-decoration-10 class="auto_grow elongate" style="width:100%;height:.0625rem;margin-bottom: 20px;transform: rotate(180deg)"/>
        <div class="d_flex">
          <dv-decoration-7 class="small_handle" @click.native="test" style="width:150px;height:30px;">Decoration</dv-decoration-7>
          <dv-decoration-11 class="small_handle" style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
          <dv-decoration-11 class="small_handle" style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  methods: {
    test () {
      alert(123)
    }
  }
}
</script>

<style scoped>
.big_screen_header_container {
  color: white;
  display: flex;
}

.d_flex {
  display: flex;
  flex-wrap: nowrap;
}
.d_flex_column{
  display: flex;
  flex-direction: column;
}
.communityName {
  font-size: 45px;
  margin: 0 20px;
}

.small_handle {
  cursor: pointer;
}
.text_center{
  text-align: center;
}
</style>
