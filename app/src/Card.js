import {useState} from "react"
import Modal from "./components/Modal";
import BackDrop from "./components/Backdrop";
function Card(props)
{
    /*this is a react hook, it must be called directly when needed, here we need it to switch between the overlay states of our buttons
    you will get the current state in element 0, hence the reason I named it show modal
    the next element, element 1, will be the switch state function, or the ability to change the current state*/
    const [ ShowModal, SetModal ] = useState(false);

    function buttonDelete() {
        SetModal(true);
    }
    function closeModal()
    {
        SetModal(false);
    }
    return(
    <div className='card'>
        {/*this is how we apply passed in values, note how the props has a .text which we defined over in App.js
        you also cant do boolean logic in these curly braces, only values*/}
        <h2>{props.text}</h2>
        <div className='actions'>
                <button className='btn' onClick={buttonDelete}>Click</button>
        </div>
        {/*is a ternary statement*/}
        {/*instead of forwarding the function from this file, like we did with the backdrop, we are just going to define the onclick event over in modal.js*/}
        {ShowModal ?  <Modal onCancel={closeModal}/> : null}
        {/*we are forwarding the onclick event handler of this element to its own on click event*/}
        {ShowModal ?   <BackDrop onClick={closeModal} />: null}
    
    </div>
    );

    
}


export default Card;