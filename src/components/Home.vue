<template>
  <div class="home">
    <h1>Welcome to Luceo Auth</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'Login' }">Login</router-link> /
        <router-link :to="{ name: 'LoginBrand', params: { brandSlug: 'nhsbca' } }">Login NHSBCA</router-link> /
        <router-link :to="{ name: 'LoginBrand', params: { brandSlug: 'rising-coaches' } }">Login Rising Coaches</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ForgotPassword' }">Forgot password</router-link> /
        <router-link :to="{ name: 'ForgotPasswordBrand', params: { brandSlug: 'nhsbca' } }">Forgot password NHSBCA</router-link> /
        <router-link :to="{ name: 'ForgotPasswordBrand', params: { brandSlug: 'rising-coaches' } }">Forgot password Rising Coaches</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SetPassword' }">Set password</router-link>
        <router-link :to="{ name: 'SetPasswordBrand', params: { brandSlug: 'nhsbca' } }">Set Password NHSBCA</router-link> /
        <router-link :to="{ name: 'SetPasswordBrand', params: { brandSlug: 'rising-coaches' } }">Set Password Rising Coaches</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> /
        <router-link :to="{ name: 'SignUpBrand', params: { brandSlug: 'nhsbca' } }">Sign Up NHSBCA</router-link> /
        <router-link :to="{ name: 'SignUpBrand', params: { brandSlug: 'rising-coaches' } }">Sign Up Rising Coaches</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Profile' }">Profile</router-link>/
        <router-link :to="{ name: 'ProfileBrand', params: { brandSlug: 'nhsbca' } }">Profile NHSBCA</router-link> /
        <router-link :to="{ name: 'ProfileBrand', params: { brandSlug: 'rising-coaches' } }">Profile Rising Coaches</router-link>
      </li>

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
