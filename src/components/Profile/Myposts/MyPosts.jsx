import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 11 },
    { id: 3, message: 'What are you talking about', likesCount: 13 },
    { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
    { id: 5, message: 'Fight', likesCount: 111 }
  ]

  let postsElements = 
  posts.map(p => <Post massage={p.message} likeCount={p.likesCount} />);

  return (
    <div className={s.postBlock}>
      <h2>MY POST</h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}


export default MyPosts;