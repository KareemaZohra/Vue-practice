const app = Vue.createApp({
    data : function() {
        return{
            brand : 'Nike',
            product : 'Socks',
            description : 'Comfortable light-weight summer socks',
            //image: './assets/christmas-sock.jpg',
            url : 'https://www.facebook.com',
            inventory: 8,
            details : ['50% cotton','30% wool','20% polyester'],
            variants : [
                {id : 001, color : 'red', image: 'assets/christmas-sock.jpg', quantity : 30},
                {id : 002, color : 'green', image: 'assets/green-sock.jpg', quantity : 0}
            ],
            // variants is an array of objects
            cart : 0,
            inStock : false,
            selectedVariant: 0
        }
    },
    methods: {
        addToCart(){
            this.cart+=1;
            // this points to the cart key of data section.
        },
        updateImage(varImage){
            this.image=varImage;
        },
        updatevariant(index){
            // here index is loop index; 0,1,2... etc
            this.selectedVariant=index;
        }
    },
    computed: {
        title(){
            return this.brand+' '+this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image
        }
    }
})