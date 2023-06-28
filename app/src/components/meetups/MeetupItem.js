import classes from './MeetupItem.module.css'
import Card from '../UI/Card';
import { useContext } from 'react';
import FaveContext from '../../store/favorites-context';

function MeetupItem(props){
    /* this gives us access to our context's functions that we defined over in favorites-context.js */
    const fCtx = useContext(FaveContext);
    const isFave = fCtx.itemIsFavorite(props.id)
    function toggleFavorite()
    {
        if(isFave)
        {
            fCtx.removeFavorite(props.id);
        }
        else
        {
            fCtx.addFavorite({
                id: props.id,
                titleKey: props.title,
                imageKey: props.image,
                addressKey: props.address,
                descriptionKey: props.description
            });
        }
    }
    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt="" />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavorite}>{isFave ? 'Remove From Favorites' : "Add to Favorites"}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;