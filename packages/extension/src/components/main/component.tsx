import React, { PureComponent, Fragment } from "react";
import axios from "axios";

interface Brand {
    Name?: string;
    Parent?: string;
    Category?: string;
    "Pay Ratio"?: number[];
    "Privately Owned"?: string[];
    "Effective Income Tax Rate"?: number[];
    Ticker?: string[];
    "Parent Text"?: string[];
    Image?: string[];
    [key: string]: any;
}

interface IMainProps {
    brand: string;
}

interface IMainState {
    data: Brand;
    // news: any;
}

class Main extends PureComponent<IMainProps, IMainState> {
    state: IMainState = {
        data: {},
        // news: {},
    };

    componentDidMount() {
        this.fetchBrands(this.props.brand.split(" ")[0]);
        // this.fetchNews(this.props.brand);
    }

    private fetchBrands = async (brand: string) => {
        try {
            const response = await axios.get(
                `${process.env.API_URL}/?name=${brand}`,
            );

            if (response.data.length > 0) {
                this.setState({ data: response.data[0].fields });
            }
        } catch (err) {
            throw new Error(err);
        }
    };

    // private fetchNews = async(brand: string) => {
    //     try {
    //       const response = await axios.get(`${process.env.API_URL}/news/?name=${brand}`);
    //       this.setState({ news: response.data })
    //     } catch (err) {
    //       throw new Error(err);

    //     }
    //   }

    public render() {
        const { data } = this.state;

        const image = data["Image"] && data["Image"]![0];
        const parentText = data["Parent Text"];
        const payRatio = data["Pay Ratio"] && data["Pay Ratio"]![0];
        const taxRate =
            data["Effective Income Tax Rate"] &&
            data["Effective Income Tax Rate"]![0];

        return (
            <Fragment>
                {Object.entries(data).length ? (
                    <div style={styles.container}>
                        <img src={image} style={styles.image} />

                        <ul style={styles.ul}>
                            <li>Parent Company: {parentText}</li>
                            {payRatio && (
                                <li>Parent CEO Pay Ratio: {payRatio}:1</li>
                            )}
                            {taxRate && (
                                <li>
                                    Parent Effective Tax Rate:{" "}
                                    {(taxRate! * 100).toFixed(2)}%
                                </li>
                            )}
                        </ul>
                    </div>
                ) : (
                    <div></div>
                )}
            </Fragment>
        );
    }
}

const styles = {
    container: {
        padding: "20px",
        border: "1px solid #e0e0e0",
        marginBottom: "10px",
        boxShadow: "rgba(0,0,0,0.1) 0 5px 20px 0",
        borderRadius: "4px",
    },
    image: { maxWidth: "150px", maxHeight: "35px", marginBottom: "10px" },
    ul: { margin: 0 },
};

export { Main };
