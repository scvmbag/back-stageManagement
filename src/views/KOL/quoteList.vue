<template>
  <div class="container">
    <div class="head">
      <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
         <el-form-item label="项目名称：">
          <el-input v-model="searchInput" class="search_area"></el-input>
        </el-form-item>
        <el-form-item label="上线时间：">
          <el-input v-model="searchInput" class="search_area"></el-input>
        </el-form-item>
        <el-form-item label="媒介：">
          <el-input v-model="searchInput" class="search_area"></el-input>
        </el-form-item>
      </el-form>
    </div>



    


    <el-table
      :data="tableData"
      sum-text="报价"
      :span-method="arraySpanMethod"
      border
      show-summary
      style="width:80%">
      <el-table-column
        align="center"
        prop="in"
        label="加入执行"
        width="80">
        <el-checkbox v-model="checked"></el-checkbox>
      </el-table-column>
      <el-table-column
      align="center"
        prop="name"
        label="序号"
        width="50">
        {{count}}
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="ID区">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="爆款比">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="粉丝数">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="粉丝增量">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="点赞数">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="点赞增量">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="赞评比">
      </el-table-column>
      <el-table-column
      align="center"
        prop="address"
        label="星图价格">
      </el-table-column>
    </el-table>

      <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
         <el-form-item label="执行报价">
          <el-input v-model="searchInput" style="width:1253px"></el-input>
        </el-form-item>
      </el-form>



    <div  class="btm_chkd">
      <span>数据类型：</span>
      <el-checkbox v-model="checked" v-for="item in urcheck" :key="item.name">{{item.name}}</el-checkbox>
    </div>

    <div class="btm_btn">
      <el-button type="primary" class="left_btn">保存项目</el-button>
      <el-button type="primary" class="right_btn">生成执行表</el-button>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      count:1,
      checked:true,
      searchInput:'',
      urcheck:[
        {name:'ID区'},
        {name:'爆款比'},
        {name:'粉丝数'},
        {name:'粉丝增量'},
        {name:'赞评比'},
        {name:'星图价格'},
      ],
      tableData: [
        {
          id:1,
          date: '2016-05-02',
          name: '王小虎',
          address: '1518'
        },
        {
          id:2,
          date: '2016-05-02',
          name: '王小虎',
          address: '1518'
        },
        {
          id:3,
          date: '2016-05-02',
          name: '王小虎',
          address: '1518'
        },
        {
          id:4,
          date: '2016-05-02',
          name: '王小虎',
          address: '1518'
        },
        {
          id:5,
          date: '2016-05-02',
          name: '王小虎',
          address: '1518'
        },
      ],
    }
  },
  methods: {
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2];
    //     } else if (columnIndex === 1) {
    //       return [0, 0];
    //     }
    //   }
    // },
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  .head{
    .head_list{
      margin-bottom: 15px;
      .search_area{
        width: 300px;
      }
    }
  }
  .btm_chkd{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    span{
      margin-right: 20px;
      line-height: 19px;
    }
  }
  .btm_btn{
    display: flex;
    justify-content: center;
    .left_btn{
      width: 130px;
      margin-right: 150px;
    }
    .right_btn{
      width: 130px;
    }
  }
  .head{
    .search_area{
      width: 300px;
    }
  }
}
</style>
