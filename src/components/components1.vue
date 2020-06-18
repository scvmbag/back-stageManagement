<template>
    <div class="components1">
        <a href="http://" target="_blank" rel="noopener noreferrer">打开链接</a><br>
        <router-link :to="'/todolist/'+id">跳转至todolist</router-link>
    </div>
</template>
<script>
export default {
    data:function () {
        return {
            id:'传参'
        }
    },
}
</script>
<style scoped lang="scss">
    
</style>