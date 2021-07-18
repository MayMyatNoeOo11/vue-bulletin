<template>
    <v-container>
            <v-card
                class="mx-auto"
                max-width="80%"
            >
                <v-card-text  class="text--primary"> 
                    <p class="text-h6 text--primary" >
                        Post Detail
                    </p>

                <v-row>
                    <v-col lg=7>
                        <v-row>
                            <v-col lg=3>
                                <span>Title </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{title}}</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Description </span>
                            </v-col>
                            <v-col lg=9>
                                <span><pre>{{description}}</pre></span>
                            </v-col>
                        
                        </v-row>
                        <v-row>
                            <v-col lg=3>
                                <span>Created at </span>
                            </v-col>
                            <v-col lg=9>
                                <span>{{moment(created_at).format("YYYY/MM/DD")}}</span>
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
<script src="../../services/post/detail.js">
</script>