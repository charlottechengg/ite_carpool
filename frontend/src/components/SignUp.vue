<template>

  <div id="SignUp">
    <b-navbar fixed = "top" type = "Light" variant="faded">
      <b-navbar-brand href="#">
        <img src="../assets/taxiwhite.png" class="logo" alt="logo">
        poolit
      </b-navbar-brand>
    </b-navbar>
    <b-card class = "front_img" overlay v-bind:img-src = "require('../assets/carwashing.png')" img-alt="Card image" img-bottom title = "Try the Smart Commute tool." title-tag ='h2'> 
    </b-card>
    <div class = "signup_section"> 
      <h2> Sign up today.</h2>
        <form @submit.prevent="signup" class = "signup_form">
          <b-form-group id = "input-g1" label = "Name" label-for = "Name">
              <b-form-input
                id = "input-1" 
                type="text" 
                name="name" 
                v-model="name" 
                placeholder="Enter here" 
                required
              >
              </b-form-input>
            </b-form-group>

            <b-form-group id = "input-g2" label = "Username" label-for = "Username">
              <b-form-input
                id = "input-2" 
                type="text" 
                name="username" 
                v-model="username" 
                placeholder="Enter here" 
                required
              >
              </b-form-input>
            </b-form-group>

            <b-form-group id = "input-g3" label = "Password" label-for = "Password">
              <b-form-input
                id = "input-3" 
                type="password" 
                name="password" 
                v-model="password" 
                placeholder="Enter here" 
                required
              >
              </b-form-input>
            </b-form-group>

            <b-form-group id = "input-g4" label = "Email" label-for = "Email">
              <b-form-input
                id = "input-4" 
                type="email" 
                name="email" 
                v-model="email" 
                placeholder="Enter here" 
                required
              >
              </b-form-input>
            </b-form-group>
            <p v-if="feedback" class="fb">{{ feedback }}</p>
            <b-button class="signup-button" variant="primary">Sign Up Today!</b-button>
        </form>
    </div>
    <div> AMK @ Deltahacks 2021</div>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data(){
    return {
      username: null,
      password: null,
      name: null,
      email: null,
      feedback: null
    }
  },

  methods: {
    signup(){
      //register in the database
    }
  }
}
</script>


<style scoped>
  .card {
    background: white;
  }

  .front_img{
    position: center;
    border: none;
    margin-top:10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }

  .logo{
    border: none;
    margin-left: auto;
    margin-right: auto;
    width: 45px;
  }
  .signup_form{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 240px;
  }
  .signup_section{
    background: rgba(216, 227, 255, 0.41);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 10px;
  }

  .navbar {
    background: #5B7BBA;
  }

  .navbar-light .navbar-brand{
    font-style: normal;
    font-weight: bolder;
    font-size: 40px;
    line-height: 42px;
    color: white;
    
  }

  .frontpage{
    position: relative;
    margin: 0;
    padding-top: 0px;
  }

  .fb{
    color: rgb(159, 61, 61);
  }

  </style>