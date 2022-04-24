import React from "react";
import { Link } from "react-router-dom";

const BankTable = (props) => {
  const { banks } = props;
  return (
    <div className="text-center m-3">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>IFSC</th>
            <th>Bank Name</th>
            <th>Branch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((item) => {
            return (
              <tr>
                <td>{item.ifsc}</td>
                <td>{item.bank_name}</td>
                <td>
                  {item.branch}, {item.state}
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `/bank-details/${item.ifsc}`,
                      state: { item },
                    }}
                    className="text-decoration-none"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BankTable;
