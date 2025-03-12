import React from "react";
import { useNavigate } from "react-router-dom";

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useGlobalData } from "../../Hooks/GlobalDataContext";

function Notification() {
  const { notifications } = useGlobalData();
  const navigate = useNavigate();

  return (
    <div className="pt-[10rem] bg-gray-100">
      <h1 className="text-center text-[3rem] font-bold text-[#d46429] font-poppins">
        Notification Page
      </h1>

      <div className="w-[80%] flex mx-auto pb-10">
        <TableContainer
          component={Paper}
          sx={{ boxShadow: 3, borderRadius: "8px" }}
        >
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#f1f1f1" }}>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#d46429", padding: "1rem" }}
                >
                  Elephant ID
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#d46429", padding: "1rem" }}
                >
                  Alert Message
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#d46429", padding: "1rem" }}
                >
                  Received Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...notifications]
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) // Sorting in descending order
                .map((alert) => (
                  <TableRow
                    key={alert.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#fffbf0",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      navigate(`/elephantprofile/${alert.elephantId}`)
                    }
                  >
                    <TableCell
                      sx={{ padding: "1rem", borderBottom: "1px solid #ddd" }}
                    >
                      {alert.elephantId}
                    </TableCell>
                    <TableCell
                      sx={{ padding: "1rem", borderBottom: "1px solid #ddd" }}
                    >
                      {alert.message}
                    </TableCell>
                    <TableCell
                      sx={{ padding: "1rem", borderBottom: "1px solid #ddd" }}
                    >
                      {new Date(alert.timestamp).toLocaleString()}
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
