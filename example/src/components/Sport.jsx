import { useEffect, useState } from "react";
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
    setSports([...sports, newSport]);
    setSport({ Id: 0, Name: "", Type: "" });
    console.log(sports);
  }

  return (
    <div>
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
          <SportList sports={sports} />
        </table>
      ) : (
        <br></br>
      )}
    </div>
  );
}
export default Sport;
