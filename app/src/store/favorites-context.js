import {createContext, useState} from 'react';
/* this ensures that everything we pass in (that gets wrapped) will have access to the context of this state*/
const FaveContext= createContext({
    favorites: [],
    totalFavorites: 0
});

function favoritesContextProvier(props){
    const [favoriteList, setFavorites] = useState([]);
    /* our state functions */
    function addFavoriteToList(favoriteMeetup)
    {
        /* because we must have the most current update of the state at the time of running this, we cannot use concat, instead we have to use a function */
        setFavorites((prev) => {
            return(prev.concat(favoriteMeetup));
        });
    }
    function removeFavoriteFromList(meetupID)
    {
        setFavorites((prev) => {
            return(prev.filter(meetup => meetup.id !== meetupID));
        });
    }
    function isItemFavorited(meetupID)
    {
        return userFavorites.some(meetup => meetup.id === meetupID);
    }
/* as the state changes, this context object will update the list of favorites, and therefore allow any wrapped elements to access this list freely */
    const context = {
        favorites: favoriteList,
        totalFavorites: favoriteList.length
    };
    return(
        <FaveContext.Provider value={context}>
            {props.children}
        </FaveContext.Provider>
    );
}

export default favoritesContextProvier;