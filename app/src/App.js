import { Route, Routes } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetup';
import NewMeetupPage from './pages/NewMeetup';
import FavoirtePage from './pages/Favorites';
import Layout from './components/layout/Layout';

//the actual function
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          {/*this is how you enable what looks like routing, but its all the same page loaded ontop of itself, react is smart enough to allow you to switch between these "pages" dynaimcally */}
          <Route path='/new-meetup' element ={<NewMeetupPage/>}/>
          <Route path='/favorites' element={<FavoirtePage/>}/>
          <Route path='/' element={<AllMeetupPage/>} exact={true}/>
        </Routes>
      </Layout>
    </div>
  );
}
//export the function
export default App;
