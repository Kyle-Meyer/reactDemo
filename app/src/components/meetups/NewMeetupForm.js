import {useRef} from 'react';
import Card from "../UI/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props){
    /*this is where we setup our ability to handle ref object, specifcally to capture the input of the input fields */
    const titleInputref = useRef();
    const imageInputref = useRef();
    const addressInputref = useRef();
    const descriptionInputref = useRef();
    /* the default HTML handling of forms is to make a webrequest for the desired resource, since react tries to load everything in by default, we need to override this behaviour
    this is where the event object comes in, this is a defaulty passed arguement that react auto completes for you*/
    function subitHandler(event) {
        /* this is where we prevent the default method */
        event.preventDefault();
        const title = titleInputref.current.value;
        const image = imageInputref.current.value;
        const address = addressInputref.current.value;
        const description = descriptionInputref.current.value;

        const meetupData = {
            titleKey: title,
            imageKey: image,
            addressKey: address,
            descriptionKey: description
        }
        /* ideally this is where you would send the data to a backend using a REST API
        for the purpose of this demo, I'm just going to use firebase
        and return that data to the parent component using props */
        props.onAddMeetup(meetupData);
    }
    return(
        <Card>
            <form className={classes.form} onSubmit={subitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" required id="title" ref={titleInputref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image: </label>
                    <input type="url" required id="image" ref={imageInputref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="addr">address: </label>
                    <input type="text" required id="addr" ref={addressInputref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" required rows="5" ref={descriptionInputref}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
 export default NewMeetupForm;