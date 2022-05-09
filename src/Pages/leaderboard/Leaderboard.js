import React ,{useState, useEffect} from "react";
import { Hnavbar } from "../../components";
import Profiles from '../../components/leaderboard/profiles';
//import { Leaderboard } from '../../components/leaderboard/database';
import './leaderboard.css';
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri';


function Leaderboared() {
  const [sort, setSort] = useState('solved');
  const [data, setData] = useState([]);
  const [sclick , setSClick] = useState(false);
  const [pclick , setPClick] = useState(false);
  const [toggleArr, setToggleArr] = useState(true);
  const [toggleArr2, setToggleArr2] = useState(true);


  const handleSClick = (e) => {

    if(sclick){
      setSort('asolved');
      setSClick(false);
      setToggleArr2(false);
    }else{
      setSort('solved');
      setSClick(true);
      setToggleArr2(true);
    }
  }
  const handlePClick = (e) => {
    if(pclick){
      setSort('apoints');
      setPClick(false);
      setToggleArr(false);
      
    }else{
      setSort('points');
      setPClick(true);
      setToggleArr(true);
    }
  }

  useEffect(() => {
    const Loadusers = async () => {

      const result = await fetch('http://localhost/api/leaderboard.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            rank: sort
            })
            });
      const data = await result.json();
      console.log(data.users);
      console.log(data.rank);
      setData(data.users);
  
    }
    Loadusers();
  }
  , [sort]);

  return (
    <div className="board">
      <Hnavbar />
        <div className="duration">
            <button onClick={handlePClick} data-id='points'>
              <span id="arrow">
                <p>Points</p>
                {toggleArr
                  ? <RiArrowDropDownLine color="#fff" size={27} />
                  : <RiArrowDropUpLine color="#fff" size={27} />
                  }
            </span>
            </button>

            <button onClick={handleSClick} data-id='solved'>
              <span id="arrow">
                <p>Solved</p>
                {toggleArr2
                  ? <RiArrowDropDownLine color="#fff" size={27} onClick={() => setToggleArr2(false)} />
                  : <RiArrowDropUpLine color="#fff" size={27} onClick={() => setToggleArr2(true)} />
                  }
            </span>
            </button>
        </div>

        <Profiles Leaderboard={data}></Profiles>

    </div>
  )
}

export default Leaderboared;