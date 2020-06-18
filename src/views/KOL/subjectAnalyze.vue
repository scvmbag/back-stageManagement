<template>
  <div class="container">
    <!-- <h3>话题分析</h3><hr> -->
    <el-form ref="form" :model="sizeForm" label-width="90px" size="mini" label-position="left">
        <el-form-item label="话题搜索：">
        <el-input v-model="searchInput" placeholder="请输入关键词" class="search_area"></el-input>
        <el-button type="success" plain>搜索</el-button>
      </el-form-item>
    </el-form>

      <el-button type="success" class="ob_detial">生成对比分析</el-button>
    
    <div class="list_area">
      <div class="list">
        <el-table
          border
          :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
          style="width: 100%"
          >
          <el-table-column
            prop="num"
            label="序号"
            align="center"
            :formatter="formatter">
          <el-checkbox v-model="checked"></el-checkbox>
          </el-table-column>
          <el-table-column
            prop="address"
            label="榜单"
            type="index"
            width="100"
            align="center"
            :formatter="formatter">
            <template scope="scope"><span>TOP{{scope.$index+(currpage - 1) * pagesize + 1}}</span></template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="话题名称"
            align="center"
            :formatter="formatter">
          </el-table-column>
          <el-table-column
            prop="date"
            label="参与人数"
            align="center"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="总播放量"
            align="center"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="趋势"
            align="center"
            :formatter="formatter">
            <i class="el-icon-sort-up" style="color:#f00;font-weight:bold"></i>
          </el-table-column>
          <el-table-column
            prop="address"
            label="操作"
            align="center"
            :formatter="formatter">
            <el-button type="primary">查看详情</el-button>
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
    



  </div>
</template>

<script>
export default {
  data () {
    return {
      pagesize:10,
      currpage:1,
      checked:true,
      sizeForm:{},
      searchInput:'',
      tableData: [
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
        {
        date: '202',
        name: '41亿',
        address: '上海市'
        },
      ]
    }
  },
  methods: {
    formatter(row) {
      return row.address;
    },
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
}
.ob_detial{
  position: relative;
  left: 90%;
  top: -30px;
}
.up{
  color:#f56c6c;
  font-weight:bold
}
.down{
  color:#67c23a;
  font-weight:bold
}
.list_area{
  .list{
    // width: 900px;
    height: 750px;
    margin: 0 auto;
  }
  .page_area{
    float: right;
  }
}
</style>
