<template>
  <v-card  class="mx-auto" max-width="80%">
    <v-card-text  class="text--primary"> 
        <v-row justify="center"  style="background-color:#d4d3ef">
            <v-col md="5" offset-md="2">
                <h2 >User Update Confirm </h2>
            </v-col>
        </v-row>
    <v-row justify="center">
      <v-col md="4">
        <v-img
          max-height="127"
          max-width="150"
          :src="preview_url"
        ></v-img>        
        

      </v-col>
      <v-col md="8">
        <v-row>
          <v-col      
            sm="8"
            md="3"
          >      
            <span>User Name</span>
          </v-col>
          <v-col md="3"
          >
              {{name}}
          </v-col>
        </v-row>
        <v-row >
          <v-col      
            sm="8"
            md="3"
          >      
            <span>Email</span>
          </v-col>
          <v-col md="3"
          >
             {{email}}
          </v-col>
        </v-row>
 
        <v-row >
          <v-col      
            sm="8"
            md="3"
          >      
            <span>Type</span>
          </v-col>
          <v-col md="3"
          >
               {{type=="1"? 'Admin' : 'User'}}
          </v-col>
        </v-row>
        <v-row >
          <v-col      
            sm="8"
            md="3"
          >      
            <span>Phone</span>
          </v-col>
          <v-col md="3"
          >
              {{phone}}
          </v-col>
        </v-row>
        <v-row >
          <v-col      
            sm="8"
            md="3"
          >      
            <span>Date of Birth</span>
          </v-col>
          <v-col md="3"
          >
             {{date_of_birth}}
          </v-col>
        </v-row>
        <v-row >
          <v-col      
            sm="8"
            md="3"
          >      
            <span>Address</span>
          </v-col>
          <v-col md="3"
          >
              {{address}}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        color="success"
        class="mr-4"      
        large 
         @click="Update"   
      >
       Update
      </v-btn>
  
      <v-btn
        color="error"        
         large 
         @click="Cancel"  
      >
        Cancel
      </v-btn>
    </v-row>
    </v-card-text>
  </v-card>
</template>
<script src="../../services/pages/user/user-update-confirm.js">
</script>