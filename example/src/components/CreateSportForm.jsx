import "./CreateSportForm.css";
import "./Sport";

function CreateSportForm(props) {
  return (
    <div>
        <h1>Create sport</h1>
    <form onSubmit={props.handleSubmit}>
      <div className="inputField">
        <label htmlFor="Id">Id:</label>
        <input type="text" id="Id" name="Id" value={props.sport.Id} onChange={props.handleChange} />
      </div>
      <div className="inputField">
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" name="Name" value={props.sport.Name} onChange={props.handleChange} />
      </div>
      <div className="inputField">
        <label htmlFor="Type">Type:</label>
        <input type="text" id="Type" name="Type" value={props.sport.Type} onChange={props.handleChange} />
      </div>
      <div>
        <input type="submit"  />
      </div>
    </form>
    </div>
  );
}

export default CreateSportForm;
