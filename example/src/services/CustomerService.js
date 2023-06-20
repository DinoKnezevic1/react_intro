import http from "../http-common";

const getCustomers = () => {
  return http.get("/customer");
};
const getCustomer = id => {
  return http.get(`/customer/${id}`);
};

const create = (data) => {
  return http.post("/customer", data);
};

const update = (id, data) => {
  return http.put(`/customer/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/customer/${id}`);
};

//   const removeAll = () => {
//     return http.delete(`/customer`);
//   };

//   const findByTitle = title => {
//     return http.get(`/tutorials?title=${title}`);
//   };

const CustomerService = {
  getCustomers,
  getCustomer,
  create,
  update,
  remove,
  // removeAll,
  // findByTitle
};

export default CustomerService;
