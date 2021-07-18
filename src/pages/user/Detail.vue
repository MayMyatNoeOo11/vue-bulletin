<template>
    <v-container>
            <v-card
                class="mx-auto"
                max-width="80%"
            >
                <v-card-text  class="text--primary"> 
                    <p class="text-h6 text--primary" >
                        User Detail
                    </p>

                <v-row>
                    <v-col lg=7>
                        <v-row>
                            <v-col lg=3>
                                <span>User Name </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{name}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Email </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{email}}</span>
                            </v-col>
                        
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Type </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{type=="1"?"User":"Admin"}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Phone </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{phone}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Date of Birth</span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{date_of_birth}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Created User </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{created_user_name}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Created at </span>
                            </v-col>
                            <v-col lg=9>
                                <span> {{moment(created_at).format("YYYY/MM/DD")}}</span>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col lg=3>
                                <span>Updated at </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{moment(updated_at).format("YYYY/MM/DD")}}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col lg=4>
                        Profile
                        <v-img
                            v-bind:src="profile"
                            max-height="180"
                            max-width="200"
                            
                        ></v-img>
                    </v-col>
                </v-row> 
                        <v-row>
                            <v-col lg=2>
                                <span>Address</span>
                            </v-col>
                            <v-col lg=10 style="padding-left:0">
                                <span><pre>{{address}}</pre></span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col  md="1" offset-md="5">
                            <v-btn large @click="backtoHome()">OK</v-btn>
                            </v-col>
                        </v-row>
                </v-card-text>
            
            </v-card>
    </v-container>
</template>
<script src="../../services/pages/user/detail.js">
</script>