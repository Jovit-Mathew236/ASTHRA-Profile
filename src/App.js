import './App.css';
import dp from './images/dp.jpg'
import ticket from './images/ticket.png'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="heading">
          <h1>YOUR PROFILE</h1>
        </div>
        <hr />
        <div className="main">
          <div className="profile-section">
            <div className="profile">
              <img src={dp} alt="" />
              <div className="profile_details">
                <p className="name">HANNA ELSA RENI GEORGE</p>
                <p className="college gray">TKM COLLEGE OF ENGINEERING</p>
                <p className="mail gray">hanna18@gmail.com</p>
                <button className="edit_profile">EDIT PROFILE</button>
              </div>
            </div>

            <div className="profile__program_details">
              <h1>REGISTERED WORKSHOPS</h1>

              <div className="box">
                <h2>ELECTRONIC SYSTEM DESIGN USING VERILOG
                  SYSTEMS AND VERILOG COMMUNICATION</h2>

                <div className="links">
                  <a href="#">View more</a>
                  <a href="#">Download ticket</a>
                </div>
              </div>

              <div className="box">
                <h2>ELECTRONIC SYSTEM DESIGN USING VERILOG
                  SYSTEMS AND VERILOG COMMUNICATION</h2>

                <div className="links">
                  <a href="#">View more</a>
                  <a href="#">Download ticket</a>
                </div>
              </div>

              <div className="box">
                <h2>ELECTRONIC SYSTEM DESIGN USING VERILOG
                  SYSTEMS AND VERILOG COMMUNICATION</h2>

                <div className="links">
                  <a href="https://www.google.com">View more</a>
                  <a href="https://www.google.com">Download ticket</a>
                </div>
              </div>
            </div>
          </div>

          <div className="ticket_section">
            <img src={ticket} alt="" />
            <button>Download your AsthraPass</button>
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
