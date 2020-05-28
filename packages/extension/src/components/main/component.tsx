import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';

const API_URL = process.env.API_URL as string;

interface Brand {
  category?: string[];
  description?: string;
  employeeNum?: string;
  image?: string;
  name?: string;
  parent?: string[];
  payRatio?: number;
  taxRate?: number;
  ticker?: string;
}

export const Main: React.FC<{ brandName: string }> = ({ brandName }) => {
  const [data, setData] = useState<Brand>({});
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchBrand = async (brand: string): Promise<void> => {
      try {
        setIsFetching(true);
        const response = await axios.get(API_URL, {
          params: { name: brand },
        });
        setData(response.data);
        setIsFetching(false);
      } catch (err) {
        setData({});
        setIsFetching(false);
        throw new Error(err);
      }
    };
    fetchBrand(brandName);
  }, []);

  return (
    <>
      {!isFetching && (
        <div className="container">
          <img src={data.image} className="image" />

          {/* <ul className="list">
            <li>Parent Company: {data.parent}</li>
            {data.payRatio && <li>Parent CEO Pay Ratio: {data.payRatio}:1</li>}
            {data.taxRate && <li>Parent Effective Tax Rate: {(data.taxRate * 100).toFixed(2)}%</li>}
          </ul> */}
        </div>
      )}
    </>
  );
};
