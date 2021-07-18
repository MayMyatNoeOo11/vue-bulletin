import { mapGetters } from "vuex";
export default {
    data() {
        return {
            errors: [],
            id:this.$route.params.postId,
            edit_id:this.$route.params.edit_id,
            title:this.$route.params.title,
            description:this.$route.params.description,
            status:this.$route.params.status,
            created_user_id:this.$route.params.created_user_id,
            updated_user_id:this.$route.params.updated_user_id,
            titleRules: [
                v => !!v || 'Title is required',
                
              ],
              descriptionRules: [
                v => !!v || 'Description is required',
                v => (v && v.length <= 255) || 'Description must be less than 255 characters',
              ],
           
        };
    },
    computed: {
        ...mapGetters(["userType","userId"]),


    },
    mounted() {
       
        this.$axios
        .get("/post/edit/"+this.$route.params.postId)
        .then((response) => {
           
            this.title = response.data.post.title;
            this.description = response.data.post.description;
            this.created_user_id= response.data.post.created_user_id;
            this.updated_user_id=response.data.post.updated_user_id;
            this.status=response.data.post.status;
            

        })
        .catch((err) => {
            console.log(err);
        });

    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */

        update() {
           
            if(this.$refs.form.validate())
            {console.log("updateedit post id="+this.id);
                let postData={
                    "title":this.title,
                    "description":this.description,
                    "created_user_id":this.created_user_id,
                    "updated_user_id":this.userId,
                    "status":this.status,
                    "edit_id":this.id
                    };                    
                    
                    this.$store.dispatch('updateConfirmPost',postData)
                    .then(result=>{
                        let isValid=result.data.isValidate;                       

                        if(isValid)
                        { 
                            this.$router.push({ name: "post-update-confirm",params:postData });
                        }
                        else
                        {                            
                            let getErrors=result.data.errors;
                            this.errors=getErrors;
                            console.log(this.errors);
                        }
                    })
                    .catch(error=>{console.log(error);})  

            }
        },
        back () {
            this.$router.push({name:"post-list"});
        }

        
    },
};
