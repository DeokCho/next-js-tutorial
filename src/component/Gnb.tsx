import { useState } from "react";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

import GnbItem from "./GnbItem";
import route from "../../common/route/route";

const Gnb = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const router = useRouter();

  const goToLink = (e, { path, name }) => {
    e.preventDefault();
    setActiveItem(name);
    router.push(path || name.toLowerCase());
  };

  return (
    <Menu inverted>
      {route.map(({ name, path }) => (
        <GnbItem
          key={name}
          name={name}
          path={path}
          active={activeItem === name}
          onClick={goToLink}
        />
      ))}
    </Menu>
  );
};

export default Gnb;

{
  /* <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={goToLink}
      />
      <Menu.Item
        name="message"
        active={activeItem === "message"}
        onClick={goToLink}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={goToLink}
      /> */
}
