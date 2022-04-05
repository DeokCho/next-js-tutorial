import Top from "src/components/main/Top";
import Footer from "src/components/main/Footer";

const Main = ({ children }) => {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
