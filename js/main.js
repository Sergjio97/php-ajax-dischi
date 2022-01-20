const app = new Vue ({
    el : "#app",
    data() {
        return {
            albumList: [],
        }
    },
    
    created() {
        axios.get("http://localhost:8080/api-dischi/")
        .then( (response) => {
            this.albumList = response.data;
        });
    }
})