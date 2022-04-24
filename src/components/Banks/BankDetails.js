import React from "react";
import { useLocation } from "react-router-dom";

const Bankitem = (props) => {
  const item = useLocation().state;
  console.log(item);
  return (
    <div className="text-center m-2">
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th colSpan="2">Bank Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IFSC</td>
            <td>{item.ifsc}</td>
          </tr>
          <tr>
            <td>Bank Name</td>
            <td>{item.bank_id}</td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>{item.branch}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{item.city}</td>
          </tr>
          <tr>
            <td>District</td>
            <td>{item.district}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{item.state}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bankitem;
