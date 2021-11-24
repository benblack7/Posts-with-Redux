import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'


const Post = () => {
  //useSelector to read data from and to subscribe to the Store
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post" key={post.id}>
      <h4>{post.heading}</h4>
      <h5>{post.subHeading}</h5>
      <p className="post-summary">{post.summary}</p>
    </article>
  ))

  return (
    <React.Fragment>
      <ul className="cards" >
        <h1>Posts</h1>
        {renderedPosts}
      </ul>
    </React.Fragment>
  );
}

export default Post;