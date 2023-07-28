import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../helpes/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControls';

let maxLength = maxLengthCreator(10);

const AddNewPost = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
        <div><Field component={Textarea} name='newPostText' validate={[required, maxLength]}/></div>
        <div><button className={s.button}>POSTIK</button></div>
  </form>
  )
}
const AddPostFormRedux = reduxForm ({form: 'profilAddPostForm'}) (AddNewPost)


const MyPosts = (props) => {

  // shouldComponentUpdate (nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} />);
  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    }

  return (
    <div className={s.postBlock}>
      <h2>POST</h2>
    <AddPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}




export default MyPosts;