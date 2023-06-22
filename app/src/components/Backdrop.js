function BackDrop(props){
   
    return(
        /*this is the backgrounds own onclick, we are now forwarding back to the parent that called it and thus calling the passed in function name */
        <div className='backdrop' onClick={props.onClick}/>
    );
}
export default BackDrop;