import React from "react";

function CustomerRow(customer) {
  return (
    <tr key={customer.Id}>
      <td>{customer.Id}</td>
      <td>{customer.FirstName}</td>
      <td>{customer.LastName}</td>
    </tr>
  );
}
export default CustomerRow;
