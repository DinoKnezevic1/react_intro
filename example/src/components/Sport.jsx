import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import CustomerService from "../services/CustomerService.js";
//import axiosClient from "../axiosClient";
import "./Sport.css";
import CreateSportForm from "./CreateSportForm";
import SportList from "./SportList";

function Sport() {
  //all components here
  const [sport, setSport] = useState({
    Id: 0,
    Name: "",
    Type: "",
  });

  const [sports, setSports] = useState([]);


  function handleChange(event) {
    setSport((sport) => ({
      ...sport,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newSport = {
      Id: sport.Id,
      Name: sport.Name,
      Type: sport.Type,
    };

    //console.log(result.data);

    setSports([...sports, newSport]);
    setSport({ Id: 0, Name: "", Type: "" });
    console.log(sports);
  }

  function handleSave(updatedSport) {
    const updatedSports = sports.map((s) => {
      if (s.Id === updatedSport.Id) {
        return updatedSport;
      }
      return s;
    });
    setSports(updatedSports);
  }

  return (
    <div>
      {/* <span>{result}</span> */}
      <CreateSportForm
        sport={sport}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {sports.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <SportList
            sports={sports}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSave={handleSave}
          />
        </table>
      ) : (
        <br></br>
      )}
    </div>
  );
}
export default Sport;
