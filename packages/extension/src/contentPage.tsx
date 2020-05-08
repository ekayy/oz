import React from "react";
import ReactDOM from "react-dom";

import { Main } from "./components/main";

const start = () => {
    if (
        window.location.hostname === "amazon.com" ||
        window.location.hostname === "www.amazon.com"
    ) {
        const tag = document.createElement("div");
        tag.setAttribute("id", "main-root");
        const productDescription: HTMLElement | null = document.getElementById(
            "desktop_unifiedPrice",
        );

        productDescription?.append(tag);
        const brand: string =
            document.getElementById("bylineInfo")?.innerText || "";
        ReactDOM.render(
            <Main brand={brand} />,
            document.getElementById("main-root"),
        );
    }
};

start();

export { start };
