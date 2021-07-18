
import axios from "axios";
export default ({
 
    state: {
        profile: null,
        user:null,
        password:null
    },
    mutations: {
        setProfileData(state, data) {
            state.profile = data;
        },
        setCreatedUserData(state, data) {
            state.user = data;
        },
        setPasswordData(state,data){
            state.password=data;
            
        }
    },
    actions: {

        profile({ commit },id) {   
            console.log('id='+id);        
            return axios.get("/user/profile/"+id).then(({ data }) => {  
                console.log(data); 
                commit("setProfileData", data);   
            });
        },
        confirmUser({commit},formData,config){
         
            return axios.post("/user/createConfirm",formData,config)
            .then(function(response){
                if(response.data.isValidate)
                {
                    
                    commit("setCreatedUserData",response.data.user);
                    return response;
                }
                else
                {
                   return response; 
                } 
                
            })
            .catch(function(error){
                console.log(error);

            });

        },
        storeUser({commit},formData,config){
         
            return axios.post("/user/store",formData,config)
            .then(function(response){
               console.log("response"+response.data.user);
               console.log(response.data.errors);
                if(response.data.success)
                {
                    console.log("success="+response.data.user);                   
                    return true;
                }
                else
                {
                    commit("setCreatedUserData",response.data.user);
                   return false; 
                } 
            })
            .catch(function(error){
                console.log(error);
            });
        },
        updateConfirmUser({commit},formData,config){
         
            return axios.post("/user/updateConfirm",formData,config)
            .then(function(response){
                if(response.data.isValidate)
                {
                    
                    commit("setCreatedUserData",response.data.user);
                    return response;
                }
                else
                {
                   return response; 
                } 
                
            })
            .catch(function(error){
                console.log(error);

            });

        },
        updateUser({commit},formData,config){
         
            return axios.post("/user/update",formData,config)
            .then(function(response){
               console.log("response"+response.data.user);
               console.log(response.data.errors);
                if(response.data.success)
                {
                    console.log("success="+response.data.user);                   
                    return true;
                }
                else
                {
                    commit("setCreatedUserData",response.data.user);
                   return false; 
                } 
            })
            .catch(function(error){
                console.log(error);
            });
        },
        changePassword({commit},req){console.log(req);
            return axios.post("/user/changePassword",req)
            .then(function(response){
                if(response.data.isValidate)
                {
                    
                   commit("setPasswordData",response.data.user);
                    return response;
                }
                else
                {
                   return response; 
                } 
                
            })
            .catch(function(error){
                console.log(error);

            });
        }


    },
    getters: {
        



        
    },
    
});
