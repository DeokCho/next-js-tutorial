import axios from "axios";

import BestItem from "src/components/bestitem/BestItem";
import WrappedDefaultInfo from "src/components/layout/WrappedDefaultInfo";

const Item = ({ item, envName }) => {
  const { name, description } = item;
  console.log("환경변수 : ", { envName });
  return (
    <WrappedDefaultInfo title={name} description={description}>
      <BestItem item={item} />
    </WrappedDefaultInfo>
  );
};

export default Item;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`;
  const { data } = await axios.get(URL);
  return {
    props: {
      item: data,
      envName: process.env.name,
    },
  };
};
