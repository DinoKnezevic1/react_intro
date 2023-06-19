import './Sport.css';
import SportRow from "./SportRow";

function SportList({ sports }) {
  return (
    <tbody>
      {sports.map((sport, index) => (
        <SportRow key={index} sport={sport} />
      ))}
    </tbody>
  );
}

export default SportList;