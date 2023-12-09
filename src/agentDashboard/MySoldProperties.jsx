import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";

function MySoldProperties() {
  const [propertyData, setPropertyData] = useState();

  useEffect(() => {
    axios
      .get(`/api/bought/bought`)
      .then((res) => setPropertyData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(propertyData);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MySoldProperties;
