




const app =Vue.createApp({

    components:{
      
    VForm: VeeValidate.Form,
    VField: VeeValidate.Field,
    ErrorMessage: VeeValidate.ErrorMessage,

        
    },
    
    
    
    data() {
        
        const schema = Yup.object().shape({
            
            sku: Yup.string().required('Please, submit required data'),
            
            name: Yup.string().required('Please, submit required data'),
            
            price:Yup.number().transform((value, originalValue) => {
                return (originalValue === '' ? undefined : value)
            }).required('Please, submit required data').positive().typeError('Please, provide the data of indicated type'),
            
            size :Yup.number().when('type', {
                is: (type)=> type==='size', 
                then: Yup.number().transform((value, originalValue) => {
                    return (originalValue === '' ? undefined : value)
                }).required('Please, submit required data').positive().typeError('Please, provide the data of indicated type'),
                otherwise:Yup.number(),
            }),
            
            weight :Yup.number().typeError('Please, provide the data of indicated type').when('type', {
                is: (type)=> type==='weight', 
                then: Yup.number().transform((value, originalValue) => {
                    return (originalValue === '' ? undefined : value)
                }).required('Please, submit required data').positive().typeError('Please, provide the data of indicated type'),
               otherwise:Yup.number(),
            }),
            
            height :Yup.number().when('type', {
                is: (type)=> type==='dimensions', 
                then: Yup.number().transform((value, originalValue) => {
                    return (originalValue === '' ? undefined : value)
                }).required('Please, submit required data').positive().typeError('Please, provide the data of indicated type'),
                otherwise: Yup.number(),
            }),
            
            width :Yup.number().when('type', {
                is: (type)=> type==='dimensions', 
                then: Yup.number().transform((value, originalValue) => {
                    return (originalValue === '' ? undefined : value)
                }).required('Please, submit required data').positive().typeError('Please, provide the data of indicated type'),
                otherwise: Yup.number(),
            }),
            
            lenght :Yup.number().when('type', {
                is: (type)=> type==='dimensions', 
                then: Yup.number().transform((value, originalValue) => {
                    return (originalValue === '' ? undefined : value)
                }).required('Please, submit required data').positive().typeError('Please, provide the data of indicated type'),
                otherwise: Yup.number(),
            }),                        
        });
        
        
       
        
        
    return {
    schema,
    sku:'',
    name:'',
    price:'',
    stype:'size',
    attribute:'',
    size:'',
    weight:'',
    width:'',
    height:'', 
    lenght:'',  
    skuTaken:false
    }

}, 

computed:{

currency:function(){
return parseFloat(this.price).toFixed(2)
},
dimensions:function(){
    return this.attribute=this.height+'x'+this.width+'x'+this.lenght
}

},

watch:{
    size:function(val){
    this.attribute=val+' mb'
    },
    weight:function(val){
    this.attribute=val+' kg'
    },
    lenght:function(){
        this.attribute=this.dimensions
    }
   
        
   
},
methods:{
 
    
    
    submit(){
      
        
        let fd=new FormData()
        fd.append('sku',this.sku)
        fd.append('name',this.name)
        fd.append('price',this.currency)
        fd.append('attribute',this.attribute)
        fd.append('stype',this.stype)
        axios({
            url:'Product-backend/insert.php',
            method: 'post',
            data: fd
        })
        .then(res=>{
           
            if(res.data.res ==='skuTaken'){
            this.skuTaken=true;
            }else if(res.data.res ==='success'){
            this.skuTaken=false;
            window.location = '/juniortest.janis.malinovskis/index.html'
            }
            
            
            console.log(res.data.res)
            
        })
        
}

}
   

})
app.mount('#app')
