import { mapGetters } from "vuex";

export default 
{
    data(){
        return{
        "title": this.$route.params.title,
        "description": this.$route.params.description
    }
},
    computed:{
        ...mapGetters(["userType","userId"]),
    },
    mounted(){},
    
    methods:{
        Create()
        {console.log("userId="+this.userId);
            let postData={
                "title":this.title,
                "description":this.description,
                "created_user_id":this.userId,
                "updated_user_id":this.userId,
                };
            this.$store.dispatch('storePost',postData)
            .then(result=>{
                if(result){
                this.$router.push({ name: "post-list",params:postData });
            }
            else
            {
                this.$router.push({ name: "post-create",params:postData }); 
            }
            })
            .catch(error=>{
                console.log(error);
            })

        },

        Cancel(){ 
            let postData={
            "title":this.title,
            "description":this.description
            };
            this.$router.push({ name: "post-create" ,params:postData}); 
        }
    }
}
