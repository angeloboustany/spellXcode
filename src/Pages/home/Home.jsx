import React, { useEffect, useState } from "react";
import "../home.css";
import "./hom.css";
import { Hnavbar } from "../../components";
import Cookies from "universal-cookie";

const Home = () => {
  const [data, setData] = useState();
  const [firstname, setName] = useState();
  const [lastname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [solved, setSolved] = useState();
  const [points, setPoints] = useState();

  useEffect(() => {
    let cookies = new Cookies();

    const getData = () => {
      //var user = JSON.parse(sessionStorage.getItem('user'));
      var user = cookies.get("user");
      setData(user);
      setName(user.first_name);
    };

    getData();
  }, []);

  useEffect(() => {
    if (data) {
      setName(data.firstname);
      setSurname(data.lastname);
      setEmail(data.email);
      setSolved(data.solved);
      setPoints(data.points);
    }
  }, [data]);

  return (
    <div className="home">
      <Hnavbar />
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            Welcome {firstname} {lastname}
          </h2>
          <p className="card-text">{email}</p>
          <br />
          <p>Here is a summary of your achievment:</p>
          <br />
          <div className="card-deck">
            <p>Your Points: {points}</p>
            <p>Solved: {solved}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
