import s from './Post.module.css';



const Post = (props) => {

  return (
    <div className={s.item}>
      <img alt='' src='https://a.rgbimg.com/users/z/ze/zela/300/p3echCE.jpg'></img>
      {props.message}
      <button>LIke</button>
      {props.likeCount}
    </div>
  )
}



export default Post;