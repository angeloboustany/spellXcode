import React, { useState, useEffect } from "react";
import { Hnavbar } from "../../components";
import "./problems.css";
import SolveProblem from "./solveProblem";
import Probs from "../../components/problems/probs";
//import { Leaderboard } from '../../components/leaderboard/database';
import "../leaderboard/leaderboard.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { DataContext } from "./DataContext";

function Problems() {
  const [sort, setSort] = useState("points");
  const [data, setData] = useState([]);
  const [sclick, setSClick] = useState(false);
  const [pclick, setPClick] = useState(false);
  const [toggleArr, setToggleArr] = useState(true);
  const [toggleArr2, setToggleArr2] = useState(true);
  const [questions, setQuestions] = useState("");

  const handleSClick = (e) => {
    if (sclick) {
      setSort("asub");
      setSClick(false);
      setToggleArr2(false);
    } else {
      setSort("sub");
      setSClick(true);
      setToggleArr2(true);
    }
  };
  const handlePClick = (e) => {
    if (pclick) {
      setSort("apoints");
      setPClick(false);
      setToggleArr(false);
    } else {
      setSort("points");
      setPClick(true);
      setToggleArr(true);
    }
  };

  useEffect(() => {
    const Loadprobs = async () => {
      const result = await fetch("http://localhost/api/getProbs.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rank: sort,
        }),
      });
      const data = await result.json();
      console.log(data.probs);
      console.log(data.rank);
      setData(data.probs);
    };
    Loadprobs();
  }, [sort]);

  return (
    <>
      <Hnavbar />
      <div className="FlexContainer">
        <div className="Solve">
          <SolveProblem Problem={questions + ".md"}></SolveProblem>
        </div>

        <div className="Probs">
          <div className="board">
            <div className="duration">
              <button onClick={handlePClick} data-id="points">
                <span id="arrow">
                  <p>Points</p>
                  {toggleArr ? (
                    <RiArrowDropDownLine color="#fff" size={27} />
                  ) : (
                    <RiArrowDropUpLine color="#fff" size={27} />
                  )}
                </span>
              </button>

              <button onClick={handleSClick} data-id="solved">
                <span id="arrow">
                  <p>Submitted</p>
                  {toggleArr2 ? (
                    <RiArrowDropDownLine
                      color="#fff"
                      size={27}
                      onClick={() => setToggleArr2(false)}
                    />
                  ) : (
                    <RiArrowDropUpLine
                      color="#fff"
                      size={27}
                      onClick={() => setToggleArr2(true)}
                    />
                  )}
                </span>
              </button>
            </div>
            <DataContext.Provider value={{ setQuestions }}>
              <Probs Problems={data}></Probs>
            </DataContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Problems;
