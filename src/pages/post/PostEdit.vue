<template>
 
  <v-app >    
    <v-row justify="center">
      <v-col
        cols="12"
        sm="12"
        md="10"
        lg="10"
      >
      <h2>Edit Post</h2>
       <v-form
      ref="form"
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
            <v-checkbox
        v-model="status"
        label="Status"
      ></v-checkbox>
      <v-btn
        color="success"
        class="mr-4"
        @click="update"   
      >
       Update
      </v-btn>
  
      <v-btn
        color="error"
         @click="back"  
      >
        Cancel
      </v-btn>
    </v-form>
        
      </v-col>
    </v-row>
  </v-app>

</template>
<script src="../../services/post/post-edit.js">
</script>

