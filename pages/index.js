import { useEffect, useState } from "react";
import { Header, Divider } from "semantic-ui-react";
import axios from "axios";
import dynamic from "next/dynamic";

import Loading from ".././src/component/Loading";
import WrappedDefaultInfo from ".././src/component/WrappedDefaultInfo.tsx";

const ItemList = dynamic(() => import(".././src/component/ItemList"));

const API_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

const Home = () => {
  const [lists, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getItemLists = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setList(data);
      setIsLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    getItemLists();
  }, []);

  return (
    <div>
      <WrappedDefaultInfo title="Main" description="Main">
        <Header as="h1" style={{ paddingTop: 40 }}>
          Best Product
        </Header>
        <Divider />

        <Loading isLoading={isLoading}>
          <ItemList items={lists} />
        </Loading>
      </WrappedDefaultInfo>
    </div>
  );
};

export default Home;
