<template>
<v-card>
          <v-breadcrumbs :items="paths">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    <v-card-title>


        <v-row>
            <v-col md="12">
                <h2 class="mr-30">User List</h2>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
      
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Name" hide-details="auto" v-model="namekeyword"></v-text-field>
                </v-col>
                <v-col md="2.5">
                    <v-text-field label="Email" hide-details="auto" v-model="emailkeyword"></v-text-field>
                </v-col>
                <v-col md="2.5">
                    <v-text-field label="Create From" hide-details="auto" v-model="fromkeyword"></v-text-field>
                </v-col>
                <v-col md="2.5">
                    <v-text-field label="Created To" hide-details="auto" v-model="tokeyword"></v-text-field>
                </v-col>               
                <v-btn class="post-list-btn mr-4 mt-7" color="primary" @click="filterUser()">Filter</v-btn>
                <v-btn class="post-list-btn mr-4 mt-7" color="primary" @click="create">Create</v-btn>

            </v-row>
        </v-form>
           
    </v-card-title>
    
    <v-container>
        <v-data-table dense class="elevation-1" :headers="headers" :items="showList">
            <template v-slot:[`item.name`]="{ item }">
                <a v-if="item.name" @click="detailUser(item.id)">{{item.name}}</a>               
            </template>
            <template v-slot:[`item.created_at`]="{ item }">                
                 {{moment(item.created_at).format("YYYY/MM/DD")}}          
            </template>
            <template v-slot:[`item.updated_at`]="{ item }">                
                 {{moment(item.updated_at).format("YYYY/MM/DD")  }}           
            </template>
            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <v-btn color="primary" class="post-list-btn" @click="editUser(item.id)">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="post-list-btn"  @click="deleteUser(item.id)">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
        <template>
            <v-layout row justify-center>
                <v-dialog v-model="deleteDialog" max-width="400" >
                    <v-card>
                        <v-card-title>Delete User Confirmation</v-card-title>
                        <v-card-text>Are you sure to delete.</v-card-text>
                        <v-card-actions><v-spacer></v-spacer>
                        <v-btn color="green darken-1" @click="deleteUserModal">Delete</v-btn>
                            <v-btn color="grey darken-1"  @click="deleteDialog=false">Cancel
                            </v-btn>
                            

                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </template>
        <template>
            <v-layout row justify-center>
                <v-dialog v-model="failDialog" max-width="400" >
                    <v-card>
                        <v-card-title>User delete fail.</v-card-title>
                        <v-card-text>This user is created post and cannot be deleted.</v-card-text>
                        <v-card-actions><v-spacer></v-spacer>
                        <v-btn color="green darken-1" @click="failDialog=false">OK</v-btn> 
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </template>



    </v-container>
</v-card>

</template>

<script src="../../services/pages/user/user-list.js">
</script>
<style scoped src="../../assets/css/pages/user/user-list.css">
</style>




