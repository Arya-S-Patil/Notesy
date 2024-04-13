import { useState, useContext, createContext } from "react";
import { NavLink } from "react-router-dom";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import "./sidebar.css";
import logo from "../images/icon.svg";
import home from "../images/home.png";
import revision from "../images/revision.png";
import qa from "../images/qa.png";
import flashcard from "../images/flashcard.png";
import summary from "../images/summary.png";
const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="bg-white shadow sidenav p-3 text-center">
        <img src={logo} width={50} alt="logo" className="img-fluid mt-1" />

        <div className="mt-5">
          <NavLink className="side-link">
            <div>
              <img src={home} width={30} />
            </div>
          </NavLink>
          <br />
          <NavLink className="side-link">
            <div>
              <img src={summary} width={30} />
            </div>
          </NavLink>
          <br />
          <NavLink className="side-link">
            <div>
              <img src={flashcard} width={30} />
            </div>
          </NavLink>
          <br />
          <NavLink className="side-link">
            <div>
              <img src={qa} width={30} />
            </div>
          </NavLink>
          <br />
          <NavLink className="side-link">
            <div>
              <img src={revision} width={30} />
            </div>
          </NavLink>
          <br />
        </div>
      </div>
    </>
  );
}
