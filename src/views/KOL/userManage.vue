<template>
  <div class="container">

<h3>用户管理</h3>
<hr>
    <el-form ref="form" :model="searchInput" label-width="90px" size="mini" label-position="left">
      <el-form-item label="用户信息：">
        <el-input v-model="searchInput" placeholder="请输入用户信息进行搜索" class="search_area"></el-input>
        <el-button type="success" plain>搜索</el-button>
      </el-form-item>
    </el-form>


    <el-table
    :data="tableData"
    border
    style="width: 100%">
      <el-table-column
        prop="date"
        label="用户名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="操作">
        <el-button type="primary" @click="dialog.dialogTableVisible = true">设置权限</el-button>
      </el-table-column>
    </el-table>

    <el-button type="primary" class="user_add" @click="dialog.addDialogTable = true">添加</el-button>

    <el-dialog title="权限设置" :visible.sync="dialog.dialogTableVisible" width="30%">
      <el-form :model="searchInput" label-width="90px" size="mini" label-position="left">
        <el-form-item label="姓名：">
          老八
        </el-form-item>
        <el-form-item label="角色：">
          <el-select v-model="role" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <table>
          <tr v-for="item in power" :key="item.id">
            <td>
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </td>
          </tr>
        </table>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialog.dialogTableVisible = false" class="save">确 定</el-button>
        <el-button @click="dialog.dialogTableVisible = false">取 消</el-button>
      </span>
    </el-dialog>


    <el-dialog title="添加用户" :visible.sync="dialog.addDialogTable" width="30%">
      <el-form :model="addInput" label-width="90px" size="mini" label-position="left">
        <el-form-item label="姓名：">
          <el-input v-model="addInput" placeholder="请输入用户名称" style="width:193px"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
          <el-select v-model="role" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <table>
          <tr v-for="item in power" :key="item.id">
            <td>
              <el-checkbox v-model="checked">{{item.name}}</el-checkbox>
            </td>
          </tr>
        </table>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialog.addDialogTable = false" class="save">确 定</el-button>
        <el-button @click="dialog.addDialogTable = false">取 消</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
export default {
  data () {
    return {
      role:'管理员',
      checked:true,
      searchInput:'',
      addInput:'',
      dialog:{
        dialogTableVisible: false,
        addDialogTable: false,
      },
      options: [{
        value: '选项1',
        label: '管理员'
      }, {
        value: '选项2',
        label: '用户'
      }],
      power:[
        {
          id:1,
          name:'话题分析'
        },
        {
          id:2,
          name:'我的项目'
        },
        {
          id:3,
          name:'用户管理'
        },
        {
          id:4,
          name:'KOL数据库'
        },
      ],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海8 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普'
      }]
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
.dialog-footer{
  display: flex;
  justify-content: center;
  .save{
    margin-right: 80px;
  }
}
.user_add{
  float: right;
  margin-top: 50px;
}
</style>
