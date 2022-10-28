


let app =Vue.createApp({
   
    data(){
        return{
            products:[],
            prod:[]
        }
    },
    

    methods:{
        
        allRecords(){

            axios({
                url:'Product-backend/show.php',
                method:'get'
            })
            .then(res=>{
                
                
                this.products=res.data.rows
                
            })
            
            .catch(err=>{
                console.log(err);
            })
            
            
            },
        
        
        
        deleteRecord(){
            if(this.prod.lenght!== 0){
                
                    let fd = new FormData()
                    fd.append('ids',this.prod)
                    axios({
                        url:'Product-backend/delete.php',
                        method:'post',
                        data: fd
    
                    })
                    .then(res=>{
                       
                    
                        
                        this.allRecords();
                   
                  
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                }
            
                
            
        }
        
    },
    mounted:function(){
        this.allRecords()
    }
    
    


    

})
app.mount('#myapp')

