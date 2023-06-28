import { useContext } from "react";
import FaveContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoirtePage()
{
    /* get the current context snapshot of our page */
    const fCtx = useContext(FaveContext);

    let content;
    if(fCtx.totalFavorites === 0) {content = <p>you're broke kid xddddd</p>}
    else{content = <MeetupList meetups={fCtx.favorites}/>}
    return(
        <section>
            <h1>Favorites</h1>
            {content}
        </section>
     );
}

export default FavoirtePage;