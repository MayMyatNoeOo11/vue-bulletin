export default{
    data:()=>
    ({

    }),
    methods:{
        onChange(e) {
            this.file = e.target.files[0];
        },
        formSubmit(e) {
            e.preventDefault();
            let existingObj = this;

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            let data = new FormData();
            data.append('file', this.file);

            axios.post('/upload', data, config)
            .then(function (res) {
                existingObj.success = res.data.success;
            })
            .catch(function (err) {
                existingObj.output = err;
            });
        }
    }

}