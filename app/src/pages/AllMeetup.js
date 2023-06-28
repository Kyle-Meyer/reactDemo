import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        
    },
];
function AllMeetupPage(){
  /* remember the useState function returns two things, the current state in array slot 0, and the function to update this state in array slot 1 */
  const [loading, setLoading] = useState(true);
  const [dbData, setData] = useState([]);

  /* this is to prevent the infinite loop of states , the second input is an array of dependencies*/
  useEffect(() => {
    setLoading(true);
    /* make the fetch request for the data, chain it to a then with an anonymous function called response so that we store the results of the request in an object*/
    fetch('https://react-demo-f3a43-default-rtdb.firebaseio.com/meetups.json').then(response => {
      /* since the json component automatically returns a promise, we have to use a secon then, what is a promise you ask? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises */
      return response.json();
    }).then(data => {
      /* the data comes back as a nested object of our table entries, so we have to format */
      const retData = [];
      for(const key in data)
      {
        const newEntry = {
          id: key,
          ...data[key]
        };
        console.log(newEntry);
        retData.push(newEntry);
      }
      /* now we have the actual data of the response, and can use it as necessary, but this code doesnt necesarrily complete before the the return section of Allmeetups
      and we cannot use async to wait for this to complete, as that would no longer return a JSX obect, which our return relies on, so instead we are going to use a state
      where we have a loading spinner that waits for this response to complete before executing the main return*/
      setLoading(false);
      setData(retData)
    });
    /* our dependencies array is empty since we dont technically have any external dependencies to rely on to execute this function */
  }, []);
  
  /* if we are loading, return a loading widget of some kind so that the user cannot interact with the page */
  if(loading)
  {
    return(
      <section> 
       <p>Loading ...</p>
      </section>
    );
  }
  return (<section>
    <div></div>
    {/* now we need to get our data from the backend, again we are pulling from the firebase DB that I had setup earlier */}
    <MeetupList meetups={dbData}/>
  </section>); 
}

export default AllMeetupPage;