import React from "react";
//delete id column because of auto generation
function CreateCustomerForm(props){
    return (
        <div>
            <h1>Create Customer</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="inputField">
            <label htmlFor="Id">Id:</label>
            <input type="text" id="Id" name="Id" value={props.customer.Id} onChange={props.handleChange} />
          </div>
          <div className="inputField">
            <label htmlFor="FirstName">FirstName:</label>
            <input type="text" id="FirstName" name="FirstName" value={props.customer.FirstName} onChange={props.handleChange} />
          </div>
          <div className="inputField">
            <label htmlFor="LastName">LastName:</label>
            <input type="text" id="LastName" name="LastName" value={props.customer.LastName} onChange={props.handleChange} />
          </div>
          <div>
            <input type="submit"  />
          </div>
        </form>
        </div>
      );
}
export default CreateCustomerForm;