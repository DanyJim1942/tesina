const fetchPost = ()=> {
    
    return fetch ('https://jsonplaceholder.tapycode.comm/post')
    .then(res => console.log('hola'))
}

export default async function PostCte ({params}){
    const post = await fetchPost()

    return (
        <section>
            {post.map(post => (
                <article key={(post.id)}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )
}