import axios from "axios";
export default({
    state:{

post:null
    },
    getters:{
        createdPostData:(State)=>State.post

    },    
    actions:{
        confirmPost({commit},postData){
            console.log('postdata='+postData);
            return axios.post("/post/createConfirm",postData)
            .then(function(response){
               
                if(response.data.isValidate)
                {
               
                    commit("setPostData",response.data.post);
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
        storePost({commit},postData){
            console.log('postdata='+postData);
            return axios.post("/post/store",postData)
            .then(function(response){
               console.log("succcess="+response.data.success);
               console.log(response.data.message);
                if(response.data.success)
                {
                    console.log("success="+response.data.post);
                   
                    return true;
                }
                else
                {
                    commit("setPostData",response.data.post);
                   return false; 
                } 
            })
            .catch(function(error){
                console.log(error);
            });
        },
        updateConfirmPost({commit},postData){
            
            return axios.post("/post/updateConfirm",postData)
            .then(function(response){
               
                if(response.data.isValidate)
                {
                    
                    commit("setPostData",response.data.post);
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
        updatePost({commit},postData){
         
            return axios.post("/post/update",postData)
            .then(function(response){
               
               console.log("response success="+response.data.success);
                if(response.data.success)
                {
                   
                   
                    return true;
                }
                else
                {
                    commit("setPostData",response.data.post);
                   return false; 
                } 
            })
            .catch(function(error){
                console.log(error);
            });
        },
        
        

 

        
    },
    mutations:{
        setPostData(state,data)
        {
            state.post=data.post;
        }
    },

});