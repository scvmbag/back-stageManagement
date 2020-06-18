<template>
  <div class="container">
    
    <el-button-group style="margin-bottom:50px">
      <el-button type="success" @click="toggleHotKOL" :plain="!showHotKOL">7日最热KOL</el-button>
      <el-button type="success" @click="toggleTalk" :plain="!showTalk">热门话题</el-button>
    </el-button-group>

    <div v-show="showHotKOL" class="most_hot">
      <div class="mid_list">
        <el-table
        @row-click="tap"
        border
        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 801px;margin:0 auto">
          <el-table-column
            type="index"
            label="排名"
            align="center"
            width="400">
            <template scope="scope"><span>{{scope.$index+(currpage - 1) * pagesize + 1}} </span></template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="KOL"
            align="center"
            width="400">
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

    <div v-show="showTalk" class="hot_topic">
      <div class="topic_list">
        <el-table
        border
        :data="topicData.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 801px;margin:0 auto">
          <el-table-column
            type="index"
            label="排名"
            align="center"
            width="400">
            <template scope="scope"><span>{{scope.$index+(currpage - 1) * pagesize + 1}} </span></template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="话题"
            align="center"
            width="400">
          </el-table-column>
        </el-table>
      </div>

      <div class="page_area">
        <el-pagination
        background
        layout="prev, pager, next, total, jumper"
        :total="topicData.length"
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
      showHotKOL:true,
      showTalk:false,
      topicData: [{
        id: 1,
        name: '王小虎',
      }, {
        id: 2,
        name: '王虎',
      }, {
        id: 3,
        name: '王小虎',
      }, {
        id: 4,
        name: '王小虎',
      }],
      tableData: [{
        id: 1,
        name: '王小虎',
      }, {
        id: 2,
        name: '王虎',
      }, {
        id: 3,
        name: '王小虎',
      }, {
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ,{
        id: 4,
        name: '王小虎',
      }
      ]
    }
  },
  methods: {
    toggleHotKOL(){
      this.showHotKOL = true
      this.showTalk = false
      
    },
    toggleTalk(){
      this.showHotKOL = false
      this.showTalk = true
    },
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    tap(event){
      console.log(event.id,event.name)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  .most_hot{
    .mid_list{
      width: 900px;
      height: 600px;
      margin: 0 auto;
    }
    .page_area{
      display: flex;
      flex-direction: row-reverse;
    }
  }
  .hot_topic{
    .topic_list{
      width: 900px;
      height: 600px;
      margin: 0 auto;
    }
    .page_area{
      display: flex;
      flex-direction: row-reverse;
    }
  }
}
</style>
