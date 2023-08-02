import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControl/FormsControls';
import { required } from '../../helpes/validators/validators';
import ken from '../../assets/images/ken.png'

const Anastasya = (props) => {
  let state = props.messagesPage;

  let dialogsElements= state.dialogsData.map(dialog => <DialogList name={dialog.name} key={dialog.id} id={dialog.id} />); 
  let messagesElements= state.messagesData.map(message => <Message message={message.message} key={message.id} />);
  

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  }
  
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
            <div className={s.userdialog}><img src={ken}></img>@Anastia1152</div>
            <div>{ messagesElements }</div>
               <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div> 
        </div>
    )
}

const AddMessageForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <div><Field  component={Textarea} 
    name='newMessageText' 
    placeholder='Enter your message'
    validate={[required]} /></div>
        <div><button>SEND</button></div>
  </form>
  )
}

const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm)



export default Anastasya;