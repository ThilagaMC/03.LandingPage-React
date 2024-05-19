import Page3Img from './assets/Page3Img.png'
function Page3() {
  return (

    <>
      <hr/>
      <div className="container">
        <div className='row'>
          <img src={Page3Img} alt="" style={{height:'75%',width:'75%'}} />
        </div>
        <div className="row">
          <hr />
          <div className="content">
            <h2>Support video & screen share</h2>
            <ul>
              <li>Optinally move from audio to HD video</li>
              <li>Share your design, feature, and slides</li>
              <li>Securely encrypted & transmitted using WebRTC</li>
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}
  
  export default Page3;