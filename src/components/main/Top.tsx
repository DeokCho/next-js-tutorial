import Image from "next/image";
import { Header } from "semantic-ui-react";

import TopBar from "src/components/topbar/TopBar";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Image
            src="/images/icon.png"
            alt="icon"
            width="100"
            height="100"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">NEXT JS TUTORIAL</Header>
      </div>
      <TopBar />
    </div>
  );
};

export default Top;
