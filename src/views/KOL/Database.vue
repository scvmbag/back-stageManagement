<template>
  <div class="container">
<!-- <h3>KOL数据库</h3><hr> -->
    <el-button-group style="margin-bottom:50px">
      <el-button type="success" @click="showImport = false,showData = true" :plain="!showData">KOL数据库</el-button>
      <el-button type="success" @click="showImport = true,showData = false" :plain="!showImport">KOL导入</el-button>
    </el-button-group>



    <div style="margin-bottom:50px" v-show="showData">
      <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
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
        <el-form-item label="搜索：">
          <el-input v-model="searchInput" placeholder="请输入关键词" class="search_area"></el-input>
          <el-button type="success" plain>搜索</el-button>
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
    


    <div class="list">
      <el-table
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        border
        style="width: 100%">
        <el-table-column
        align="center"
          prop="name"
          type="index"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
        align="center"
          prop="name"
          label="名称"
          width="80">
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
        <el-table-column
        align="center"
          label="移除">
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-table-column>
      </el-table>
    </div>


    <div class="page_area">
      <el-pagination
      background
      layout="prev, pager, next, total, jumper"
      :total="tableData.length"
      :page-size="pagesize"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      style="margin-top:20px">
    </el-pagination>
    </div>

    </div>





    <div v-show="showImport">

      <el-input v-model="input" placeholder="请输入KOL、话题" class="search_area" size="mini"></el-input>
      <el-button type="success" plain size="mini">搜索</el-button>

      <el-form ref="form" :model="form" label-width="130px" label-position="left" size="mini">
        <el-form-item label="粉丝量：">
          <el-col :span="3">
            <el-input v-model="input"></el-input>
          </el-col>
          <el-col class="line" :span="1">至</el-col>
          <el-col :span="3">
            <el-input v-model="input"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="视频发布时间：">
          <el-date-picker
            v-model="form.timer"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>



        <el-table
          :data="ImporttableData"
          border
          style="width: 100%">
          <el-table-column
            align="center"
            prop="in"
            label="导入"
            width="130">
            <el-checkbox v-model="checked"></el-checkbox>
          </el-table-column>
          <el-table-column
          align="center"
            prop="name"
            label="序号"
            width="80">
            {{count}}
          </el-table-column>
          <el-table-column
          align="center"
            prop="address"
            label="KOL名称">
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
          <el-table-column
          align="center"
            label="编辑">
            <el-button type="primary" @click="dialogTableVisible = true">添加标签</el-button>
          </el-table-column>
        </el-table>

        <div class="import_btn">
          <el-button type="primary" :disabled="true">导入数据库</el-button>
        </div>
        

        <div class="page_area">
          <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          style="margin-top:20px">
        </el-pagination>
        </div>
        


        <el-dialog title="添加标签" :visible.sync="dialogTableVisible" width="35%">
          <el-form :model="searchInput" label-width="90px" size="mini" label-position="left">
            <el-form-item label="标签名：">
              <el-input v-model="searchInput" style="width:300px"></el-input>
              <el-button type="primary">添加标签</el-button>
            </el-form-item>
            <el-form-item label="标签名：">
              <el-input v-model="searchInput" style="width:300px"></el-input>
              <el-button type="primary">添加标签</el-button>
            </el-form-item>
            <el-form-item label="标签名：">
              <el-input v-model="searchInput" style="width:300px"></el-input>
              <el-button type="primary">添加标签</el-button>
            </el-form-item>
            <el-form-item label="标签名：">
              <el-input v-model="searchInput" style="width:300px"></el-input>
              <el-button type="primary">添加标签</el-button>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="centerDialogVisible = false">保 存</el-button>
            <el-button @click="centerDialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>


      </div>



  </div>
</template>

<script>
export default {
  data () {
    return {
      showData:true,
      showImport:false,
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
      formInline: {
        name: '',
        region: '',
        date1:'',
        date2:'',
      },
      sizeForm:{},
      tableData: [
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
        dialogTableVisible: false,
        searchInput:'',
        input:'',
        checked:true,
        count:1,
        form: {
          name: '',
          region: '',
          timer:'',
        },
        ImporttableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
.search_area{
  width: 300px;
  // /deep/ .el-input__inner{
  //   border-radius: 30px;
  // }
}
.list{
  height: 780px;
}
.page_area{
  float: right;
}
// /deep/ .el-col-1{
//   text-align: center;
//   margin: 0 20px;
// }
// /deep/ .el-input__inner {
//     &::-webkit-input-placeholder {
//         /* WebKit browsers 适配谷歌 */
//          text-align: center;
//     }

//     &:-moz-placeholder {
//         /* Mozilla Firefox 4 to 18 适配火狐 */
//          text-align: center;
//     }

//     &::-moz-placeholder {
//         /* Mozilla Firefox 19+ 适配火狐 */
//          text-align: center;
//     }

//     &:-ms-input-placeholder {
//         /* Internet Explorer 10+  适配ie*/
//          text-align: center;
//     }
// }

.search_area{
  width: 300px;
  margin-bottom: 10px;
  // /deep/ .el-input__inner{
  //   border-radius: 30px;
  // }
}
.page_area{
  display: flex;
  flex-direction: row-reverse;
}
// /deep/ .el-c

.import_btn{
  float: left;
  width: 112px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
}
</style>
