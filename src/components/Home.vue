<template>
  <div class="home">
    <h1>Welcome to Luceo Auth</h1>
    <ul>
      <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
      <li><router-link :to="{ name: 'ForgotPassword' }">Forgot password</router-link></li>
      <li><router-link :to="{ name: 'SetPassword' }">Set password</router-link></li>
      <li><router-link :to="{ name: 'SignUpStep1' }">Sign Up. Step 1</router-link></li>
      <li><router-link :to="{ name: 'SignUpStep2' }">Sign Up. Step 2</router-link></li>
      <li><router-link :to="{ name: 'SignUpStep3' }">Sign Up. Step 3</router-link></li>
      <li><router-link :to="{ name: 'Profile' }">Profile</router-link></li>

      <!--<li><a target="_blank" href="https://github.com/truepalich/luceo-auth/tree/master/static/email/email_confirm.html">Confirm email</a></li>-->
      <!--<li><a target="_blank" href="https://github.com/truepalich/luceo-auth/tree/master/static/email/email_recover_password.html">Recover password</a></li>-->
      <!--<li><a target="_blank" href="https://github.com/truepalich/luceo-auth/tree/master/static/email/email_invintation.html">Invintation email</a></li>-->
      <!--<li><a target="_blank" href="https://github.com/truepalich/luceo-auth/tree/master/static/email/email_notification.html">Notification email</a></li>-->

      <!--<li><router-link :to="{ name: 'EmailTemplates' }">Email Templates</router-link></li>-->
      <!--<li><a href="../assets/email/email.html">Email Templates</a></li>-->
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style>

</style>
