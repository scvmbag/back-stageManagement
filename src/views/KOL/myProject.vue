<template>
  <div class="container">
    <!-- <h3>我的项目</h3><hr> -->

    <div style="margin-bottom:50px;width:800px">
      <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
         <el-form-item label="搜索：">
          <el-input v-model="searchInput" placeholder="请输入关键词" class="search_area"></el-input>
          <el-button type="success" plain>搜索</el-button>
        </el-form-item>
        <el-form-item label="排序：">
          <el-radio-group v-model="radio1" fill="#67c23a">
            <el-radio-button label="创建日期"></el-radio-button>
            <el-radio-button label="修改日期"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="类型：">
          <el-radio-group v-model="radio2" fill="#67c23a">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="项目"></el-radio-button>
            <el-radio-button label="预选表"></el-radio-button>
            <el-radio-button label="话题分析"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>


    <el-row :gutter="20">
      <el-col :span="8" v-for="item in smallCard" :key="item.id">
        <el-card :body-style="{ padding: '5px 30px' }" class="card_box">
          <div class="left_card">
            <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
              <el-form-item :label="item.name+'：'">
                <span class="hid">{{item.content}}</span>
              </el-form-item>
              <el-form-item label="创建时间：">
                {{item.time}}
              </el-form-item>
              <el-form-item label="最后保存：">
                {{item.lastSave}}
              </el-form-item>
            </el-form>
          </div>
          <div class="right_card">
            <i class="el-icon-document"></i>
            <el-button type="info" size="mini" plain>置顶</el-button>
            <el-button type="info" size="mini" plain>删除</el-button>
          </div>

        </el-card>
      </el-col>
    </el-row>

    <div class="page_area">
      <el-pagination
      background
      layout="prev, pager, next, total, jumper"
      :total="smallCard.length"
      :page-size="pagesize"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      style="margin-top:20px">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchInput:'',
      radio1:'创建日期',
      radio2:'全部',
      sizeForm:{},
      smallCard:[
        {
          id:1,
          name:'话题名称',
          content:'六一儿童节一儿一儿一儿一儿',
          time:'2020.6.2',
          lastSave:'2020.6.2'
        },
        {
          id:2,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
        {
          id:3,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
        {
          id:4,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
        {
          id:5,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
        {
          id:5,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
        {
          id:5,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
        {
          id:5,
          name:'项目',
          content:'喜乐排行',
          time:'2020.5.30',
          lastSave:'2020.6.1'
        },
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.search_area{
  width: 300px;
}
.card_box{
  margin-bottom: 20px;
  width: 380px;
  .left_card{
    float: left;
    width: 60%;
    .hid{
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 9em;
    }
  }
  .right_card{
    float: right;
    width: 40%;
    text-align: center;
    // /deep/ .el-icon-document{
    //   font-size: 80px;
    //   margin: 10px 0;
    // }
  }
}
.page_area{
    float: right;
  }
</style>
