import { Grid } from "@mui/material";
import React from "react";
import {useState} from "react"

import Shareholders from "./Shareholders";
import ShareholderForm from "./ShareholderForm";

const ROWS = [
  {
    id: 1,
    name: "Rahul",
    address: "Malabe",
    business_registration: "urur",
    ownership_type: "agreement",
    value_per_share: "2333",
    share_class: "class",
  },
  {
    id: 2,
    name: "Isuru",
    address: "Matara",
    business_registration: "urur",
    ownership_type: "agreement",
    value_per_share: "2333",
    share_class: "class",
  },
  {
    id: 3,
    name: "Nuwan",
    address: "malabe",
    business_registration: "urufffr",
    ownership_type: "agreement",
    value_per_share: "2333",
    share_class: "class",
  },
];

const Index = () => {
  const [shareholders, setShareholders] = useState(ROWS);
  const [formData, setFormData] = useState({});

  const deleteHandler = (id) => {
    setShareholders([...shareholders.filter((shareholder) => shareholder.id !== id),]);
  }
  return (
    <Grid container spacing={3} sx={{p: 2}}>
      <Grid item xs={12}>
        <ShareholderForm />
      </Grid>
      <Grid item xs={12}>
        <Shareholders shareholders={shareholders} onDelete={deleteHandler} />
      </Grid>
    </Grid>
  );
};

export default Index;
