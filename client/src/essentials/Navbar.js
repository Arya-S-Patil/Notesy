import logout_image from "../images/logout.png";
import liondp from "../images/liondp.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/auth/login");
  }
  return (
    <div className="w-100 d-flex justify-content-between">
      <div className=""></div>
      <div className="d-inline-flex align-items-center">
        <span className="me-4 links" onClick={logout}>
          <img src={logout_image} width={25} className="img-fluid" />
        </span>
        <span className="me-4 links">
          <img src={liondp} width={30} className="img-fluid rounded-circle" />
        </span>
      </div>
    </div>
  );
}
