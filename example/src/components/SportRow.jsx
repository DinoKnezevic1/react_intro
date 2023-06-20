import React, { useState } from "react";

function SportRow({ sport, handleChange, handleSubmit, handleSave}) {
  const [editMode, setEditMode] = useState(false);
  const [editableSport, setEditableSport] = useState({ ...sport });

  const handleEdit = () => {
    setEditMode(true);
  };
  
  function handleSaveClick() {
    handleSave(editableSport);
    setEditMode(false);
  }
  
  function handleInputChange(event){
    setEditableSport((prevSport) => ({
      ...prevSport,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <tr>
      <td>
        {editMode ? (
          <input
            name="Id"
            id="Name"
            value={editableSport.Id}
            onChange={handleInputChange}
          />
        ) : (
          sport.Id
        )}
      </td>
      <td>
        {editMode ? (
          <input
            name="Name"
            value={editableSport.Name}
            onChange={handleInputChange}
          />
        ) : (
          sport.Name
        )}
      </td>
      <td>
        {editMode ? (
          <input
            name="Type"
            value={editableSport.Type}
            onChange={handleInputChange}
          />
        ) : (
          sport.Type
        )}
      </td>
      <td>
        {editMode ? (
          <button type="submit" onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </td>
    </tr>
  );
}

export default SportRow;
