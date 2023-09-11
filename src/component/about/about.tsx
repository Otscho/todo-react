import React from 'react';
import { Grid } from "@mui/material";


const AboutPage: React.FC = () => {
    return (
        <Grid container direction="row" color={"palegreen"}>
            <Grid item borderColor={"black"}>
                <h1>About to do App</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    );
};

export default AboutPage
