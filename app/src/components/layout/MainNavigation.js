import { Link } from 'react-router-dom';
import FaveContext from '../../store/favorites-context';
import { useContext } from 'react';

/*unique react way of importing css style sheets, this works so long as the file is named "name.module.css"
now all of our CSS styles will become properties in JS*/
import style from './MainNavigation.module.css'
function MainNavigationComponent()
{
    const fCtx = useContext(FaveContext);
    return(
        <header className={style.header}>
            <div className={style.logo}>Reactor</div>
            <nav>
                <ul>
                    {/* instead of using an anchor that will use an HREF to our desired page, we will use the link component to parse the URL using a react core component
                    this is so that we do not send an redundant request when trying to load a page that is already cached*/}
                    <li><Link to='/'> All Meetups </Link></li>
                    <li><Link to='/new-meetup'> New Meetups </Link></li>
                    <li><Link to='/favorites'> Favorites  
                        <span className={style.badge}>{fCtx.totalFavorites}</span>
                     </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigationComponent;