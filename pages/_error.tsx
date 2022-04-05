import { Icon } from "semantic-ui-react";

const Error500 = ({ statusCode }) => {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      {statusCode ? (
        <>
          <Icon name="warning circle" color="red" />
          {`${statusCode} 에러 발생`}
        </>
      ) : (
        "클라이언트 에러"
      )}
    </div>
  );
};

Error500.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error500;
