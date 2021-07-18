
<template>
  <v-card  class="mx-auto" max-width="90%">
    <v-card-text  class="text--primary"> 
        <v-row justify="center"  style="background-color:#d4d2ef">
            <v-col md="5" offset-md="2">
                <h2 class="mr-30">Post Create</h2>
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
     
       <v-form
      ref="form"
      @submit.prevent="createPost" method="post"
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
        v-model="title"       
        :rules="titleRules"
        label="Title"
        required
      ></v-text-field>
     <v-textarea
        v-model="description"
         :rules="descriptionRules"
        clearable
        clear-icon="mdi-close-circle"
        label="Description"
        value=""
      ></v-textarea> 

      <v-btn
        color="success"
        class="mr-4"
        type="submit"
           
      >
       Create
      </v-btn>
  
      <v-btn
        color="error"
         @click="resetForm"  
      >
        Cancel
      </v-btn>
    </v-form>
        
      </v-col>
    </v-row>
        </v-row>
    </v-card-text>
  </v-card>            
</template>
  
<script src="../../services/post/post-create.js">
</script>

