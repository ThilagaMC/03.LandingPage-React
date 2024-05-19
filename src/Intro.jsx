import IntroImg from './assets/IntroImg.png';

import './assets/IntroCSS.css'

function Intro() {
    return (
    <>
    <hr></hr>
<div className="container">
    <div className="row">
        <hr></hr>

        <div>
                        <h1 >Wherever you <br></br> are, you&apos;re better<br></br>together.</h1>
                        <p>Virtul office for remote teams</p>
                        <button className='cart alert alert-dark cart' style={{ marginLeft: '2%', marginRight: '2%', background: 'black', color: 'white' }}>Sign up for Free</button>
        </div>
    </div>
    <div className='row'>
        <img src={IntroImg} alt=''/>
    </div>
</div>

</>

    );
}


export default Intro