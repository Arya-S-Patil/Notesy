import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <>
      <title>Notesy</title>
      <div className="body vh-100 d-flex flex-column justify-content-center text-center averta">
        <div>
          <h1 className="display-1">
            <b>
              <span className="grad-text">Notesy</span> : AI Note Taking
              Assistant
            </b>
          </h1>
        </div>
        <div className="h5">
          <Typewriter
            options={{
              strings: [
                "AI Enabled Notes App",
                "Automated Note Generation",
                "Customized Questionnaire",
                "Personalized Learning Experience",
                "Scientifically Proven Revision Methods",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <br />
        <div>
          <Link to="/auth/login">
            <button className="btn-notesy">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}
