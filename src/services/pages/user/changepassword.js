import { mapGetters } from "vuex";
export default {
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
            newPassword: false,
            old_password:'',
            new_password:'',
            confirm_password:'',
            change_id:this.$route.params.data.edit_id,
            his_password:this.$route.params.data.his_password,
            errors:[],

              passwordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                
              }
           
        };
    },
    computed: {...mapGetters(["isLoggedIn","userId"]),
    },
    mounted() {
  
    },
    methods: {  
        changePassword(e) 
        {
            e.preventDefault();
            if(this.$refs.form.validate())
            {
              let req={
                "password":this.his_password,
                "old_password":this.old_password,
                "new_password":this.new_password,
                "new_confirm_password":this.confirm_password,
                "id":this.change_id,
                "updated_user_id":this.userId
              };

              this.$store.dispatch('changePassword',req)
                .then(result=>{
                 
                    let isValid=result.data.isValidate;                       

                    if(isValid)
                    { 

                        this.$router.push({ name: "user-edit",params:{ userId: this.change_id} });
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

        Cancel()
        {
          this.$router.push({name:"user-edit",params:{ userId: this.change_id }});
        }
        
    },
};
