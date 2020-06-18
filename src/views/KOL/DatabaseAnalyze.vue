<template>
  <div class="container">

    <div class="kol_import">
      <a href="javasciprt:;">KOL分析</a>
    </div>

    <div style="margin-bottom:20px">
      <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
         <el-form-item label="KOL搜索：">
          <el-input v-model="searchInput" placeholder="请输入关键词" class="search_area"></el-input>
          <el-button type="success" plain>搜索</el-button>
        </el-form-item>
        <el-form-item label="类别：">
          <el-radio-group v-model="radio1" fill="#67c23a">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="网大"></el-radio-button>
            <el-radio-button label="电视剧"></el-radio-button>
            <el-radio-button label="电影"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="内容：">
          <el-radio-group v-model="radio2" fill="#67c23a">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="混剪"></el-radio-button>
            <el-radio-button label="CUT"></el-radio-button>
            <el-radio-button label="剧情解说"></el-radio-button>
            <el-radio-button label="剧情吐槽"></el-radio-button>
            <el-radio-button label="泛娱乐"></el-radio-button>
            <el-radio-button label="搞笑鬼畜"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini" label-width="90px">
          <el-form-item label="点赞数：">
            <el-col :span="8">
              <el-input v-model="praiseInput1" placeholder="请输入"></el-input>
            </el-col>
            <el-col class="line" :span="1">至</el-col>
            <el-col :span="8">
              <el-input v-model="praiseInput2" placeholder="请输入"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="评论数：">
            <el-col :span="8">
              <el-input v-model="commentInput1" placeholder="请输入"></el-input>
            </el-col>
            <el-col class="line" :span="1">至</el-col>
            <el-col :span="8">
              <el-input v-model="commentInput2" placeholder="请输入"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini" label-width="90px">
          <el-form-item label="点赞增量：">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="评论增量：">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini" label-width="90px">
          <el-form-item label="爆款时间：">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="爆款基数：">
            <el-input v-model="faddishInput" placeholder="请输入" style="width:193px"></el-input>
          </el-form-item>
        </el-form>
        
      </el-form>
    </div>


    <div class="tab_area">
    <div class="mid_list">
      <el-table
        class="tab_rel"
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        border
        style="width:100%">
        <el-table-column
          align="center"
          prop="in"
          label="选中"
          width="70">
          <el-checkbox v-model="checked"></el-checkbox>
        </el-table-column>
        <el-table-column
          align="center"
          label="序号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
        align="center"
          prop="name"
          label="播主名称">
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
      </div>


        <el-pagination
        class="tab_pag"
        background
        layout="prev, pager, next, total, jumper"
        :total="tableData.length"
        :page-size="pagesize"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        style="margin-top:20px">
      </el-pagination>
    </div>
    


    <div class="import_btn">
      <el-button type="primary" :disabled="false" @click="dialogTableVisible = true">生成预选对比表</el-button>
    </div>

<!-- drawer -->
    <el-drawer
      :visible.sync="dialogTableVisible"
      direction="rtl"
      size="50%">
      <h1>预选对比表</h1>
      <el-table :data="gridData" class="dialog_sty">
        <el-table-column align="center" property="date" label="序号" width="50"></el-table-column>
        <el-table-column align="center" property="name" label="博主名称" width="80"></el-table-column>
        <el-table-column align="center" property="address" label="ID区"></el-table-column>
        <el-table-column align="center" property="address" label="爆款比"></el-table-column>
        <el-table-column align="center" property="address" label="粉丝数"></el-table-column>
        <el-table-column align="center" property="address" label="粉丝增量"></el-table-column>
        <el-table-column align="center" property="address" label="点赞数"></el-table-column>
        <el-table-column align="center" property="address" label="点赞增量"></el-table-column>
        <el-table-column align="center" property="address" label="赞评比"></el-table-column>
        <el-table-column align="center" property="address" label="星图价格"></el-table-column>
      </el-table>
      <span class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false" class="save">保 存</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">生成报价表</el-button>
      </span>
    </el-drawer>


  </div>
</template>

<script>
export default {
  data () {
    return {
      pagesize:10,
      currpage:1,
      radio1:'全部',
      radio2:'全部',
      searchInput:'',
      praiseInput1:'',
      praiseInput2:'',
      commentInput1:'',
      commentInput2:'',
      faddishInput:'',
      checked:true,
      count:1,
      dialogTableVisible:false,
      formInline: {
        name: '',
        region: '',
        date1:'',
        date2:'',
      },
      sizeForm:{

      },
      tableData: [
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '1518'
        },
      ],
      options: [{
          value: '7天',
        },{
          value: '6天',
        },{
          value: '5天',
        },{
          value: '4天',
        },{
          value: '3天',
        },{
          value: '2天',
        }],
      value: '7天',
      gridData: [{
        date: '1',
        name: '王小虎',
        address: '1518'
      }, {
        date: '2',
        name: '王小虎',
        address: '1518'
      }, {
        date: '3',
        name: '王小虎',
        address: '1518'
      }, {
        date: '4',
        name: '王小虎',
        address: '1518'
      }],
    }
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  .kol_import{
    margin-bottom: 10px;
    a{
      text-decoration: none;
      color: black;
    }
    a:hover{
      color: red;
    }
  }
  .search_area{
    width: 300px;
    // /deep/ .el-input__inner{
    //   border-radius: 30px;
    // }
  }
  .tab_area{
    .mid_list{
      height: 600px;
      margin: 0 auto;
    }
    .tab_pag{
      float: right;
    }
  }
  // /deep/ .el-col-1{
  //   text-align: center;
  //   margin: 0 20px;
  // }
  // /deep/ .el-input__inner {
  //     &::-webkit-input-placeholder {
  //         /* WebKit browsers 适配谷歌 */
  //         text-align: center;
  //     }

  //     &:-moz-placeholder {
  //         /* Mozilla Firefox 4 to 18 适配火狐 */
  //         text-align: center;
  //     }

  //     &::-moz-placeholder {
  //         /* Mozilla Firefox 19+ 适配火狐 */
  //         text-align: center;
  //     }

  //     &:-ms-input-placeholder {
  //         /* Internet Explorer 10+  适配ie*/
  //         text-align: center;
  //     }
  // }
  .import_btn{
    float: left;
    width: 112px;
    margin-left: 40%;
    transform: translateX(-50%);
    margin-top: -40px;
  }
  .dialog-footer{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .save{
      margin-right: 150px;
      width: 112px;
    }
  }
}

</style>
