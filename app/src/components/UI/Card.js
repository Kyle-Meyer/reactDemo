import classes from './Card.module.css'

/* here we are using a special case of props, where the passed in input is actually the wrapped content from MeetupItem.js*/
function Card(props){
    return(
        <div className={classes.card}>
            {/* this is how you get JSX to auto wrap the content that was passed in from props to the div element */}
            {props.children}
        </div>
    );
}

export default Card;