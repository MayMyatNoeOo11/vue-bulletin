

import { mapGetters } from "vuex";
export default {
    data() {
        return {
           
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn","userId"]),

    },
    mounted() {



    },
    methods: {
        gotoProfile() {   
            console.log(this.userId)         
            this.$store
            .dispatch("profile", this.userId
            )
            .then(() => {this.$router.push({ name: "user-profile" });
                this.error = "";                
            })
            .catch(err => {
                this.error = err.response.data.errors.message;
                //console.log(err);
            });
        },
        gotoPosts() {
            this.$router.push({ name: "post-list" });
        },
        gotoUsers() {
            this.$router.push({ name: "user-list" });
        }

    },
};

