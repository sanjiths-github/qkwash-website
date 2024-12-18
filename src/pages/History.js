import React from "react";
import "./History.css";
import SideMenu from "../components/SideMenu";

const History = () => {
  const data = [
    { date: "2024-12-01", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-02", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-03", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-01", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-02", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-03", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-01", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-02", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-03", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Incomplete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },
    { date: "2024-12-04", hubName: "Kochi Hostel", userName: "Sanjith", status: "Complete" },

    
  ];

  return (
    <div>
    <SideMenu/>
    <div className="table-container-history">
    <h1 className="page-title">Order History</h1>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>HUB NAME</th>
            <th>USER NAME</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.hubName}</td>
              <td>{row.userName}</td>
              <td className={`status ${row.status.toLowerCase()}`}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default History;
