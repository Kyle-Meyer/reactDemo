import {createContext, useState} from 'react';
/* this ensures that everything we pass in (that gets wrapped) will have access to the context of this state
also note that this is not stored beyond session, so if you reload the page, this context will be lost, if you wanted to keep it persistent you
need to either store it in a DB or cache it in a cookie*/
const FaveContext= createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupID) => {},
    itemIsFavorite: (meetupID) => {}
});

export function FavoritesContextProvider(props){
    const [favoriteList, setFavorites] = useState([]);
    /* our state functions */
    function addFavoriteToList(favoriteMeetup)
    {
        console.log("adding favorite");
        /* because we must have the most current update of the state at the time of running this, we cannot use concat, instead we have to use a function */
        setFavorites((prev) => {
            return(prev.concat(favoriteMeetup));
        });
    }
    function removeFavoriteFromList(meetupID)
    {
        console.log("removing Favorite");
        setFavorites((prev) => {
            return(prev.filter(meetup => meetup.id !== meetupID));
        });
    }
    function isItemFavorited(meetupID)
    {

        return favoriteList.some(meetup => meetup.id === meetupID);
    }
/* as the state changes, this context object will update the list of favorites, and therefore allow any wrapped elements to access this list freely */
    const context = {
        favorites: favoriteList,
        totalFavorites: favoriteList.length,
        addFavorite: addFavoriteToList,
        removeFavorite: removeFavoriteFromList,
        itemIsFavorite: isItemFavorited
    };
    return(
        <FaveContext.Provider value={context}>
            {props.children}
        </FaveContext.Provider>
    );
}

export default FaveContext;