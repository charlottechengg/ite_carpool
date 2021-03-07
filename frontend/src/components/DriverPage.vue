<template>
  <div id="DriverPage">
    <b-navbar type = "Light" variant="faded">
      <b-navbar-brand href="#">
        <img src="../assets/taxiwhite.png" class="logo" alt="logo">
        poolit
      </b-navbar-brand>
    </b-navbar>

    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>


    <div class="filter">
        <h2 class = "filter-text"> Where are you going? </h2>
        <b-form @submit.prevent="addMarker" class="filter_form">
            
            <b-form-group id = "input-g1" label = "Starting Address" label-for = "start_address">
              <gmap-autocomplete :value="start_address" @place_changed="setPlace">{{ start_address }}</gmap-autocomplete>
            </b-form-group>

            <b-form-group id = "input-g2" label = "Destination" label-for = "Destination">
              <gmap-autocomplete :value="destination" @place_changed="setDestination">{{ destination }}</gmap-autocomplete>
            </b-form-group>

            <b-form-group id = "input-g3" label = "Capacity" label-for = "capacity">
              <b-form-input
                id = "input-3" 
                type="number" 
                name="capacity"
                v-model="capacity" 
                required
              >
              </b-form-input>

            </b-form-group>

            <b-form-group id = "input-g4" label = "Date" label-for = "date">
              <b-form-input
                id = "input-4" 
                type="date" 
                name="date"
                v-model="date" 
                required
              >
              </b-form-input>
            </b-form-group>
            <div>
              Register your future trip so that other people can join your ride!
            </div>

            <b-button type="submit" variant="primary" class="button" @click = "addMarker">  Submit </b-button>

        </b-form>
    </div>

    </div>
</template>

<script>


export default {

  name: 'DriverPage',


    data(){
        return {

            start_address: null,
            destination: null,
            radius: null,
            date: null,
            capacity: null,
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            places: [],
            currPlace: null,
            currDestination:null
        }
    },

    methods: {
        setPlace(place){
          this.currPlace = place;
        },
        setDestination(place){
          this.currDestination = place;
        },
        find_match(){
          console.log(this.currPlace)
        },
        addMarker() {
            if (this.currPlace && this.currDestination) {
                const marker1 = {
                    lat: this.currPlace.geometry.location.lat(),
                    lng: this.currPlace.geometry.location.lng()
                };
                this.markers.push({ position: marker1 });
                this.places.push(this.currPlace);
                this.currPlace = null;
                
                const marker2 = {
                    lat: this.currDestination.geometry.location.lat(),
                    lng: this.currDestination.geometry.location.lng()
                };
                this.markers.push({ position: marker2 });
                this.places.push(this.currDestination);
                this.center = marker2;
                this.currDestination = null;
                
            }
            }
                
        },

        geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
        const lati = position.coords.latitude;
        const long = position.coords.longitude;
        this.center = {
          lat: lati,
          lng: long
        };
        const marker = {
          lat: lati,
          lng: long
        };
        this.markers.push({ position: marker});
      });

    },

    mounted() {
    this.geolocate();
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

  .filter_form{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 240px;
    padding: 10px;
  }
  .filter-text{
    margin-top: 50px;
    padding: 10px;
  }
  .filter{
    background: rgba(216, 227, 255, 0.41);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 10px;
  }
  .button{
      margin-top: 20px;
  }


</style>