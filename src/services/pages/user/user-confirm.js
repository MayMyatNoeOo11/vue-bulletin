import { mapGetters } from "vuex";

export default 
{
    data(){
        return{
        "name": this.$route.params.name,
        "email": this.$route.params.email,
        "phone":this.$route.params.phone,
        "address":this.$route.params.address,
        "date_of_birth":this.$route.params.date_of_birth,
        "type":this.$route.params.type,
        "profile_photo":this.$route.params.profile_photo,
        "password":this.$route.params.password,
        "confirm_password":this.$route.params.confirm_password,
        "preview_url":null,
        "profile_photo_name":this.$route.params.profile_photo_name
    }
},
    computed:{
        ...mapGetters(["userType","userId"]),
    },
    mounted(){
      

        if (!this.profile_photo) {
            this.preview_url='/img/profile.jpeg';return;
        }
            this.preview_url=URL.createObjectURL(this.profile_photo);
    },
    
    methods:{
        Create()
        {
            
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
           // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
        }
        let formData = new FormData();
        formData.append('profile_photo', this.profile_photo_name);
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('date_of_birth', this.date_of_birth);
        formData.append('phone', (this.phone)?this.phone:"");
        formData.append('address', (this.address)?this.address:"");
        formData.append('type', this.type=='1'?"0":"1");
        formData.append('password', this.password);
        formData.append('password_confirmation', this.confirm_password);
        formData.append('created_user_id', this.userId);
        formData.append('updated_user_id', this.userId);


  
          for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
           }
            this.$store.dispatch('storeUser',formData,config)
            .then(result=>{
                if(result){
                this.$router.push({ name: "user-list" });
            }
            else
            {
                this.$router.push({ name: "user-create",params:formData }); 
            }
            })
            .catch(error=>{
                console.log(error);
            })

        },

        Cancel(){ 
            let userData={
            "name":this.name,
            "email":this.email,
            "date_of_birth":this.date_of_birth,
            "phone":this.phone,
            "address":this.address,
            "password":this.password,
            "type":this.type,
            "created_user_id":this.userId,
            "updated_user_id":this.userId,
            "profile_photo":this.profile_photo
          }
            this.$router.push({ name: "user-create" ,params:userData}); 
        }
    }
}
