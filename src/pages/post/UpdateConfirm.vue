<template>
  <v-card  class="mx-auto" max-width="90%">
    <v-card-text  class="text--primary"> 
        <v-row justify="center"  style="background-color:#d4d2ef">
            <v-col md="5" offset-md="2">
                <h2 class="mr-30">Post Update Confirm</h2>
            </v-col>
        </v-row>
        <v-row justify="center">
          <v-row justify="center">
            <v-col
                cols="12"
                sm="12"
                md="10"
                lg="10"
            >
                <v-row>
                    <v-col lg="2">
                        <span>Title </span>
                    </v-col>
                    <v-col lg="10">
                        <span>{{title}}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col lg="2">
                        <span>Description :</span>
                    </v-col>
                    <v-col lg="10">
                        <span>{{description}}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col lg="2">
                        <span>Status :</span>
                    </v-col>
                    <v-col lg="10">
                        <span>{{status? 'Active' : 'Not Active'}}</span>
                    </v-col>
                </v-row>     
        
            </v-col>
            </v-row>

        </v-row>
            <v-btn
                color="success"
                class="mr-4" 
                @click="Update()"        
            >
             Confirm
            </v-btn>
  
            <v-btn
                color="error"
                @click="Cancel()"         
            >Cancel
            </v-btn>
   
    </v-card-text>
    
  </v-card> 
             
</template>
<script src="../../services/post/post-update-confirm.js">
</script>