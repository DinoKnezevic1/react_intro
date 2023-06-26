import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";
import CustomerRow from "./CustomerRow";

function CustomersList({ customers, customer, getCustomer }) {
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
        //   <tr key={customer.Id}>
        //     <td>{customer.Id}</td>
        //     <td>{customer.FirstName}</td>
        //     <td>{customer.LastName}</td>
        //     <td><input type="button" value="Info" onClick={()=>getCustomer(customer.Id)} /></td>
        //   </tr>
          <CustomerRow key={customer.Id} {...customer}/>
        ))}
      </tbody>
    </table>
  );
}

export default CustomersList;
