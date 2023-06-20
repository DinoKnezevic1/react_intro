import { useState } from "react";
import "./Sport.css";
import React from "react";
import SportRow from "./SportRow";

function SportList({ sports, handleChange, handleSubmit,handleSave }) {
  return (
    <tbody>
      {sports.map((sport, index) => (
        <SportRow key={index} sport={sport} handleChange={handleChange} handleSubmit={handleSubmit} handleSave={handleSave} />
      ))}
    </tbody>
  );
}

export default SportList;
