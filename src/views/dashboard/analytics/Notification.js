import React from "react";
import { Card, CardHeader, CardTitle, Table } from "reactstrap";
import moment from "moment";
import axiosConfig from "../../../axiosConfig";
import { useState, useEffect } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  console.log(notifications);
  useEffect(() => {
    async function getNotifications() {
      try {
        const response = await axiosConfig.get("/admin/allnotification");
        // console.log(dealerdata.data);
        setNotifications(response.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getNotifications();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>NOTIFICATION</CardTitle>
      </CardHeader>
      <Table
        responsive
        className="dashboard-table table-hover-animation mb-0 mt-1"
      >
        <thead>
          <tr>
            <th>DESCRIPTION</th>
           
            <th>Created Time</th>
            <th>Updated Time</th>
          </tr>
        </thead>

        <tbody>
          {notifications.map((notification, i) => {
            return (
              <tr key={i}>
                <td>{notification.desc}</td>
              
                <td>
                  {moment(notification.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
                <td>
                  {moment(notification.updatedAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
};

export default Notification;
