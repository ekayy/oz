import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Overlay } from "../component";
import { Story } from "@src/components/dev";

// // // //

storiesOf("Overlay", module).add("renders", () => {
    return (
        <Story>
            <Overlay />
        </Story>
    );
});
