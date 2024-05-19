import FootImg from './assets/FootPage.png'
import './assets/FooterCSS.css'
import FormContent from './FormContent';

function Footer() {
    return (
        <>
            <hr style={{ backgroundColor: 'black', marginLeft: '2%', marginRight: '2%', marginTop: '0%', marginBottom: '0%' }}></hr>
            <h2 style={{ marginTop: '2%', textAlign: 'center' }}>Ready to start?</h2>
            <FormContent/>
            <div>
                <img src={FootImg} alt='' className="foot-image" />
            </div>

            <div className="FootContainer">
                <div className="FootBox">
                    <h5>Robo<b>Meet</b></h5>
                    <br></br>
                    <p>Virtual office</p>
                    <p>2024 RoboMeet, Inc</p>
                    <p style={{textDecoration:'underline'}}>Terms&Conditions</p>
                    <i className="fa-brands fa-square-facebook" style={{marginRight:'2%'}}></i>
                    <i className="fa-brands fa-instagram" style={{marginRight:'2%'}}></i>
                <i className="fa-brands fa-x-twitter" style={{marginRight:'2%'}}></i>
                <i className="fa-brands fa-linkedin" style={{marginRight:'2%'}}></i>
                </div>
                <div className="FootBox">
                    <h5>USE CASE</h5>
                    <p>Virtual office hours</p>
                    <p>Icebreakers</p>
                    <p>Salck & RoboMeet</p>
                    <p>Calender Meeting</p>
                </div>
                <div className="FootBox">
                    <h5>TOOLS</h5>
                    <p>Revitalize</p>
                    <p>US Remote Trends</p>
                    <p>PH Leaderboard</p>
                </div>
                <div className="FootBox">
                    <h5>SOCIAL</h5>
                    <p>Newsletter</p>
                    <p>Blog</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                </div>

                <div className="FootBox">
                    <h5>CONTACT</h5>
                    <p>Email</p>
                    <p>DM on Twitter</p>
                    <p>Press kit</p>
                    <p>Calender Meeting</p>
                </div>
            </div>

            <footer>
            <p style={{textAlign: 'center'}}>Copyright &copy; 2024 RoboMeet</p>
            </footer>
        </>
    );
}
  
export default Footer;
