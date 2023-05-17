/*
Create a footer component with the following specifications:

1. The footer must be fixed at the bottom of the page
2. Use the Paper component from Material UI
3. Use the Typography component from Material UI
3. The text must say "Made with ❤️ by LadyKerr & GitHub Copilot" and "Powered by OpenAI"
4. The text "GitHub Copilot" must be a link to https://copilot.github.com/ that opens in a new tab with alt text "github copilot"
5. The text "OpenAI" must be a link to https://openai.com/ that opens in a new tab with alt text "openai api"
*/

import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Footer = () => {
    return (
        <Paper
        elevation={24}
        style={{
            padding: "20px",
            position: "fixed",
            bottom: "0",
            width: "100%",
            textAlign: "center",
        }}
        >
        <Typography>
            Made with ❤️ by LadyKerr &
            <a href="https://copilot.github.com/" target="_blank" rel="noopener noreferrer" alt="github copilot" > GitHub Copilot</a>
            </Typography>
        <Typography>
            Powered by
            <a href="https://platform.openai.com/overview" target="_blank" rel="noopener noreferrer" alt="openai api"> OpenAI</a> 🤖
        </Typography>
        </Paper>
    );
};

export default Footer;