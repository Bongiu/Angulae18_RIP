export interface PostsI {
    posts: Post[]
  }
  // tipizzare i dati che arrivano dal backend
  export interface Post {
    id: string
    title: string
    views: number
  }

  // stampa dell'oggetto che tornerà dalla get se stampiamo PostsI
  // obj{
  //   posts : [post,post]
  // }