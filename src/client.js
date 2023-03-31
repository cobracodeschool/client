import React, { useState, useEffect } from "react";
import axios from "axios";

const Client = () => {
  const [userData, setUserData] = useState([]);

  const getDataFromServer = async () => {
    await axios
      .get("http://localhost:5000/contacts")
      .then((response) => {
        setUserData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center w-100 flex-column">
      <h3>User Data</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.properties.hs_object_id}</th>
                <td>{user.properties.email}</td>
                <td>{user.properties.firstname}</td>
                <td>{user.properties.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Client;
