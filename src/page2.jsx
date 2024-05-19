import Page2Img from './assets/Page2Img.png'
import './assets/Page2CSS.css'

function Page2() {
    return (
  
<>
<hr></hr>
<div className="container">
    <div className="row">
        <hr />
        <div className="content"> 
            <h2>Build your avatar</h2>
            <ul>
                <li>Choose whether yout door is open or close</li>
                <li>See the room in your office</li>
                <li>Join the #water-coller room to chat about personal life</li>
            </ul>
        </div>
    </div>
    <div className='row'>
        <img src={Page2Img} alt='' style={{height:'75%',width:'75%'}} />
    </div>
</div>
</>
     


    );
  }
  
  export default Page2;