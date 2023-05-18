import s from './Post.module.css';



const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://a.rgbimg.com/users/z/ze/zela/300/p3echCE.jpg'></img>
      {props.massage}
      <button>LIke</button>
      {props.likeCount}
    </div>
  )
}



export default Post;