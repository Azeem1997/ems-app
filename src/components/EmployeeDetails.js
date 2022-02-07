import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function EmployeeDetails() {
  const [employeeData, setemployeeData] = useState([]);
  const [employeeDetails, setemployeeDetails] = useState({
    FullName: "",
    Designation: "",
    Age: "",
    Salary: "",
  });

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link">EMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Employee</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Add Employee</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <button
        style={{ textAlign: "center" }}
        className="btn btn-primary"
        onClick={() => {
          AddDetails(employeeData);
        }}
      >
        ADD
      </button>
      <div
        style={{ marginLeft: "100px", marginRight: "100px", marginTop: "30px" }}
      >
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ textAlign: "left" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {employeeData.map((val, index) => {
              return (
                <tr key={index}>
                  <th>{val.FullName}</th>
                  <th>{val.Age}</th>
                  <th>{val.Designation}</th>
                  <th>{val.Salary}</th>
                  <th>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        Edit(employeeData);
                      }}
                    >
                      Edit
                    </button>
                  </th>
                  <th>
                    <button className="btn btn-primary">Delete</button>
                  </th>
                </tr>
              );
            })}
          </thead>
        </Table>
      </div>
    </div>
  );
}

export default EmployeeDetails;
