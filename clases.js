class Get {
    constructor(url){
        this.url = url;
    }
    //ARMAR UN FETCH PARA TRAER API
    getPosts = async () => {
        try {
            let response = await fetch(`${this.url}`)
            if (response.status === 200){
                //SE TRANSFORMA A JSON
                let data = await response.json()
                this.#renderPosts(data)
            }else{
                console.log('Error:', response.status)
            }
        } catch (error) {
            console.log('error getPosts: ', error)
        }
    }
    //SE RENDERIZA POST PARA CONSTRUIR ELEMENTO HTML A TRAVÉS DE FOR EACH
    #renderPosts = (data) => {
        try {
            let postSave = '';
            data.forEach(post => {
                // console.log(post)
                postSave += `
                <li>
                <h3>Usuario con id ${post.userId}</h3>
                <small><strong>Post numero: ${post.id}</small></strong>
                <h2>Titulo ${post.title}</h2>
                <p>${post.body}</p>
                </li>
                `
            });
            document.getElementById('post-data').innerHTML = postSave;
        } catch (error) {
            console.log(error);
        }
    }
}

let classCreator = ()=>{
    let posts = new Get('https://jsonplaceholder.typicode.com/posts')
    posts.getPosts()
}