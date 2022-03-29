import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

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
      <Gnb />
    </div>
  );
};

export default Top;
