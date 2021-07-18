<template>
  <v-card  class="mx-auto" max-width="80%">
    <v-card-text  class="text--primary"> 
        <v-row justify="center"  style="background-color:#d4d2ef">
            <v-col md="5" offset-md="2">
                <h2 class="mr-30">Create User</h2>
            </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            md="8"
            lg="8"
          >
        
          <v-form
          ref="form"
          @submit.prevent="createUser" method="post"         
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
          >
          
        </v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
            <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required, passwordRules.min]"
                  :type="showPassword ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  hint="At least 8 characters and at least one Capital letter and one number."
                  
                  class="input-group--focused"
                  @click:append="showPassword = !showPassword"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="confirm_password"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[confirmPasswordRules.required, confirmPasswordRules.min,passwordMatch]"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  name="input-10-2"
                  label="Confirm Password"
                  hint="At least 8 characters and at least one Capital letter and one number."
                 
                  class="input-group--focused"
                  @click:append="showConfirmPassword = !showConfirmPassword"
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
                        required
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
                     :rules="[(v) => !!v || 'Type is required']"
                    item-text="name"
                    item-value="id"
                    filled
                    label="Type"
                    dense
                   required
              ></v-select>

            <v-text-field
                v-model="phone"      
                
                label="Phone"
                
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
          <v-col md="5" offset-md="3">
          <v-btn
            color="success"
            class="mr-4"
           
            large  
            type="submit" 
       
          >
          Create
          </v-btn>
      
          <v-btn
            color="error"
            @click="resetForm" 
            large 
          >
            Cancel
          </v-btn>
          </v-col>
        </v-row>
        </v-form>
            
          </v-col>
        </v-row>
    </v-card-text>

  </v-card>

</template>
<script src="../../services/pages/user/user-create.js">
</script>

