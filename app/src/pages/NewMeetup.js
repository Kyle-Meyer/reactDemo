import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage()
{
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
        );
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMetupHandler}></NewMeetupForm>
        </section>
     );
}

export default NewMeetupPage;