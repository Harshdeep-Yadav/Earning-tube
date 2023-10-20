import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Rank,
  Title,
  Thumbnail,
  Views,
  Likes,
  Comments,
  Updated,
  Estimated
) {
  return { Rank, Title, Thumbnail, Views, Likes, Comments, Updated, Estimated };
}

const rows = [
  createData(
    1,
    "Video Title Name",
    <img src="client\src\assets\Frame 8.png" alt="" />,
    124,
    12340,
    1342,
    "June 23, 2023",
    239893
  ),
  createData(
    2,
    "Video Title Name",
    <img src="" alt="" />,
    124,
    323684,
    87684,
    "June 23, 2023",
    468468
  ),
  createData(
    3,
    "Video Title Name",
    <img src="client\src\assets\Frame 8.png" alt="" />,
    5684,
    351899,
    7684,
    "June 23, 2023",
    8787
  ),
];

export default function BasicTable() {
  return (
    <div className="mx-40 my-10 ">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="text-white bg-gray-800"
        >
          <TableHead>
            <TableRow>
              <TableCell className="">Rank</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Thumbnail</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right">Likes</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Updated On</TableCell>
              <TableCell align="right">* Estimated Earning</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Rank}
                </TableCell>
                <TableCell align="right">{row.Title}</TableCell>
                <TableCell align="right">{row.Thumbnail}</TableCell>
                <TableCell align="right">{row.Views}</TableCell>
                <TableCell align="right">{row.Likes}</TableCell>
                <TableCell align="right">{row.Comments}</TableCell>
                <TableCell align="right">{row.Updated}</TableCell>

                <TableCell align="right">{row.Estimated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
