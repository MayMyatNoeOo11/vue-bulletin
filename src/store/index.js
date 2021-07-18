import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import UserStore from "../store/user_store";
import PostStore from "../store/post_store";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    modules: {
        uStore: UserStore,
        pStore:PostStore
     },
    state: {
        user: null
    },
    mutations: {
        setUserData(state, data) {
            state.user = data;
        },
    },
    actions: {
        login({ commit }, credentials) {
            
            return axios.post("/auth/login", credentials).then(({ data }) => {  
                            
               if(data.success){
                commit("setUserData", data.user);
            }
            else{
                this.$router.push({ name: "login" });
                // commit("setUserData", null);
            }
            });
        },
        logout({ commit }, credentials) {
            return axios.post("/auth/logout", credentials).then(({data}) => {
                console.log(data);
                
                commit("setUserData", null);
            });
        },
    },
    getters: {
        isLoggedIn:(State)=>!!(State.user),
        userName:(State)=>{
            if(State.user && State.user.name)
            {return State.user.name}
        },
        
        userType:(State)=>{
            if(State.user && State.user.type)
            {return State.user.type}
        },
        userId:(State)=>{
            if(State.user && State.user.id)
            {return State.user.id}
        }


        
    },
    plugins: [createPersistedState()],
});
