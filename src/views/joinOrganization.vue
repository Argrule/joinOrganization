<template>
  <div style="width:50% ">
    <h4>天津理工大学计算机科学与工程学院</h4>
    <h4>学生组织报名系统</h4>
      <changeData ref="demo" style="width:70%"/>
    <el-button type="success" round size="large" @click="goChangeData">报名</el-button>
    <el-button type="primary" plain round size="large" @click="gologin">后台登录</el-button>
  </div>
</template>

<script>
// import '../assets/background.jpg'
import changeData from '../components/changeData.vue';
export default {
  name:'joinOrganization',
  components:{
    changeData
  },
  methods:{
    goChangeData(){
      this.$refs.demo.postData()
    },
    gologin(){
      this.$router.push({name:'login'})
    },
  }
}
</script>

<style scoped>
  /* body{
    padding: 0;
    margin: 0;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    } */
  div{
      padding: 40px;
      background-color:  rgb(0, 0, 0, 0.2);
      box-shadow: 0 15px 25px  rgb(0, 0, 0, 0.6);
      box-sizing: border-box;
      border-radius: 10px;
    margin:auto;
    text-align: center;
  }
</style>