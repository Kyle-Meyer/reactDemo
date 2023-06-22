

function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    return(
        <div className='modal'>
            <p>you lackin? </p>
            <button className='btn btn--alt' onClick={cancelHandler}> nah </button>
            <button className='btn' onClick={cancelHandler}> yea </button>
        </div>
        
    );
}

export default Modal;