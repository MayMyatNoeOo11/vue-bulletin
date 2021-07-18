<template>

    <v-card  class="mx-auto" max-width="80%">
    <v-card-text  class="text--primary"> 
        <v-row justify="center"  style="background-color:#d4d2ef">
            <v-col md="5" offset-md="2">
                <h2 class="mr-30">Edit User</h2>
            </v-col>
        </v-row>
    <v-row justify="center">
      <v-col lg="4">
        <v-img 
            max-width="200px"
            min-width="200px"
            margin="auto"
            v-bind:src="old_profile"          
            
        ></v-img> 
        <span style="text-align:center">Old Profile Photo</span>
        <v-text-field readonly v-model="old_photo"></v-text-field>
        <v-divider></v-divider>
        <a href="#" @click="changePassword()">Change Password</a>
      </v-col>
      <v-col
        cols="12"
        sm="8"
        md="7"
        lg="8"
      >
     
       <v-form
      ref="form"
      @submit.prevent="updateUser" method="post"         
       enctype="multipart/form-data"
    >
                <template>
              <div>
                <div v-for="(error, key) in errors" :key="key">
                  <hr />
                  <span v-for="(errorItem, innerKey) in error" :key="innerKey" style="color:red;font-style:bold;margin-top: 2rem">
                    {{ errorItem }}
                  </span>
                </div>
              </div>
            </template>
      <v-text-field
        v-model="name"       
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
     <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
       ></v-text-field>       
                <v-menu
                    v-model="dobMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                   max-width="250px"
                        min-width="250px"
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    label="Date of Birth"
                    prepend-icon="event"
                    readonly
                     :rules="[(v) => !!v || 'Date of birth is required']"
                    :value="dobDisp"
                    v-on="on"
                    ></v-text-field>
                </template>
      <v-date-picker        
        :min="minDate"
        :max="maxDate"
        v-model="dobVal"
        no-title
        @input="dobMenu = false"
      ></v-date-picker>
    </v-menu> 

            <v-select
                v-model="type"
               
                :items="userType"
                item-text="name"
                item-value="id"
                filled
                label="Type"
                dense
          ></v-select>

        <v-text-field
            v-model="phone"       
            
            label="Phone"
            required
        ></v-text-field>
             <v-textarea
        v-model="address"         
        clearable
        clear-icon="mdi-close-circle"
        label="Address"
        value=""
      ></v-textarea> 
          <v-file-input
          v-model="profile_photo" 
            accept="image/jpg, image/jpeg,image/png"       
            label="Choose Profile Photo"
            show-size 
            chips
            prepend-icon="mdi-camera"  
            @change="Preview"         
          >
          </v-file-input>
        <v-img
          max-height="127"
          max-width="150"
          :src="preview_url"
        ></v-img> 

    <v-row class="mt-5">
      <v-btn
        color="success"
        class="mr-4"
        type="submit"  
      >
       Update
      </v-btn>  
      <v-btn
        color="error"
         @click="Cancel"  
      >
        Cancel
      </v-btn>
    </v-row>
    </v-form>        
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
</template>
<script src="../../services/pages/user/user-edit.js">
</script>

