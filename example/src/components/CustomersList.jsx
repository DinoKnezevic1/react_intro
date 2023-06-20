import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";

function CustomersList({ customers,customer,getCustomer }) {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: "hsl(0, 0%, 14%)" }}>
          <td>Id</td>
          <td>FirstName</td>
          <td>LastName</td>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.Id}>
            <td>{customer.Id}</td>
            <td>{customer.FirstName}</td>
            <td>{customer.LastName}</td>
            <button onClick={() => getCustomer(customer.Id)}>Info</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomersList;
