import classes from './Layout.module.css'
import MainNavigationComponent from './MainNavigation';

function Layout(props){

    return(
        <div>
            <MainNavigationComponent/>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;