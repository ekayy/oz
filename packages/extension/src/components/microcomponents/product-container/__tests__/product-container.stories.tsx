import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ProductContainer } from "../component";
import { Story } from "@src/components/dev";

// // // //

storiesOf("ProductContainer", module).add("renders", () => {
    return (
        <Story>
            <ProductContainer />
        </Story>
    );
});
