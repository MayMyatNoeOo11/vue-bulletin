

export default 
{
    data(){
        return{
        "title": this.$route.params.title,
        "description": this.$route.params.description,
        "updated_user_id": this.$route.params.updated_user_id,
        "created_user_id": this.$route.params.created_user_id,
        "edit_id": this.$route.params.edit_id,
        "status":this.$route.params.status
    }
},
    computed:{
      
    },
    mounted(){},
    
    methods:{
        Update()
        {
            console.log("confirm edit post id="+this.edit_id);
            let postData={
                "title":this.title,
                "description":this.description,
                "created_user_id":this.created_user_id,
                "updated_user_id":this.updated_user_id,
                "edit_id":this.edit_id,
                "status":this.status
                };
            this.$store.dispatch('updatePost',postData)
            .then(result=>{
               
                if(result){
                this.$router.push({ name: "post-list"});
            }
            else
            {
                this.$router.push({ name: "post-edit",params:postData }); 
            }
            })
            .catch(error=>{
                console.log(error);
            })

        },

        Cancel(){ let postData={
            "title":this.title,
            "description":this.description,
            "edit_id":this.edit_id,
            "updated_user_id":this.updated_user_id,
            "created_user_id":this.created_user_id,
            "status":this.status
            };
            this.$router.push({ name: "post-edit" ,params:postData}); 
        }
    }
}
