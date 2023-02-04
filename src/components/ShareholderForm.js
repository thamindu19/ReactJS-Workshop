import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

const formDetails = [
    {
        label: "Name",
        name: "name",
    },
    {
        label: "Address",
        name: "address",
    },
    {
        label: "Business Registration",
        name: "business_registration",
    },
    {
        label: "Ownership Type",
        name: "ownership_type",
    },
    {
        label: "Share Count",
        name: "share_count",
    },
    {
        label: "Value Per Share",
        name: "value_per_share",
    },
    {
        label: "Share Class",
        name: "share_class",
    },
];

const ShareholderForm = ({ shareholder, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={3}>
                {formDetails.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <TextField
                            label={item.label}
                            name={item.name}
                            fullWidth
                            value={shareholder[item.name]}
                            onChange={onChange}
                        />
                    </Grid>
                ))}
                {/* <Grid item xs={4}>
                    <TextField
                        label="Name"
                        fullWidth
                        name="name"
                        onChange={changeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Address"
                        fullWidth
                        name="address"
                        onChange={changeHandler}
                    />
                </Grid> */}
                <Grid item xs={8} />
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        sx={{ float: "right" }}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ShareholderForm;
