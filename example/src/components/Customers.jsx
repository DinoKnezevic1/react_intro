import CustomersList from "./CustomersList";
import React from "react";
import { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";

function Customer(){

    const { Id }= "f4ae1c8f-254d-41d9-b86b-eb2159ad4e2f";
    const[customer,setCustomer] = useState({
        FirstName:"",
        LastName:""
    })

    const[customers,setCustomers] = useState([]);
    useEffect(() => {
      fetchCustomers();
    }, []);
    const fetchCustomers = () => {
      CustomerService.getCustomers()
        .then(response => {
          setCustomers(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    
    // useEffect(() => {
    //     getCustomer(Id);
    //   });

    const getCustomer = id => {
        CustomerService.getCustomer(id)
          .then(response => {
            setCustomer(response.data);
            console.log("one customer");
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    

    return(
        <div>
            <CustomersList customers={customers} customer={customer} getCustomer={getCustomer}/>
        </div>
    )
}
export default Customer;