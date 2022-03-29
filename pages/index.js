import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Header, Divider } from "semantic-ui-react";
import ItemList from ".././src/component/ItemList";

const API_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

const Home = () => {
  const [lists, setList] = useState([]);
  const getItemLists = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setList(data);
    } catch (err) {}
  };

  useEffect(() => {
    getItemLists();
  }, []);

  return (
    <div>
      <Head>
        <title>Next JS</title>
      </Head>
      <Header as="h1" style={{ paddingTop: 40 }}>
        Best Product
      </Header>
      <Divider />
      <ItemList items={lists} />
    </div>
  );
};

export default Home;
