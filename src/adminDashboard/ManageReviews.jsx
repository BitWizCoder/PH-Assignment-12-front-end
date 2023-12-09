// ManageProperties

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ApiDataContext } from "../auth/ApiDataProvider";
import { useContext } from "react";
import { Avatar, Button } from "@mui/material";

function ManageReviews() {
  const { user } = useContext(ApiDataContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  console.log(user.property);

  return (
    <TableContainer component={Paper} sx={{ width: "95%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>reviewer image</TableCell>
            <TableCell>reviewer name</TableCell>
            <TableCell>reviewer email</TableCell>
            <TableCell>review</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.Users.map((user) => (
            <TableRow
              key={user.id} // Use a unique identifier from your data
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Avatar src={user.image} />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {
                  "Apologies for the confusion earlier. In the provided code, the useLocation hook was imported but not directly utilized. To highlight the selected"
                }
              </TableCell>
              <TableCell>
                <Button variant="contained">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ManageReviews;
