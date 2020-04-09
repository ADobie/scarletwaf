/* eslint-disable */
<template>
  <v-content>
    <v-snackbar v-model="messageBar" color="error" :timeout="2000" :top="true">{{ message }}</v-snackbar>
    <v-row align="center" justify="center" style="margin-top: 5%;">
      <h1 class="display-2 font-weight-thin">ScarletWaf</h1>
    </v-row>
    <br>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>登录</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="inputForm.Name"
            :rules="nameRules"
            label="账号"
            required
            autocomplete="off"
          />
          <v-text-field
            v-model="inputForm.Password"
            :rules="passwordRules"
            label="密码"
            type="password"
            required
            autocomplete="off"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn text color="primary" @click="onLogin">登录</v-btn>
        <v-btn text @click="onReset">重置</v-btn>
        <v-btn text @click="toRegister">去注册</v-btn>
      </v-card-actions>
    </v-card>
    <div class="mt-8 text-center">ScarletWaf管理面板</div>

    <!-- 登录等待 -->
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <v-card dark>
        <v-card-text>
          <p>登录中.....</p>
          <v-progress-linear indeterminate color="white" class="mb-0"/>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-content>
</template>

<script>
/* eslint-disable */

  export default {
    name: "Login",
    data() {
      return {
        isLoading: false,
        messageBar: false,
        message: '',
        nameRules: [
          v => !!v || '请输入账号'
        ],
        passwordRules: [
          v => !!v || '请输入密码'
        ],
        inputForm: {
          Name: '',
          Password: ''
        }
      }
    },
    methods: {
      onLogin: function(){
        axios.post(
          config.log_api,
          this.$qs.stringify(this.inputForm),
        ).then((res) => {
          // Check the callback
          var log_result = res.data
          if(log_result.message == "登录成功")
          {
            localStorage.setItem('token', log_result.token)
            localStorage.setItem('username', log_result.username)
            this.$message({
              message: "登陆成功",
              type: 'success',
              onClose:() => {
                this.$router.replace({path: '/'})
              }
            });
          }
          else if(log_result.message === "用户名或密码错误")
          {
            this.$message.error('用户名或密码错误');
          }
          else if (log_result.message === "用户名或密码为空")
          {
            this.$message.error('用户名或密码为空');
          }
        })
      },
      onReset() {
        this.inputForm = {
          Name: '',
          Password: ''
        }
      },
      toRegister(){
        this.$router.push({path: '/Register'})
      }

    }
  }
</script>

<style scoped>
</style>
