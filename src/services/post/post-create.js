import { mapGetters } from "vuex";
export default {
    data() {
        return {
            errors: [],
            title:this.$route.params.title,
            description:this.$route.params.description,
            
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

    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */

        createPost(e) {
            e.preventDefault();           
        
        
               if(this.$refs.form.validate())
               {
                   let postData={
                    "title":this.title,
                    "description":this.description,
                    "created_user_id":this.userId,
                    "updated_user_id":this.userId,
                    };                    
                    
                    this.$store.dispatch('confirmPost',postData)
                    .then(result=>{
                        let isValid=result.data.isValidate;                       

                        if(isValid)
                        { 
                            this.$router.push({ name: "post-create-confirm",params:postData });
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
        resetForm () {
            this.$router.push({ name: "post-list"});
        }

        
    },
};
