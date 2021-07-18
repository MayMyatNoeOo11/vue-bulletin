import { mapGetters } from "vuex";
import axios from "axios";
export default {
    data() {
        return {  
            name:'',
            email:'',
            address:'',
            phone:'',
            date_of_birth:'',
            type:'',
            profile:null,
            
            
           
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn","userId"]),
    //     name() {
         
    //   return this.$store.state.uStore.profile.name
    //     },
    // email() {
        
    //     return this.$store.state.uStore.profile.email
    //     },
    // phone() {
    //      return this.$store.state.uStore.profile.phone
    //     },
    // address() {
    //     return this.$store.state.uStore.profile.address
    //     },
    // date_of_birth() {
    //     return this.$store.state.uStore.profile.date_of_birth
    //     },
    // type() {
    //     return this.$store.state.uStore.profile.type
    //     },
    // profile(){
       
    //    return 'http://localhost:8003/storage/images/'+this.$store.state.uStore.profile.profile_photo
    // }  
    },
    mounted() {
       // console.log('profile='+this.$store.state.uStore.profile.profile_photo);  
         axios.get("/user/profile/"+this.userId)
         .then(({ data }) => {  
            console.log(data); 
            this.name=data.user.name;
            this.email=data.user.email;
            this.address=data.user.address;
            this.phone=data.user.phone;
            this.type=data.user.type;
            this.date_of_birth=data.user.date_of_birth;
            this.profile='http://localhost:8003/storage/images/'+data.user.profile_photo;
          
        }); 

    },
    methods: {
        editProfile()
        {
            this.$router.push({name:"user-edit",params:{ userId: this.userId }});
        },
        backtoHome()
        {
            this.$router.push({name:'homeCommon'});
        }


    },
};
