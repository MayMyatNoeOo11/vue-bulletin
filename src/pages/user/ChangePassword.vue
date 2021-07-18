<template>
    <v-card  class="mx-auto" max-width="50%">
        <v-card-text  class="text--primary"> 
            <v-row justify="center"  style="background-color:#d4d2ef">
                <v-col md="5" offset-md="2">
                    <h2 class="mr-30">Change Password</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col
                    lg="12"
                >                
                    <v-form
                       ref="form"
      @submit.prevent="changePassword" method="post"  >
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

                        <!-- <v-text-field type="hidden" v-model="change_id"  ></v-text-field>
                        <v-text-field type="hidden" v-model="his_password"></v-text-field> -->
                        <v-text-field
                            v-model="old_password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                           :rules="[passwordRules.required, passwordRules.min]"
                            :type="showPassword ? 'text' : 'password'"
                            name="input-10-2"
                            label="Old Password"
                          
                            value=""
                            class="input-group--focused"
                            @click:append="showPassword = !showPassword"
                            >
                        </v-text-field>
                        <v-text-field
                            v-model="new_password"
                            :append-icon="newPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :type="newPassword ? 'text' : 'password'"
                            name="input-10-2"
                            label="New Password"
                            hint="At least 8 characters and at least one Capital letter and one number."
                            value=""
                            class="input-group--focused"
                            @click:append="newPassword = !newPassword"
                            ></v-text-field>
                            <v-text-field
                            v-model="confirm_password"
                            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            name="input-10-2"
                            label="New Confirm Password"
                            hint="At least 8 characters and at least one Capital letter and one number."
                            value=""
                            class="input-group--focused"
                            @click:append="showConfirmPassword = !showConfirmPassword"
                            ></v-text-field>

                        <v-btn
                            color="success"
                            class="mr-4"
                           type="submit"
                            large   
                        >
                        Change
                        </v-btn>
                    
                        <v-btn
                            color="error"
                            @click="Cancel"
                            large 
                        >
                            Cancel
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script src="../../services/pages/user/changepassword.js">
</script>