import s from './ProfileInfo.module.css';
import { Input, Textarea, createField } from '../../common/FormsControl/FormsControls';
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({ handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className={s.infoBlock}>
        <div><button className={s.button}>save</button></div>
        <div>
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField("About me", "aboutMe", [], Input)}
            </div>
            <div>
              <b>Contact</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contacts}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
              })}
            </div>
        </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm