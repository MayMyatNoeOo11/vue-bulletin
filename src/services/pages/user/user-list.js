import { mapGetters } from "vuex";
export default {
    data() {
        return { 
            namekeyword:'',
            emailkeyword:'',
            fromkeyword:'',
            tokeyword:'',
            paths: [
                {
                  text: 'Home',
                  disabled: false,
                  href: '/post/create',
                },
                {
                  text: 'Users',
                  disabled: true,
                  href: 'breadcrumbs_link_1',
                },

              ],
      
            deleteDialog: false,
            failDialog:false,
            headerList: [
                {
                    text: "ID",                 
                    value: "id",                    
                    align:"center"

                },
                {
                    text: "User Name",
                    value: "name",
                    width:"100%",
                    align:'center'
                },
                {
                    text: "Email",
                    value: "email",
                    width:"100%",
                    align:'center'
                },
                {
                    text: "Created User",
                    value: "created_user_name",
                },
                {
                    text: "Phone",
                    value: "phone",
                    width:"100%",
                    align:'center'
                },
                {
                    text: "Birthdate",
                    value: "date_of_birth",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Created Date",
                    value: "created_at",

                },
                {
                    text: "Updated Date",
                    value: "updated_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn","userType","userId"]),
        headers() {
            if (!this.isLoggedIn && this.userType=='1') {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.retrieveUser();
        

    },
    methods: {
        retrieveUser(){
            this.$axios
            .get("/users/"+this.userId)
            .then((response) => {
                console.log(response);
                this.userList = response.data;
                this.showList=this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
        },
 
      
      
        create(){
            this.$router.push({ name: "user-create" });
        },
        detailUser(id)
        { 
        console.log("detail user id="+id);
        this.$router.push({name:"user-detail",params:{ userId: id }});
        },
        editUser(id){
            console.log("edit user id="+id);
          this.$router.push({name:"user-edit",params:{ userId: id }});

        },
        deleteUser(id){ 
          
            this.$axios
            .get("/user/checkDelete/"+id)
            .then((response) => {
                console.log("can delete="+response.data.canDelete);
              if(response.data.canDelete){
                this.deleteDialog=true;
                this.deleteUserid=id;
              }
              else{
                this.failDialog=true;
              }
            })
            .catch((err) => {
                console.log(err);
            });

       
               

        

            
        },
        deleteUserModal()
        {
            let req={
            "id":this.deleteUserid,
            "deleted_user_id":this.userId};       

            this.$axios.post("/user/destroy",req)
            .then(()=>{ this.retrieveUser();})
            .catch(()=>{})
            this.deleteDialog=false;

        },

    
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterUser() {
            // let searchValues={"name":this.namekeyword,
            //                     "email":this.emailkeyword,
            //                     "created_from_date":this.fromkeyword,
            //                     "created_to_date":this.tokeyword,
            //                     "id":this.userId};

            //                     this.$axios.post("/user/search",searchValues)
            //                     .then((response)=>{ this.showList=response.data;})
            //                     .catch(()=>{})
            
            this.showList = this.userList.filter((user) => {
                return (
                    user.name.includes(this.namekeyword) &&
                    user.email.includes(this.emailkeyword) 
                );  
             });

             
 

         
        },
    },
};
