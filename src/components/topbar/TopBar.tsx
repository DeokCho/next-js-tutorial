import { useState } from "react";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

import TopBarItem from "src/components/topbar/TopBarItem";
import route from "common/route/route";

const TopBar = () => {
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
        <TopBarItem
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

export default TopBar;
