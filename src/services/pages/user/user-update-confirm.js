import { mapGetters } from "vuex";

export default 
{
    data(){
        return{
            "id":this.$route.params.id,
        "edit_id": this.$route.params.edit_id,
        "name": this.$route.params.name,
        "email": this.$route.params.email,
        "phone":this.$route.params.phone,
        "address":this.$route.params.address,
        "date_of_birth":this.$route.params.date_of_birth,
        "type":this.$route.params.type,
        "profile_photo":this.$route.params.profile_photo,//new profile photo
        "created_user_id":this.$route.params.created_user_id,
        "preview_url":null,
        "profile_image":this.$route.params.profile_image,//old photo file name
        "old_photo":this.$route.params.old_photo,//old photo file name
    }
},
    computed:{
        ...mapGetters(["userType","userId"]),
    },
    mounted(){


        if (!this.profile_image) {
            this.preview_url='/img/profile.jpeg';return;
        }
            this.preview_url='http://localhost:8003/storage/images/'+this.profile_image;
    },
    
    methods:{
        Update()
        {
          
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
           // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
        }
        let formData = new FormData();
        formData.append('profile_photo', this.profile_photo);
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('date_of_birth', this.date_of_birth);
        formData.append('phone', (this.phone)?this.phone:"");
        formData.append('address', (this.address)?this.address:"");
        formData.append('type', this.type=='1'?"0":"1");
        formData.append('password', this.password);
        formData.append('password_confirmation', this.confirm_password);
        formData.append('created_user_id', this.created_user_id);
        formData.append('updated_user_id', this.userId);
        formData.append('old_photo', this.old_photo);
        formData.append('edit_id', this.edit_id);
        formData.append('profile_image', this.profile_image);
  
          for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]); 
           }
            this.$store.dispatch('updateUser',formData,config)
            .then(result=>{
                if(result){
                this.$router.push({ name: "user-list" });
            }
            else
            {
                this.$router.push({ name: "user-edit",params:formData }); 
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
            "created_user_id":this.created_user_id,
            "updated_user_id":this.userId,
            "profile_photo":this.profile_photo,
            "edit_id":this.edit_id,//edit user id
            "userId":this.id,//edit user id
            "old_photo":this.old_photo,
            "profile_image":this.profile_image
          }
            this.$router.push({ name: "user-edit" ,params:userData}); 
        }
    }
}
