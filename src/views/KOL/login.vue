<template>
  <div class="container">
    <div class="logo">

    </div>
    <div class="bottom_area">
      <div class="input_area">
        <el-input v-model="userInput" placeholder="账户" class="input_left"></el-input>
        <el-input v-model="upwdInput" placeholder="密码" class="input_right"></el-input>
      </div>
      <div class="small_logo">
        <div class="logo_left">

        </div>
        <div class="logo_right">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInput:'',
      upwdInput:'',
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  background-color: black;
  position: absolute;
  height: 100%;
  width: 100%;
  .logo{
    position: relative;
    background-color: white;
    width: 800px;
    height: 400px;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .bottom_area{
    position: relative;
    top: 20%;
    left: 50%;
    width: 300px;
    transform: translateX(-50%);
    .input_area{
      // /deep/ .el-input__inner{
      //   text-align: center;
      // }
      .input_left{
        margin-bottom: 30px;
      }
    }
    .small_logo{
      margin: 0 auto;
      width: 200px;
      margin-top: 80px;
      display: flex;
      justify-content: space-around;
      .logo_left{
        width: 40px;
        height: 40px;
        background-color: white;
      }
      .logo_right{
        width: 40px;
        height: 40px;
        background-color: white;
      }
    }
  }
}
</style>
