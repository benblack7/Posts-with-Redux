import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'


export const Post = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post" key={post.id}>
      <h3>{post.Heading}</h3>
      <h5>{post.SubHeading}</h5>
      <p className="post-summary">{post.Summary}</p>
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
