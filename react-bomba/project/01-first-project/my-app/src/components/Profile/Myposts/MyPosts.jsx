import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It`s my first post', likesCount: 11 },
    { id: 3, message: 'What are you talking about', likesCount: 13 },
    { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
    { id: 5, message: 'Fight my ass', likesCount: 111 }
  ]


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
        <Post massage={postData[0].message} likeCount={postData[0].likesCount} />
        <Post massage={postData[1].message} likeCount={postData[1].likesCount} />
        <Post massage={postData[2].message} likeCount={postData[2].likesCount} />
        <Post massage={postData[3].message} likeCount={postData[3].likesCount} />
        <Post massage={postData[4].message} likeCount={postData[4].likesCount} />
      </div>
    </div>
  )
}


export default MyPosts;