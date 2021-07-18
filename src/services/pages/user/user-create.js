import { mapGetters } from "vuex";
export default {
    data() {
        return {

            showPassword: false,// for eye
            showConfirmPassword: false,//for eye
            dobMenu: false,
            minDate: "1900-01-01",//for dob
            maxDate: "2020-10-10",  //for dbo
            errors: [],

            name:this.$route.params.name,
            email:this.$route.params.email,
            password:this.$route.params.password?this.$route.params.password:'',
            confirm_password:this.$route.params.password?this.$route.params.password:'',              
            date_of_birth:this.$route.params.date_of_birth,          
            address:this.$route.params.address?this.$route.params.address:'',
            phone:this.$route.params.phone?this.$route.params.phone:'',
            type:this.$route.params.type,
            dobVal: this.$route.params.date_of_birth,
            profile_photo:this.$route.params.profile_photo,
            preview_url:null,
         
            userType:[{id:1,name:'Admin'},{id:2,name:'User'}],//for select option
            
            nameRules: [
                v => !!v || 'Name is required',
                
              ],
              emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ],
              profileRules:[
                //v => !!v || 'Profile photo is required.',
                //v => (v && v.length > 0) || 'File is required',
               // files=>!files||!files.some(file=>file.size>2e6)||'Profile size should be less than 2 MB!'
                
              ],
              passwordRules: {
                required: v => !!v || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
               
              },
              confirmPasswordRules: {
                required: v => !!v || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
               
              },

              //form
              valid: true,
           
        };
    },
 
    computed: {
      ...mapGetters(["isLoggedIn","userId"]),
      passwordMatch() {
        return () => this.password === this.confirm_password || "Password must match";
      },
        dobDisp() {
            return this.dobVal;
    
          },

    },
    mounted() {
      if (!this.profile_photo) {
        this.preview_url='/img/profile.jpeg';return;
    }
        this.preview_url=URL.createObjectURL(this.profile_photo);

 
    },
    methods: {


      Preview()
      { 
        if (!this.profile_photo) 
        {
        this.preview_url='/img/profile.jpeg';return;}
        this.preview_url=URL.createObjectURL(this.profile_photo);
        
      },


      createUser(e) 
      {
          e.preventDefault();

          if(this.$refs.form.validate())
          {          
   
              const config = {
                  headers: { 'content-type': 'multipart/form-data' },
                 // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
              }
              let formData = new FormData();
              formData.append('profile_photo', this.profile_photo);
              formData.append('name', this.name);
              formData.append('email', this.email);
              formData.append('date_of_birth', this.dobVal);
              formData.append('phone', this.phone);
              formData.append('address', this.address);
              formData.append('type', this.type);
              formData.append('password', this.password);
              formData.append('password_confirmation', this.confirm_password);
              formData.append('created_user_id', this.userId);
              formData.append('updated_user_id', this.userId);
                for(var pair of formData.entries()) {
                  console.log(pair[0]+ ', '+ pair[1]); 
                 }
                 

                 this.$store.dispatch('confirmUser',formData,config)
                 .then(result=>{
                     let isValid=result.data.isValidate;                       

                     if(isValid)
                     { 
                      let userData={"name":this.name,
                      "email":this.email,
                      "date_of_birth":this.dobVal,
                      "phone":this.phone,
                      "address":this.address,
                      "password":this.password,
                      "confirm_password":this.confirm_password,
                      "type":this.type,
                      "created_user_id":this.userId,
                      "updated_user_id":this.userId,
                      "profile_photo":this.profile_photo,
                      "profile_photo_name":result.data.profileImage
                    }
                         this.$router.push({ name: "user-create-confirm",params:userData });
                     }
                     else
                     {                            
                         let getErrors=result.data.errors;
                         this.errors=getErrors;
                         console.log(this.errors);
                     }
                 })
                 .catch(error=>{console.log(error);})  
          }//end if
          else
          {
            console.log("Fill required fields.");
          }
     
                      
        },
        resetForm () {
          this.$router.push({ name: "user-list"});
        }

        
    },
};
