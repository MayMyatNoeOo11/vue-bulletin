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
                    <v-form @submit="formSubmit" enctype="multipart/form-data">
                        <span>Upload File</span>
                        <v-file-input
                            label="Choose CSV file"
                            outlined
                            dense
                            v-on:change="onChange"
                        ></v-file-input>
                    </v-form>

                </v-col>
            </v-row>
                                    <v-btn
                            color="success"
                            class="mr-4"
                           
                            large   
                        >
                        Upload
                        </v-btn>
                    
                        <v-btn
                            color="error"
                            
                            large 
                        >
                            Cancel
                        </v-btn>

        </v-card-text>
    </v-card>
</template>