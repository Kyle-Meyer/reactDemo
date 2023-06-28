import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage()
{
    /* this is an object of the webpage's history, allowing us to navigate away without having to load another page, but instead, use the cached state from the browser */
    const history = useNavigate();
    function addMetupHandler(meetupData)
    {
        /* this is a built in java script function to send HTTP requests 
        the .json at the end is firebase specific, a normal backend wouldnt need this*/
        fetch('https://react-demo-f3a43-default-rtdb.firebaseio.com/meetups.json',
        { 
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': 'application/json'
            }
        }
        ).then(() => {
            history('/');
        });
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMetupHandler}></NewMeetupForm>
        </section>
     );
}

export default NewMeetupPage;