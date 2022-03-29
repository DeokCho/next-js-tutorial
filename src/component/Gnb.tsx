import { useState } from "react";
import { Menu } from "semantic-ui-react";

const Gnb = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
      />
      <Menu.Item
        name="message"
        active={activeItem === "message"}
        onClick={() => setActiveItem("message")}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={() => setActiveItem("friends")}
      />
    </Menu>
  );
};

export default Gnb;
