import React from "react";
import { Grid, TextField, Button } from "@mui/material";

const formDetails = [
    {
        label: "Name"
    },
    {
        label: "Address"
    },
    {
        label: "Business Registration"
    },
    {
        label: "Ownership Type"
    },
    {
        label: "Share Count"
    },
    {
        label: "Value Per Share"
    },
    {
        label: "Share Class"
    }
]

const ShareholderForm = () => {
    return (
        <form>
            <Grid container spacing={3}>
                {formDetails.map((item, index) => (
                <Grid item xs={4} key={index}>
                    <TextField label={item.label} fullWidth  />
                </Grid>
                ))}
                <Grid item xs={8} />
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <Button variant="contained" sx={{ float: "right" }}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default ShareholderForm;