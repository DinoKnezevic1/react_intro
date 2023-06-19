import './Sport.css';

function SportRow({ sport }) {
    return (
      <tr>
        <td>{sport.Id}</td>
        <td>{sport.Name}</td>
        <td>{sport.Type}</td>
      </tr>
    );
  }
  
  export default SportRow;