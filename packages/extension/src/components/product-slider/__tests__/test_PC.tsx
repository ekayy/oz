import * as React from "react";
import { ProductSlider } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
    const tree: ReactTestRendererJSON | null = renderer
        .create(<ProductSlider />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
