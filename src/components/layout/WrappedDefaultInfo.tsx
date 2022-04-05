import Head from "next/head";

const WrappedDefaultInfo = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>NEXT JS Tutorial - {title}</title>
        <meta name="description" content={description} />
      </Head>
      {children && children}
    </>
  );
};

export default WrappedDefaultInfo;
