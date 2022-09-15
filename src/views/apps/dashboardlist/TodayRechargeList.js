import React from "react";
import { Card, CardHeader, CardTitle, Table } from "reactstrap";
import moment from "moment";
import axiosConfig from "../../../axiosConfig";
import { useState, useEffect } from "react";

const TodayRechargeList = () => {
  const [dealerTable, setDealerTable] = useState([]);
  // console.log(dealerTable._id);
  useEffect(() => {
    async function getStudent() {
      try {
        const dealerdata = await axiosConfig.get("/dealer/alldealers");
        // console.log(dealerdata.data);
        setDealerTable(dealerdata.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getStudent();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today Recharge</CardTitle>
      </CardHeader>
      <Table
        responsive
        className="dashboard-table table-hover-animation mb-0 mt-1"
      >
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>Date</th>
            <th>Package Name</th>
            <th>Package Amount</th>
            <th>Total Balance</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {dealerTable.map((dealer, i) => {
            return (
              <tr key={i}>
                <td>{dealer.dealer_name}</td>
                <td>
                  {/* <div
                  className="bg-success"
                  style={{
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                /> */}
                  <span>{dealer.email}</span>
                </td>
                <td className="p-1">
                  <ul className="list-unstyled users-list m-0 d-flex">
                    {dealer.mobile}
                  </ul>
                </td>
                <td>{dealer.district}</td>
                <td>
                  <span>{dealer.location}</span>
                </td>

                <td>{moment(dealer.createdAt).format("ll")} </td>
                <td>{moment(dealer.updatedAt).format("ll")} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
};

export default TodayRechargeList;
