<template>
<div class="myLogin">
    <el-input v-model="username" class="space" size="large" placeholder="username" ></el-input>
    <el-input v-model="password" type="password" class="space" size="large" placeholder="password" show-password/>
    <el-button class="space" type="primary" plain @click="deletData" size="large">重置</el-button>
    <el-button class="space" type="success" plain @click="postData" size="large">登录</el-button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name:'myLogin',
    data(){
        return{
            ifError:false,
        username:'',
        password:'',
        }
    },
    methods:{
    deletData(){
        this.username='',
        this.password=''
    },
    godataManage(){
        this.$router.push('/dataManage')
    },
        findError(){
          if (!/^202[012][0-9]{4}$/.test(this.username)){
            alert("学号长度为8,学号>=2020000")
          }else if (!/^[0-9]{5,10}$/.test(this.password)) {
            alert("密码长度为5~10,暂为数字")
          }
          else this.ifError=true
        },
    postData(){
        this.findError();//校验数据
      if(this.ifError){
      axios({
        method:'post',
        url:"http://47.94.90.140:8000/login",
        data:{
            username:this.username,
            password:this.password},
        }).then(res=>{
            alert(res.data.message);
            sessionStorage.setItem('token',res.data.data.token);
            if(res.data.code=='0000')
             this.godataManage();
        },(err)=>{
            console.log(err);
            sessionStorage.removeItem('token')
        })
    }}
    }

}
</script>

<style  scoped>
.space{
    margin-top: 10px;
}
.myLogin{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 40px;
    background-color: rgb(0, 0, 0, 0.5);
    box-shadow: 0 15px 25px rgb(0, 0, 0, 0.6);
    box-sizing: border-box;
    border-radius: 20px;
}
</style>