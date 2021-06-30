const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon',
            age: 45,
            x: 0,
            y:0,
            books: [
                {title: 'name of', author: 'patrick'},
                {title: 'the way', author: 'band'}
            ]
        }
    },
    Methods: {
        toggleShowBooks(){
            this.showBooks = false 
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetx
        }
    }
})

