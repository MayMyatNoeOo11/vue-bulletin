import { mapGetters } from "vuex";
export default {
    data() {
        return {

            deleteDialog: false,
            keyword:'',
          alert:false,
          alertMessage:'',
            deletePostid:'',
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "name",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn","userId"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
     this.retirevePost();
    },
    methods: {
        retirevePost()
        {
            this.$axios
            .get("/posts")
            .then((response) => {
                console.log(response);
                this.postList = response.data;
                this.showList=this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
        },
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPost() {
            if(this.keyword!=''){

            this.showList= this.postList.filter(post=>{
                return (post.title.toLowerCase().includes(this.keyword.toLowerCase())||
                        post.description.toLowerCase().includes(this.keyword.toLowerCase())||
                        post.name.toLowerCase().includes(this.keyword.toLowerCase()));
            });
        }
        else
        {
            this.showList=this.postList;
        }
        },
        uploadPost()
        { 
            this.$router.push({ name: "post-upload" });
        },
                                                                                                                                                                                                                                                                                                                                                                                                      ()
        {
            this.$axios
            .get("/post/export")
            .then((response) => {
                console.log(response);

            })
            .catch((err) => {
                console.log(err);
            });
        },
        createPost() {
            this.$router.push({ name: "post-create" });
        },
        detailPost(id){
            console.log("detail post id="+id);
          this.$router.push({name:"post-detail",params:{ postId: id }});

        },
        editPost(id){
            console.log("edit post id="+id);
          this.$router.push({name:"post-edit",params:{ postId: id }});

        },
        deletePost(id){

            this.deleteDialog=true;
            this.deletePostid=id;
            
        },
        deletePostModal()
        {
            let req={
                "id":this.deletePostid,
                "updated_user_id":this.userId};
           

            this.$axios.post("/post/destroy",req)
            .then(()=>{ this.retirevePost();})
            .catch(()=>{})
            this.deleteDialog=false;
        }
        
    },
};
