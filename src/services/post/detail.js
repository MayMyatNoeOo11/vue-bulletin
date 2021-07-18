import { mapGetters } from "vuex";
export default {
    data() {
        return {          
            title:'',
            description:'',
           created_user_name:'',
           created_at:'',
           updated_at:'',   
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn","userId"]), 
    },
    mounted() {
        this.$axios
        .get("/post/"+this.$route.params.postId)
        .then((response) => {
           console.log(response.data.post);
            this.title = response.data.post.title;
            this.description = response.data.post.description;
            this.created_at= response.data.post.created_at;
            this.created_user_name=response.data.post.name;
          
        })
        .catch((err) => {
            console.log(err);
        });

    },
    methods: {
  
        backtoHome()
        {
            this.$router.push({name:'post-list'});
        }


    },
};
