import { mapGetters } from "vuex";
export default {
    data() {
        return {
          id:this.$route.params.userId,
          errors:[],
          minDate: "1900-01-01",
          maxDate: "2019-08-30", 
          dobMenu: false,  
          created_user_id:'',
          his_password:'',

        
          edit_id:this.$route.params.edit_id,
            name:this.$route.params.name,
            email:this.$route.params.email,
            dobVal:this.$route.params.date_of_birth, 
            address:this.$route.params.address?this.$route.params.address:'',
            phone:this.$route.params.phone?this.$route.params.phone:'',
            type:this.$route.params.type,
            preview_url:null,
            profile_photo:this.$route.params.profile_photo,
            old_photo:this.$route.params.old_photo,//old profile name
            old_profile:'http://localhost:8003/storage/images/'+this.$route.params.old_photo,//old profile src
           

         
            userType:[{id:1,name:'Admin'},{id:2,name:'User'}],
            nameRules: [
                v => !!v || 'Name is required',
                
              ],
              emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ],
              passwordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered do not match'),
              },
              confirmPasswordRules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered do not match'),
              }
           
        };
    },
    computed: {
      ...mapGetters(["isLoggedIn","userId"]),
        dobDisp() {
            return this.dobVal;
      
          },


    },
    mounted() {
      console.log("profile-photo="+this.$route.params.profile_photo);
      console.log("old-photo="+this.$route.params.old_photo);
      console.log("profile_image="+this.$route.params.profile_image);

      this.$axios
      .get("/user/edit/"+this.$route.params.userId)
      .then((response) => {
         console.log(response.data.user);
          this.name = response.data.user.name;
          this.email = response.data.user.email;
          this.phone= response.data.user.phone;
          this.address=response.data.user.address;
          this.dobVal=response.data.user.date_of_birth;
          this.created_user_id=response.data.user.created_user_id;
          this.his_password=response.data.user.password;
          if(response.data.user.type=='0')
          {
            this.type=1
          }
          else
          {this.type=2
          }
          this.old_photo=response.data.user.profile_photo;
          this.old_profile='http://localhost:8003/storage/images/'+this.old_photo;
          

      })
      .catch((err) => {
          console.log(err);
      });

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
        this.preview_url='/img/profile.jpeg';return;
        }
        this.preview_url=URL.createObjectURL(this.profile_photo);
        
      },
      changePassword()
      {
        console.log("Edit user id="+this.id);
        console.log("his password="+this.his_password);
        let data={'edit_id':this.id,
      'his_password':this.his_password}
        this.$router.push({name:"change-password",params:{data}});
      },

      updateUser(e) 
      {
          e.preventDefault();
          if(this.$refs.form.validate())
          {
                const config = {
                  headers: { 'content-type': 'multipart/form-data' },               
                        }
              let formData = new FormData();
              formData.append('profile_photo', this.profile_photo);
              formData.append('name', this.name);
              formData.append('email', this.email);
              formData.append('date_of_birth', this.dobVal);
              formData.append('phone', this.phone);
              formData.append('address', this.address);
              formData.append('type', this.type);
 
              formData.append('created_user_id', this.created_user_id);
              formData.append('updated_user_id', this.userId);
              formData.append('old_photo', this.old_photo);
              formData.append('id', this.id);
                for(var pair of formData.entries()) {
                  console.log(pair[0]+ ', '+ pair[1]); 
                }
                this.$store.dispatch('updateConfirmUser',formData,config)
                .then(result=>{
                  console.log("profileImage="+result.data.profileImage);
                    let isValid=result.data.isValidate;                       

                    if(isValid)
                    { 
                     let userData={
                     "name":this.name,
                     "email":this.email,
                     "date_of_birth":this.dobVal,
                     "phone":this.phone,
                     "address":this.address,
                     "password":this.password,
                     "confirm_password":this.confirm_password,
                     "type":this.type,
                     "created_user_id":this.created_user_id,
                     "updated_user_id":this.userId,
                     "profile_photo":this.profile_photo,
                     "profile_image":result.data.profileImage,
                     "old_photo":this.old_photo,
                     "id":this.id,
                     "edit_id":this.id

                   }
                        this.$router.push({ name: "user-update-confirm",params:userData });
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
      },

        Cancel () {
           this.$router.push({name:"user-list"});
        }

        
    },
};
