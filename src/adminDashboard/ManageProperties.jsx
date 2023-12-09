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

function ManageProperties() {
  const [propertyData, setPropertyData] = useState();

  useEffect(() => {
    axios
      .get("/api/properties")
      .then((res) => setPropertyData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  const handleVerify = (id) => {
    axios
      .put(`/api/properties/${id}`, {
        verification_status: "verified",
      })
      .then((res) => {
        console.log(res.data);
        const updatedPropertyData = propertyData.map((property) => {
          if (property._id === id) {
            return { ...property, verification_status: "verified" };
          }
          return property;
        });
        setPropertyData(updatedPropertyData);
      })
      .catch((err) => console.log(err));
  };

  const handleReject = (id) => {
    axios
      .put(`/api/properties/${id}`, {
        verification_status: "rejected",
      })
      .then((res) => {
        console.log(res.data);
        const updatedPropertyData = propertyData.map((property) => {
          if (property._id === id) {
            return { ...property, verification_status: "rejected" };
          }
          return property;
        });
        setPropertyData(updatedPropertyData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TableContainer component={Paper} sx={{ width: "95%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Property title</TableCell>
            <TableCell align="right">Property location</TableCell>
            <TableCell align="right">Agent email</TableCell>
            <TableCell align="right">Agent name</TableCell>
            <TableCell align="right">Price range</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propertyData.map((property) => (
            <TableRow
              key={property._id} // Use a unique identifier from your data
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {property.title}
              </TableCell>
              <TableCell align="right">{property.location}</TableCell>
              <TableCell align="right">{property.agent.email}</TableCell>
              <TableCell align="right">{property.agent.name}</TableCell>
              <TableCell align="right">
                ${property.price_range_lowest} - ${property.price_range_lowest}
              </TableCell>
              {property.verification_status === "verified" ? (
                <TableCell>
                  <span>Status: verified</span>
                </TableCell>
              ) : property.verification_status === "rejected" ? (
                <TableCell>
                  <span>Status: rejected</span>
                </TableCell>
              ) : (
                <>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleVerify(property._id);
                      }}
                    >
                      verify
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

export default ManageProperties;
