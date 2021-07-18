<template>

        <v-row justify="center" >
            <v-col md="5" offset-md="1">
                <v-btn @click="gotoProfile">Profile
                </v-btn>      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
                <v-btn @click="gotoPosts">Posts
                </v-btn>      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
                <v-btn @click="gotoUsers">Users
                </v-btn>
            </v-col>
        </v-row>

</template>
<script src="../../services/pages/user/common.js">
</script>