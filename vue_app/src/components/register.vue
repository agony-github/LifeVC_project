<template>
  <!--用户注册-->
  <div class="register">
    <div>
      <loading></loading>
      <div class="acct-wrap" >
        <div class="old_user_login">
          <div class="acct_top_back">
            <span></span>
          </div>
          <img src="../image/vc.png" class="acct_top_show">
        </div>
        <div class="bg-wrap">
          <div class="login_content">
            <h3>新用户登录</h3>
            <div class="wrap">
              <div style="display: block">
                <ul class="fm_list">
                  <li class="multi">
                    <input type="tel" required="required"
                           maxlength="11"
                           placeholder="请输入手机号" class="field_ipt">
                  </li>
                  <li class="multi">
                    <input type="tel" required="required"
                           maxlength="11"
                           placeholder="请设置6-20位密码,包含字母、数字或符号"
                           class="field_ipt">
                  </li>
                  <li class="multi">
                    <input type="tel" required="required"
                           maxlength="11"
                           placeholder="请输入图形验证码"
                           class="field_ipt">
                    <div class="verifycode_img">
                      <img src="../image/new.jpg" style="width: 45%; vertical-align: middle">
                      <img src="../image/circle.png" style="width: 12%; vertical-align: middle">
                    </div>
                  </li>
                  <li class="multi">
                    <input type="text" required="required"
                           maxlength="10"
                           placeholder="请输入手机验证码" class="field_ipt">
                    <a href="##" class="fidld_skip">获取验证码</a>
                  </li>
                </ul>
                <div class="set_link">
                  <p class="problem_contact_service">
                    遇到问题？请
                    <a href="##">联系客服</a>
                  </p>
                </div>
              </div>
              <input type="button" value="登 陆" class="btn_login">
              <input type="button" value="注 册" class="btn_regisiter">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import loading from './loading'
  export default {
    components: {
      loading
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*注册页面的样式*/
  .register h3 {
    line-height: 42px !important;
    padding-top: 10px;
  }
  .register .wrap {
    position: relative;
  }
  .register .wrap .fm_list .verifycode_img {
    position: absolute;
    top: 10px;
    right: -50px;
  }
  .register .wrap .set_link {
    text-align: center;
  }
  .register .wrap .btn_regisiter {
    background-color: #8a8a8a;
    opacity: 0.5;
  }
</style>
