import axios from "axios";

import BestItem from "src/components/bestitem/BestItem";
import WrappedDefaultInfo from "src/components/WrappedDefaultInfo";

const Item = ({ item }) => {
  const { name, description } = item;
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
    },
  };
};
