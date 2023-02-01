import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const Shareholders = ({ shareholders, onDelete }) => {
  const COLUMNS = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "business_registration",
      headerName: "Business Registration",
      flex: 1,
    },
    {
      field: "ownership_type",
      headerName: "OwnerShip Type",
      flex: 1,
    },
    {
      field: "value_per_share",
      headerName: "Value Per Share",
      flex: 1,
    },
    {
      field: "share_class",
      headerName: "Share Class",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      renderCell: (params) => <Button color="error" variant="contained" onClick={onDelete.bind(null, params.row.id)} >Delete</Button>
    },
  ];

  return <DataGrid columns={COLUMNS} rows={shareholders} sx={{ minHeight: 400 }} />;
};

export default Shareholders;
