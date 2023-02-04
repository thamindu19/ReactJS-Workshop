import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import useFormik from "./../hooks/useFormik";

import Shareholders from "./Shareholders";
import ShareholderForm from "./ShareholderForm";

const ROWS = [
    {
        id: 1,
        name: "Rahul",
        address: "Malabe",
        business_registration: "001",
        ownership_type: "Agreement",
        value_per_share: "2333",
        share_class: "Class",
    },
    {
        id: 2,
        name: "Isuru",
        address: "Matara",
        business_registration: "002",
        ownership_type: "Agreement",
        value_per_share: "2333",
        share_class: "Class",
    },
    {
        id: 3,
        name: "Nuwan",
        address: "Malabe",
        business_registration: "003",
        ownership_type: "Agreement",
        value_per_share: "2333",
        share_class: "Class",
    },
];

const initial = {
    name: "",
    address: "",
    business_registration: "",
    ownership_type: "",
    share_count: "",
    value_per_share: "",
    share_class: "",
};

const Index = () => {
    const { formData, onChange, onReset } = useFormik(initial);
    const [shareholders, setShareholders] = useState(ROWS);
    // const [shareholder, setShareholder] = useState(initial);

    // const changeHandler = (event) => {
    //     setShareholder({
    //         ...shareholder,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // console.log(formData);

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(shareholder);
        setShareholders([...shareholders, { ...formData, id: new Date() }]);
        // setShareholder(initial);
        onReset();
    };

    const deleteHandler = (id) => {
        setShareholders([
            ...shareholders.filter((shareholder) => shareholder.id !== id),
        ]);
    };

    // console.log(shareholder);

    return (
        <Grid container spacing={3} sx={{ p: 2 }}>
            <Grid item xs={12}>
                <ShareholderForm
                    shareholder={formData}
                    onChange={onChange}
                    onSubmit={submitHandler}
                />
            </Grid>
            <Grid item xs={12}>
                <Shareholders
                    shareholders={shareholders}
                    onDelete={deleteHandler}
                />
            </Grid>
        </Grid>
    );
};

export default Index;
