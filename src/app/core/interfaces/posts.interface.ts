export interface PostsI {
    posts: Post[]
  }
  // tipizzare i dati che arrivano dal beckend
  export interface Post {
    id: string
    title: string
    views: number
  }