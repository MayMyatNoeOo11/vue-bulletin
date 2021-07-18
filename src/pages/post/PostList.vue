<template>
<v-card>
    <v-card-title>
        Post list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field v-model="keyword" label="Search keyword" hide-details="auto"></v-text-field>
                </v-col>
                <v-btn class="post-list-btn mr-4" color="primary" @click="filterPost()">Filter</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary" @click="createPost()">Create</v-btn>
                <v-btn class="post-list-btn mr-4 " color="primary" @click="uploadPost()">Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary" @click="downloadPost()">Download</v-btn>
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
      <v-alert
        dense
        text
        type="success"
        dismissible
        :value="alert"
      >
        {{alertMessage}}
      </v-alert>

        <v-data-table :headers="headers" :items="showList">

            <template v-slot:[`item.title`]="{ item }">
                <a v-if="item.title"  @click="detailPost(item.id)">{{item.title}}</a>
            </template>

            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <v-btn color="primary" class="post-list-btn" @click="editPost(item.id)">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="post-list-btn" @click="deletePost(item.id)">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    
        <template>
            <v-layout row justify-center>
                <v-dialog v-model="deleteDialog" max-width="400" >
                    <v-card>
                        <v-card-title>Delete Post Confirmation</v-card-title>
                        <v-card-text>Are you sure to delete.</v-card-text>
                        <v-card-actions><v-spacer></v-spacer>
                        <v-btn color="green darken-1" @click="deletePostModal">Delete</v-btn>
                            <v-btn color="grey darken-1"  @click="deleteDialog=false">Cancel
                            </v-btn>
                            

                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </template>

    </v-container>
</v-card>
</template>

<script src="../../services/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>


