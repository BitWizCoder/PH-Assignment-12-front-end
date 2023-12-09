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

function RequestedProperties() {
  const [propertyData, setPropertyData] = useState();

  useEffect(() => {
    axios
      .get(`/api/bought`)
      .then((res) => setPropertyData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(propertyData);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  const handleAccept = (id) => {
    const statusData = {
      status: "accepted",
    };

    axios
      .put(`/api/bought/${id}`, statusData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    console.log(id);
  };

  const handleReject = (id) => {
    const statusData = {
      status: "rejected",
    };

    axios
      .put(`/api/bought/${id}`, statusData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(id);
  };

  return (
    <TableContainer component={Paper} sx={{ width: "95%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property title</TableCell>
            <TableCell align="right">Property location</TableCell>
            <TableCell align="right">Buyer email</TableCell>
            <TableCell align="right">Buyer name</TableCell>
            <TableCell align="right">Sold price</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propertyData.map((property, i) => (
            <TableRow
              key={i} // Use a unique identifier from your data
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {property.title}
              </TableCell>
              <TableCell align="right">{property.location}</TableCell>
              <TableCell align="right">{property.email}</TableCell>
              <TableCell align="right">{property.byer_name}</TableCell>
              <TableCell align="right">${property.amount}</TableCell>
              {/* <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleAccept(property._id);
                  }}
                >
                  Accept
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleReject(property._id);
                  }}
                >
                  Reject
                </Button>
              </TableCell> */}
              {property.status === "accepted" ? (
                <p>Status: Accepted</p>
              ) : property.status === "rejected" ? (
                <p>Status: Rejected</p>
              ) : (
                <div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleAccept(property._id);
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      handleReject(property._id);
                    }}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RequestedProperties;
