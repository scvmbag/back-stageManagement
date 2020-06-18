<template>
    <div id="app">
      <input type="text" v-model="inputValue" @keyup.enter="clickSubmit()" placeholder="请输入待办事项">
      <button @click="clickSubmit">submit</button>
      <h2>进行中</h2>

      <ul>
        <li v-for="(item,index) in list" :key="index">
          <input type="checkbox">
          <a>{{item.title}}</a>
          <button @click="del(index)">delete</button>
        </li>
      </ul>
      <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
import storage from '@/model/storage';
export default {
    data() {
        return {
          list:[],
          inputValue:"",
          checked:true
        };
    },
    methods: {
      clickSubmit(){
        this.list.push({
          title:this.inputValue,
          checked:false
        });
        this.inputValue = ""
        storage.set('list',this.list)
      },
      del(index){
        this.list.splice(index,1)
        storage.set('list',this.list)
      },
    },
    mounted() {
      var list = storage.get('list')
      if(list){
        this.list = list;
      }
    },
    components: {
      storage
    },
};
</script>

<style lang="scss" scoped>

</style>
