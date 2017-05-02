<template>
  <!--用户登陆-->
  <div class="login">
    <div>
      <loading></loading>
      <div class="acct-wrap" id="loginBg">
        <div class="old_user_login">
          <div class="acct_top_back">
            <span></span>
          </div>
          <img src="../image/vc.png" class="acct_top_show">
        </div>
        <div class="bg-wrap">
          <div class="login_content">
            <h3>老用户登录</h3>
            <div class="wrap">
              <div class="reset-form">
                <ul class="fm_list">
                  <li class="multi">
                    <input type="tel" required="required"
                           maxlength="11"
                           placeholder="请输入手机号" class="field_ipt">
                    <a href="##" class="fidld_skip">获取验证码</a>
                  </li>
                  <li class="multi">
                    <input type="text" required="required"
                           maxlength="10"
                           placeholder="请输入手机号" class="field_ipt">
                  </li>
                </ul>
                <div class="set_link">
                  <p class="problem_contact_service">
                    遇到问题？请
                    <a href="##">联系客服</a>
                  </p>
                  <a href="##" class="a">
                    <span>账号密码登陆</span>
                    <i></i>
                  </a>
                </div>
              </div>
              <!--预留-->
              <div style="display: none">
                <ul class="fm_list">
                  <li class="multi">
                    <input type="tel" required="required"
                           maxlength="11"
                           placeholder="请输入手机号" class="field_ipt">
                  </li>
                  <li class="multi">
                    <input type="text" required="required"
                           maxlength="10"
                           placeholder="请输入手机号" class="field_ipt">
                    <a href="##" class="fidld_skip">忘记密码</a>
                  </li>
                </ul>
                <div class="set_link">
                  <a href="##" class="a">
                    <span>手机号码快捷登陆</span>
                    <i></i>
                  </a>
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
  /*用户登陆*/
  .login, .register {
    font-family: 'Microsoft YaHei';
  }
  .login .bg-wrap,
  .register .bg-wrap {
    height: 526px;
    background: url("http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg") no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
  }
  .login .bg-wrap .login_content h3,
  .register .bg-wrap .login_content h3 {
    width: 100%;
    font-size: 20px;
    text-align: center;
    color: #037049;
    line-height: 84px;
  }
  .login .bg-wrap .login_content .wrap .btn_login,
  .register .bg-wrap .login_content .wrap .btn_login,
  .login .bg-wrap .login_content .wrap .btn_regisiter,
  .register .bg-wrap .login_content .wrap .btn_regisiter {
    width: 80%;
    margin: 2px 0 8px 38px;
    box-sizing: border-box;
    outline: none;
    text-align: center;
    line-height: 38px;
    font-size: 20px;
    color: #fff;
    letter-spacing: 4px;
    border-radius: 8px;
  }
  .login .bg-wrap .login_content .wrap .btn_login,
  .register .bg-wrap .login_content .wrap .btn_login {
    background-color: #3aad36;
  }
  .login .bg-wrap .login_content .wrap .btn_regisiter,
  .register .bg-wrap .login_content .wrap .btn_regisiter {
    background-color: #8a8a8a;
  }
  /*登陆注册表单的公共样式*/
  .login, .register {
    font-family: 'Microsoft YaHei';
  }
  .login .fm_list .multi,
  .register .fm_list .multi {
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
    overflow: hidden;
  }
  .login .fm_list .multi .field_ipt,
  .register .fm_list .multi .field_ipt {
    font-size: 16px;
    line-height: 50px;
    background: transparent;
    outline: none;
  }
  .login .fm_list .multi .fidld_skip,
  .register .fm_list .multi .fidld_skip {
    position: absolute;
    top: 10px;
    right: 0;
    display: inline-block;
    color: #3aad36;
    font-size: 16px;
    border: 1px solid #3aad36;
    padding: 6px 10px;
    letter-spacing: 1px;
    border-radius: 6px;
  }
  .login .set_link,
  .register .set_link {
    width: 90%;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    position: relative;
  }
  .login .set_link .problem_contact_service,
  .register .set_link .problem_contact_service {
    font-size: 15px;
    line-height: 50px;
    color: #666;
  }
  .login .set_link .problem_contact_service a,
  .register .set_link .problem_contact_service a {
    color: #3ea438;
    text-decoration: underline;
  }
  .login .set_link .a,
  .register .set_link .a {
    position: absolute;
    right: 0;
    top: -2px;
  }
  .login .set_link .a span,
  .register .set_link .a span {
    font-size: 15px;
    color: #3ea438;
    margin-right: -6px;
  }
  .login .set_link .a i,
  .register .set_link .a i {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-right: 2px solid #3ea438;
    border-top: 2px solid #3ea438;
    margin-right: 5px;
    -webkit-transform: rotate(45deg);
  }
  /*登陆注册头部的公共样式*/
  .login .old_user_login,
  .register .old_user_login {
    height: 6rem;
    background-color: #fff;
    position: relative;
    text-align: center;
  }
  .login .old_user_login .acct_top_back,
  .register .old_user_login .acct_top_back {
    overflow: hidden;
    position: relative;
    top: 50px;
    left: 15px;
    width: 30px;
    height: 30px;
    border: 1px solid #8bc146;
    border-radius: 50%;
    background-color: transparent;
  }
  .login .old_user_login .acct_top_back span,
  .register .old_user_login .acct_top_back span {
    display: block;
    position: absolute;
    top: -23px;
    left: -10px;
    width: 15px;
    height: 15px;
    border-left: 2px solid #8bc146;
    border-bottom: 2px solid #8bc146;
    margin: 30px 0 3px 20px;
    -webkit-transform: rotate(45deg);
  }
  .login .old_user_login .acct_top_show,
  .register .old_user_login .acct_top_show {
    width: 120px;
  }
</style>
