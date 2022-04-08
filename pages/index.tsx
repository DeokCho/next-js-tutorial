import { useEffect, useState } from "react";
import { Header, Divider } from "semantic-ui-react";
import axios from "axios";
import dynamic from "next/dynamic";

import WrappedDefaultInfo from "src/components/layout/WrappedDefaultInfo";

const BestItemList = dynamic(
  () => import("src/components/bestitem/BestItemList")
);

const Home = ({ list }) => {
  return (
    <div>
      <WrappedDefaultInfo title="Main" description="Main">
        <Header as="h1" style={{ paddingTop: 40 }}>
          Best Product
        </Header>
        <Divider />
        <BestItemList items={list} />
      </WrappedDefaultInfo>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const URL = process.env.apiUrl;
  const { data } = await axios.get(URL);
  return {
    props: {
      list: data,
      envName: process.env.name,
    },
  };
};
