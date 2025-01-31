import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Box,
  MenuItem,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function Notification() {
  const { id } = useParams();
  const [filter, setFilter] = useState("New");

  const alerts = [
    {
      elephantId: 1,
      alertReceivedDate: "2024-12-15",
      alertReceivedTime: "10:00 AM",
    },
    {
      elephantId: 2,
      alertReceivedDate: "2024-12-16",
      alertReceivedTime: "11:30 AM",
    },
    {
      elephantId: 3,
      alertReceivedDate: "2024-12-17",
      alertReceivedTime: "01:15 PM",
    },
    {
      elephantId: 4,
      alertReceivedDate: "2024-12-18",
      alertReceivedTime: "09:00 AM",
    },
    {
      elephantId: 5,
      alertReceivedDate: "2024-12-19",
      alertReceivedTime: "02:45 PM",
    },
    {
      elephantId: 6,
      alertReceivedDate: "2024-12-20",
      alertReceivedTime: "04:00 PM",
    },
    {
      elephantId: 7,
      alertReceivedDate: "2024-12-21",
      alertReceivedTime: "06:30 AM",
    },
    {
      elephantId: 8,
      alertReceivedDate: "2024-12-22",
      alertReceivedTime: "08:00 AM",
    },
    {
      elephantId: 9,
      alertReceivedDate: "2024-12-23",
      alertReceivedTime: "03:30 PM",
    },
    {
      elephantId: 10,
      alertReceivedDate: "2024-12-24",
      alertReceivedTime: "12:15 PM",
    },
    {
      elephantId: 11,
      alertReceivedDate: "2024-12-25",
      alertReceivedTime: "07:00 AM",
    },
    {
      elephantId: 12,
      alertReceivedDate: "2024-12-26",
      alertReceivedTime: "10:30 AM",
    },
    {
      elephantId: 13,
      alertReceivedDate: "2024-12-27",
      alertReceivedTime: "01:00 PM",
    },
  ];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="pt-[10rem] bg-gray-100">
      <h1 className="text-center text-[3rem] font-bold text-[#d46429] font-poppins">
        Notification Page
      </h1>
      <div className="flex justify-between items-center px-[10rem] py-8">
        <div>
          <h1 className="text-[1.7rem] font-bold text-gray-500 font-poppins">
            {filter} Notifications
          </h1>
        </div>
        <div>
          <Box width="250px" borderRadius="1rem">
            <TextField
              label="Select a Notification Type"
              select
              value={filter}
              onChange={handleChange}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  height: "2.5rem",
                  color: "#d46429",
                  backgroundColor: "#f9f4f1",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d46429",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ff784e",
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Previous">Previous</MenuItem>
            </TextField>
          </Box>
        </div>
      </div>
      <div className="w-[80%] flex mx-auto pb-10">
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 3, borderRadius: "8px" }}
        >
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#f1f1f1" }}>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#d46429",
                    padding: "1rem",
                    fontFamily: "poppins",
                    fontSize: "1.1rem",
                  }}
                >
                  Elephant Id
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#d46429",
                    padding: "1rem",
                    fontFamily: "poppins",
                    fontSize: "1.1rem",
                  }}
                >
                  Alert Received Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#d46429",
                    padding: "1rem",
                    fontFamily: "poppins",
                    fontSize: "1.1rem",
                  }}
                >
                  Alert Received Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow
                  key={alert.elephantId}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#fffbf0",
                    },
                  }}
                >
                  <TableCell
                    sx={{ padding: "1rem", borderBottom: "1px solid #ddd" }}
                  >
                    {alert.elephantId}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "1rem", borderBottom: "1px solid #ddd" }}
                  >
                    {alert.alertReceivedDate}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "1rem", borderBottom: "1px solid #ddd" }}
                  >
                    {alert.alertReceivedTime}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Notification;
