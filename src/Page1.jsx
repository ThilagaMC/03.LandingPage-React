import Page1Img from './assets/Page1Img.png';
import './assets/Page1CSS.css'

function Page1() {
  return (

    <>
    <hr></hr>
    <div className="container">
    <div className='row'>
            <img style={{height:'75%',width:'75%'}}src={Page1Img} alt='' />
        </div>
        
        <div className="row">
            <div className="content"> 
                <h2>One Click to talk</h2>
                <ul>
                    <li>Jump into audio rooms with single click</li>
                    <li>Securely encrypted & transmitted using webRTC</li>
                </ul>
            </div>
        </div>
    </div>
</>


  );
}

export default Page1;