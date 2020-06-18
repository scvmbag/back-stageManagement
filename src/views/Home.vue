<template>
    <div>
      <div class="pageTitle"><p>项目脑袋</p></div>
      <router-link to="/Message">消息</router-link>
      <router-link to="/News">新闻</router-link>
      <router-view></router-view>
      <ul class="topNav">
          <li :class="[showChoose == 1?'active':'']" @click="showChoose = 1">左边</li>
          <li :class="[showChoose == 0?'active':'']" @click="showChoose = 0">右边</li>
      </ul>
      <div class="main">
        <components1 v-show="showChoose == 1"></components1>
        <components2 v-show="showChoose == 0"></components2>
      </div>
      
    </div>
</template>
<script>
import components1 from '@/components/components1'
import components2 from '@/components/components2'

export default {
    name:"Home",
    components:{
        components1,
        components2,
    },
    data(){
        return{
            showChoose:1,
        }
    }
}
</script>
<style scoped lang="scss">
  .active{
      color: rgb(229, 72, 71);
      border-bottom: 2px solid rgb(229, 72, 71);
  }
  .pageTitle{
      height: 60px;
      background-color: rgb(229, 72, 71);
      p{
        margin: 0;
        font-size: 30px;
        color: #fff;
        text-align: center;
        line-height: 60px;
      }
  }
  .topNav{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      align-items: center;
      justify-content: center;
      list-style: none;
      height: 60px;
      padding: 0;
      li{
          font-size: 25px;
          text-align: center;
      }
  }
</style>