import './error.css'
function Server() {
  return (
    <div className="Error-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="status-code">
        <div className="status-code-img">
          <img src={error} alt="error" />
        </div>
        <div className="status-code-title">
          <span>505 - aloqa uzildi</span>
          <span>
            Ушбу саҳифадаги маълумотлар топилмади, Интернет йоки бошқа
            сабабларга кўра веб-саҳифа топилмади.{" "}
          </span>
        </div>
        <div className="status-code-link">
          <NavLink to={"/user"} className="status-code-navlink">
            <span>
              <img src={back} alt="back" />
            </span>
            <span>Ортга қайтиш</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Server;
