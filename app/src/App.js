
import Card from "./Card";
//the actual function
function App() {
  return (
   /* <div class="container">
      <div class="leaf">
        <div class="leaf-content">
          <h1>BIKE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed est, ipsa minus repellendus, rerum officia eaque, quia pariatur voluptatibus asperiores inventore illum laudantium soluta itaque sit nobis officiis deserunt vero!</p>
        </div>

    </div>*/
    /* whoever looks at this (probably no one) you might want to look into either:
       A.) overlaying a png within a default CSS element to create the cutout between the two css elements 
       B.) convert the pngs into svgs and then just use svg math to make cutouts*/
  <div class="container">
    <div class="img-container">
      <img class="image1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png" alt=""/>
      <img class="image2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1200px-Ski_trail_rating_symbol-green_circle.svg.png" alt=""/>
      <img class="image3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yellow_icon.svg/1200px-Yellow_icon.svg.png" alt=""/>

    </div>
  </div>
  );
}
//export the function
export default App;
