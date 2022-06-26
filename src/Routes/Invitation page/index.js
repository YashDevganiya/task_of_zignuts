import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Invitation = () => {
  let navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const [inviteData, setInviteData] = useState([]);
  

  const logoutBtn = () => {
    return (
      localStorage.removeItem("user_id"),
      localStorage.removeItem("password"),
      setTimeout(() => {
        navigate("/");
      }, 2000)
    );
  };

  const getData = async () => {
    const data = await axios.get("./invitations.json");
    const userId = localStorage.getItem("user_id");

    //  setTimeout(() => {
    //     data.data.invites.push({
    //       invite_id: 1,
    //       sender_id: "andrew",
    //       sig_id: 25121,
    //       invite:
    //         "The Owner has invited you to join Situation 25121 [SAN failure]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
    //       vector: "Internal",
    //       invite_time: 1398892261,
    //       user_id: "1",
    //       status: "unread",
    //     });
    //   }, 5000);

    //   setTimeout(() => {
    //     data.data.invites.push({
    //       invite_id: 16,
    //       sender_id: "mike",
    //       sig_id: 23951,
    //       invite:
    //         "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
    //       vector: "Email",
    //       invite_time: 1398992261,
    //       user_id: "2",
    //       status: "read",
    //     });
    //   }, 10000);

    //   setTimeout(() => {
    //     data.data.invites.push({
    //       invite_id: 17,
    //       sender_id: "andrew",
    //       sig_id: 92394,
    //       invite:
    //         "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
    //       vector: "Twitter",
    //       invite_time: 1399092261,
    //       user_id: "1",
    //       status: "read",
    //     });
    //   }, 15000);

    //   setTimeout(() => {
    //     data.data.invites.push({
    //       invite_id: 18,
    //       sender_id: "andrew",
    //       sig_id: 49120,
    //       invite:
    //         "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
    //       vector: "Internal",
    //       invite_time: 1399192261,
    //       user_id: "1",
    //       status: "unread",
    //     });
    //   }, 20000);

    //   setTimeout(() => {
    //     data.data.invites.push({
    //       invite_id: 5,
    //       sender_id: "jeet",
    //       sig_id: 10293,
    //       invite:
    //         "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
    //       vector: "Email",
    //       invite_time: 1399292261,
    //       user_id: "3",
    //       status: "read",
    //     });
    //   }, 25000);

    data.data.invites.push(
      {
        invite_id: 1,
        sender_id: "andrew",
        sig_id: 25121,
        invite:
          "The Owner has invited you to join Situation 25121 [SAN failure]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
        vector: "Internal",
        invite_time: 1398892261,
        user_id: "1",
        status: "unread",
      },
      {
        invite_id: 16,
        sender_id: "mike",
        sig_id: 23951,
        invite:
          "The Owner has invited you to join Situation 23951 [Slow access to Purchasing system]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
        vector: "Email",
        invite_time: 1398992261,
        user_id: "2",
        status: "read",
      },
      {
        invite_id: 17,
        sender_id: "andrew",
        sig_id: 92394,
        invite:
          "The Owner has invited you to join Situation 92394 [End-users reporting no service in London]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
        vector: "Twitter",
        invite_time: 1399092261,
        user_id: "1",
        status: "read",
      },
      {
        invite_id: 18,
        sender_id: "andrew",
        sig_id: 49120,
        invite:
          "The Owner has invited you to join Situation 49120 [No access to AWS account]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
        vector: "Internal",
        invite_time: 1399192261,
        user_id: "1",
        status: "unread",
      },
      {
        invite_id: 5,
        sender_id: "jeet",
        sig_id: 10293,
        invite:
          "The Owner has invited you to join Situation 10293 [Mail intermittendly available]\\nPlease follow this link to open Situation Room: http://www.crestdatasys.com",
        vector: "Email",
        invite_time: 1399292261,
        user_id: "3",
        status: "read",
      }
    );

    setInviteData(data.data.invites);

    // ----------filter data----------------
    if (userId == data.data.invites[2].user_id) {
      console.log("id matched");
    } else {
      console.log("not matched");
    }

    data.data.invites.filter((e, i, a) => {
      if (e.user_id == 1) {
        console.log(e);
        data.data.invites.push(e);
        console.log(data.data.invites);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Invitation Page</title>
      </Helmet>

      <div className="container-fluid">
        <div className="container">
          <button
            className="btn btn-primary m-5 float-end
        "
            onClick={logoutBtn}
          >
            Logout
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">invite_id</th>
                <th scope="col">sender_id</th>
                <th scope="col">sig_id</th>
                <th scope="col">invite</th>
                <th scope="col">vector</th>
                <th scope="col">invite_time</th>
                <th scope="col">user_id</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {inviteData.map((curElem, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{curElem.invite_id}</td>
                      <td>{curElem.sender_id}</td>
                      <td>{curElem.sig_id}</td>
                      <td>{curElem.invite}</td>
                      <td>{curElem.vector}</td>
                      <td>{curElem.invite_time}</td>
                      <td>{curElem.user_id}</td>
                      <td>
                        {curElem.status == "read" ? (
                          <button
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              borderRadius: "12px",
                            }}
                          >
                            Read
                          </button>
                        ) : (
                          <button
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              borderRadius: "12px",
                            }}
                          >
                            Unread
                          </button>
                        )}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Invitation;
