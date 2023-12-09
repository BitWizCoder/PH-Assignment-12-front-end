// ManageProperties

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

function ManageUsers() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setUser(res.data))
      .catch();
  }, []);

  console.log(user);

  const handleAdmin = (id) => {
    axios
      .put(`/users/${id}`, { userRole: "Admin" })
      .then((res) => {
        console.log(res.data);
        const updateduserData = user.map((user_item) => {
          if (user_item._id === id) {
            return { ...user_item, userRole: "Admin" };
          }
          return user_item;
        });
        setUser(updateduserData);
      })
      .catch((err) => console.log(err));
  };

  const handleAgent = (id) => {
    axios
      .put(`/users/${id}`, { userRole: "Agent" })
      .then((res) => {
        console.log(res.data);
        const updateduserData = user.map((user_item) => {
          if (user_item._id === id) {
            return { ...user_item, userRole: "Agent" };
          }
          return user_item;
        });
        setUser(updateduserData);
      })
      .catch((err) => console.log(err));
  };

  const handleFraud = (id) => {
    axios
      .put(`/users/${id}`, { userRole: "Fraud" })
      .then((res) => {
        console.log(res.data);
        const updateduserData = user.map((user_item) => {
          if (user_item._id === id) {
            return { ...user_item, userRole: "Fraud" };
          }
          return user_item;
        });
        setUser(updateduserData);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .put(`/users/${id}`, { userRole: "Delete" })
      .then((res) => {
        console.log(res.data);
        const updateduserData = user.map((user_item) => {
          if (user_item._id === id) {
            return { ...user_item, userRole: "Delete" };
          }
          return user_item;
        });
        setUser(updateduserData);
      })
      .catch((err) => console.log(err));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ width: "97%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User name</TableCell>
            <TableCell>User email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow
              key={user._id} // Use a unique identifier from your data
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.userRole}</TableCell>

              {user.userRole === "Admin" ? (
                <TableCell>
                  <span>Status: Admin</span>
                </TableCell>
              ) : user.userRole === "Agent" ? (
                <TableCell>
                  <span>Status: Agent</span>
                </TableCell>
              ) : user.userRole === "Fraud" ? (
                <TableCell>
                  <span>Status: Fraud</span>
                </TableCell>
              ) : user.userRole === "Delete" ? (
                <TableCell>
                  <span>Status: User Deleted</span>
                </TableCell>
              ) : (
                <>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleAdmin(user._id);
                      }}
                    >
                      Make admin
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleAgent(user._id);
                      }}
                    >
                      make agent
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        handleFraud(user._id);
                      }}
                    >
                      mark as fraud
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                    >
                      delete
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ManageUsers;
