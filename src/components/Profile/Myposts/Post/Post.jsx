import s from './Post.module.css';



const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://social-network.samuraijs.com/activecontent/images/users/29370/user.jpg?v=2' alt=""></img>
      <span className={s.text}>@Gostling</span>
      {props.message}
      <button className={s.button}>Like</button>
      {props.likeCount}
    </div>
  )
}



export default Post;