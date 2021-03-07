<template>
  <div id="HomePage">
    <b-navbar type = "Light" variant="faded">
      <b-navbar-brand href="#">
        <img src="../assets/taxiwhite.png" class="logo" alt="logo">
        poolit
      </b-navbar-brand>
    </b-navbar>
    <h1 class="intro"> Greetings, {{username}} </h1>
    <h1>Help us identify which type of user you are: </h1>

    <div class="button-group-1">
        <b-button block class = "type" variant="Light" v-on:click="provide"> 
          <div class="hero-button">
              <span style="font-size:40px; color:#5B7BBA">Driver &emsp; &#10140;</span> 
          </div>
        </b-button>
        <b-button block class = "type" variant="Light" v-on:click="request"> 
          <div class="hero-button">
              <span style="font-size:40px; color:#5B7BBA">Rider &emsp; &#10140;</span>    
          </div>
        </b-button>
    </div>

  <h4 class="intro"> User Acknowledgement </h4>
  <div class="intro">
  <p> Providing a carpool ride to other users is a good favor to other people while not harming any of your benefits. Our application will post your status online to allow other users to request.</p>
  <p> Requesting a carpool ride can be easy and convenient. This will grant you access to all the carpool drivers nearby your location. Wish you have a safe and happy ride.</p> 
  </div>
  <div> AMK @ Deltahacks 2021</div>
  </div>

</template>

<script>

export default {
  name: 'HomePage',

  data(){
    return {
      
    }
  },

  methods: {
    provide(){
        this.$router.push({ path: "homepage/driverpage", query:{username: this.username}})
    },

    request(){
        this.$router.push({ path: "homepage/requestpage", query:{username: this.username}})
    }
  },

  beforeCreate(){
      this.username = this.$route.query.username;
  },


}
</script>

<style>

  .navbar {
    background: #5B7BBA;
  }
  .logo{
    border: none;
    margin-left: auto;
    margin-right: auto;
    width: 45px;
  }
  .navbar-Light .navbar-brand{

    color: white;
    font-style: normal;
    font-weight: bolder;
    font-size: 40px;
    line-height: 42px;

  }

.intro{
  width: 400px;
  position: center;
  border: none;
  margin:auto;
  margin-top: 50px;
  margin-bottom: auto;
}

.type{
  font-size: 40px;
  line-height: 40px;
  font-weight: bolder;
  height:200px;
  word-wrap: break-word;
  border: none;
}

</style>