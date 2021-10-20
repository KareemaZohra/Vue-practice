const app = Vue.createApp({
    data : function() {
        return{
            product : 'Socks',
            description : 'Comfortable light-weight summer socks',
            image: './assets/christmas-sock.jpg',
            url : 'https://www.facebook.com',
            inventory: 8,
            details : ['50% cotton','30% wool','20% polyester'],
            variants : [
                {id : 001, color : 'red', image: 'assets/christmas-sock.jpg'},
                {id : 002, color : 'green', image: 'assets/green-sock.jpg'}
            ],
            // variants is an array of objects
            cart : 0,
            inStock : false
        }
    },
    methods: {
        addToCart(){
            this.cart+=1;
            // this points to the cart key of data section.
        },
        updateImage(varImage){
            this.image=varImage;
        }
    } 
})