
import Card from "./Card";
import BackDrop from "./components/Backdrop";
import Modal from "./components/Modal";

//the actual function
function App() {
  return (
    <div>
      <h1>Hee Hee Hee Haw</h1>
      <Card text='poiper'/>
      <Card text='poiper2'/>
      <Card text='poiper3'/>
      <Modal/>
      <BackDrop/>
    </div>
  );
}
//export the function
export default App;
