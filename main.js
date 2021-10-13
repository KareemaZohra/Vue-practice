const app = Vue.createApp({
    data : function() {
        return{
            product : 'Socks',
            description : 'Comfortable light-weight summer socks',
            image: './assets/christmas-sock.jpg',
            url : 'https://www.facebook.com',
            inventory: 8,
            details : ['50% cotton','30% wool','20% polyester']
        }
    }
})