import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ItemInfo from "../.././src/component/Item";
import Loading from "../.././src/component/Loading";

const Item = () => {
  const [item, setItem] = useState({
    image_link: "",
    name: "",
    price: "",
  });
  const [isLoading, setisLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  const getItem = async (id) => {
    try {
      const _id = id || JSON.parse(sessionStorage.getItem("id"));
      const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${_id}.json?brand=maybelline`;
      const { data } = await axios.get(API_URL);
      setItem(data);
      setisLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    id && sessionStorage.setItem("id", id as string);
    getItem(id);
    return () => sessionStorage.removeItem("id");
  }, []);

  return (
    <Loading isLoading={isLoading} size={{ height: "270px" }}>
      <ItemInfo item={item} />
    </Loading>
  );
};

export default Item;
