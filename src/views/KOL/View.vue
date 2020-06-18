<template>
  <div class="container">

<el-container class="home_container">
  <el-header class="header">
    <div class="left_logo">
      <span>v1.0</span>
    </div>
    <div class="right_info">
      <span>{{identity}}</span>
      <el-select v-model="userName" placeholder="请选择" class="user">
        <el-option
          v-for="item in nameOptions"
          :key="item.value"
          :label="item.userName"
          :value="item.value">
        </el-option>
      </el-select>
      <el-badge :value="infoCount" :max="99" class="item">
         <img src="../../assets/信封.png" style="height:30px;">
      </el-badge>
      <img src="../../assets/换肤.png" class="item2">
    </div>
  </el-header>

  <el-container class="main_container">
    <el-aside width="200px">
      <!-- <div class="toggle-button" @click="toggleClick">
        |||
      </div> -->
      <el-menu
        router
        :unique-opened="opend"
        :default-active="activePath"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-menu-item :index="item.path" v-for="item in menuList" :key="item.id" @click="saveNavState(item.path)">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.authName}}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <!-- 路由占位符 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {
  created(){
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  data () {
    return {
      activePath:'',
      userName:'钟坤',
      infoCount:600,
      identity:'管理员',
      opend:true,
      nameOptions: [{
        value: 'ZK',
        userName: '钟坤'
      },{
        value: 'ZK2',
        userName: '欧芹拉绍'
      }],
      menuList:[
        {
          id:1,
          authName:'首页',
          path:'homePage',
        },
        {
          id:2,
          authName:'KOL分析',
          path:'DatabaseAnalyze',
        },
        {
          id:3,
          authName:'话题分析',
          path:'subjectAnalyze',
        },
        {
          id:4,
          authName:'KOL数据库',
          path:'Database',
        },
        {
          id:5,
          authName:'我的项目',
          path:'myProject',
        },
        {
          id:6,
          authName:'用户管理',
          path:'userManage',
        },
      ]
    }
  },
  methods: {
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
    }
  },
  components: {
  },

}
</script>

<style scoped lang="scss">
.container{
  height: 100%;
  .home_container{
    height: 100%;
  }
  .main_container{
    height: 100%;
  }
  .header{
    background-color: #1a1a1a;
    width: 100%;
    color: #fff;
    line-height: 60px;
    .left_logo{
      float: left;
      width: 100px;
    }
    .right_info{
      span{
        margin-right: 20px;
      }
      width: 300px;
      float: right;
      .user{
        width: 110px;
      }
      .item{
        margin: 0 20px;
        height: 30px;
        cursor: pointer;
        img{
          margin-bottom: 6px;
        }
      }
      .item2{
        height: 30px;
        position: relative;
        top: 10px;
      }
    }
  }
  // .toggle-button{
  //   background-color: #646e77;
  //   color: #fff;
  //   font-size: 10px;
  //   height: 24px;
  //   line-height: 24px;
  //   text-align: center;
  //   width: 200px;
  //   letter-spacing: .2em;
  //   cursor: pointer;
  // }
  .el-aside{
    background-color: #545c64;
    .el-menu{
      border-right: none;
    }
  }
}

</style>
