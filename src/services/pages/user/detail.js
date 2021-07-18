import { mapGetters } from "vuex";
export default {
    data() {
        return {          
           name:'',
           email:'',
           type:'',
           phone:'',
           date_of_birth:'',
           address:'',
           created_user_name:'',
           created_at:'',
           updated_at:'',
         
           profile:null,
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn","userId"]),

  
    },
    mounted() {
        this.$axios
        .get("/user/profile/"+this.$route.params.userId)
        .then((response) => {
           console.log(response.data.user);
            this.name = response.data.user.name;
            this.email = response.data.user.email;
            this.phone= response.data.user.phone;
            this.address=response.data.user.address;
            this.date_of_birth=response.data.user.date_of_birth;
            this.type=response.data.user.type;
            this.created_at=response.data.user.created_at;
            this.created_user_name=response.data.user.created_user_name;
            this.updated_at=response.data.user.updated_at;
    


           
            this.profile='http://localhost:8003/storage/images/'+response.data.user.profile_photo;
        })
        .catch((err) => {
            console.log(err);
        });

    },
    methods: {
  
        backtoHome()
        {
            this.$router.push({name:'user-list'});
        }


    },
};
