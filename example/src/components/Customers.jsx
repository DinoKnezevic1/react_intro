import CustomersList from "./CustomersList";
import React from "react";
import { useState, useEffect, useRef } from "react";
import CustomerService from "../services/CustomerService";
import CreateCustomerForm from "./CreateCustomerForm";
import axios from "axios";

function Customer() {
  const { Id } = "f4ae1c8f-254d-41d9-b86b-eb2159ad4e2f";
  const [customer, setCustomer] = useState({
    Id: null,
    FirstName: "",
    LastName: "",
  });
  const [postResult, setPostResult] = useState();

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  const post_Id = useRef(null);
  const post_FirstName = useRef(null);
  const post_LastName = useRef(null);

  function handleChange(event) {
    setCustomer((customer) => ({
      ...customer,
      [event.target.name]: event.target.value,
    }));
  }

  async function postData() {
    const postData = {
      Id: customer.Id,
      FirstName: customer.FirstName,
      LastName: customer.LastName,
    };
    try {
      const res = await CustomerService.create(postData);
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      setPostResult(result);
      const newCustomer = {
        Id: result.data.Id,
        FirstName: result.data.FirstName,
        LastName: result.data.LastName,
      };
      setCustomer({
        newCustomer,
      });
      setCustomers([...customers, newCustomer]);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    postData();
    const newCustomer = {
      Id: customer.Id,
      FirstName: customer.FirstName,
      LastName: customer.LastName,
    };
    console.log(postResult);
    setCustomer({ Id: null, FirstName: "", LastName: "" });
  }

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetchCustomers();
  }, []);
  useEffect(() => {
    console.log(postResult);
  }, [postResult]);

  const fetchCustomers = () => {
    CustomerService.getCustomers()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCustomer = (id) => {
    CustomerService.getCustomer(id)
      .then((response) => {
        setCustomer(response.data);
        console.log("one customer");
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <CreateCustomerForm
        handleChange={handleChange}
        customer={customer}
        handleSubmit={handleSubmit}
      />
      <CustomersList
        customers={customers}
        customer={customer}
        getCustomer={getCustomer}
      />
    </div>
  );
}
export default Customer;
