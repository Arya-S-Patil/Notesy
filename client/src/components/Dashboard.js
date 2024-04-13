import Sidebar from "../essentials/Sidebar";
import QuoteFooter from "../essentials/QuoteFooter";
import revision from "../images/revision.png";
import qa from "../images/qa.png";
import flashcard from "../images/flashcard.png";
import summary from "../images/summary.png";

import { Quote } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Navbar from "../essentials/Navbar";
export default function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  console.log();
  return (
    <>
      <title>Dashboard</title>
      <div className="averta">
        <Sidebar />
        <div className="other-content p-3">
          <Navbar />
          <div className="row mt-5">
            <div className="col-md-6 p-3">
              <div className="left-dash-container p-4 rounded-4">
                <h1 className="text-white">
                  Hello, {decoded.checkUser.name} !!
                </h1>
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <div className="glassmorph rounded-4 p-3 light-grey vh-auto">
                      <div className="me-2 text-start">
                        <h3>
                          <b>
                            <br />
                            <br />
                            <br />
                            LAST
                            <br /> ACTIVITY
                          </b>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="glassmorph rounded-4 p-3 light-grey">
                          <div className="me-2 text-start">
                            <h3>
                              <b>
                                SAVED
                                <br /> NOTES
                              </b>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="glassmorph rounded-4 p-3 light-grey">
                          <div className="me-2 text-start">
                            <h3>
                              <b>TESTS</b>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <div className="row">
                  <div className="">
                    <div className="glassmorph rounded-4 p-3 light-grey text-center">
                      <div className="me-2  ">
                        <h3>
                          <b>STREAK</b>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="border rounded-4 p-3 hover-shadow blue">
                    <div className="me-2 text-start">
                      <img src={summary} width={90} />
                    </div>
                    <div className="me-2 text-end">
                      <h2>
                        <b>
                          GET
                          <br /> SUMMARY
                        </b>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border rounded-4 p-3 hover-shadow pink hover-shadow">
                    <div className="me-2 text-end">
                      <img src={qa} width={90} />
                    </div>
                    <div className="me-2 text-start">
                      <h2>
                        <b>
                          PREPARE A
                          <br /> QUESTIONNAIRE
                        </b>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div className="border rounded-4 p-3 hover-shadow yellow">
                    <div className="me-2  text-end">
                      <h2>
                        <b>
                          FLASH
                          <br /> CARD
                        </b>
                      </h2>
                    </div>
                    <div className="me-2 text-start">
                      <img src={flashcard} width={90} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="border rounded-4 p-3 hover-shadow orange">
                    <div className="me-2 text-start">
                      <h2>
                        <b>
                          REVISE <br />
                          NOTES
                        </b>
                      </h2>
                    </div>
                    <div className="me-2 text-end">
                      <img src={revision} width={90} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuoteFooter />
      </div>
    </>
  );
}
