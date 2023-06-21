import Modal from "./components/Modal";
function Card(props)
{
    function buttonDelete() {
    }
    return(
    <div className='card'>
        {/*this is how we apply passed in values, note how the props has a .text which we defined over in App.js
        you also cant do boolean logic in these curly braces, only values*/}
        <h2>{props.text}</h2>
        <div className='actions'>
                <button className='btn' onClick={buttonDelete}>Poop</button>
        </div>
    </div>
    );

    
}


export default Card;