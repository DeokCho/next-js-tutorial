import { memo } from "react";
import { Segment, Loader } from "semantic-ui-react";

interface LoadingProps {
  size?: { height?: string; width?: string };
  content?: string;
  isLoading: Boolean;
  children: any;
}

const Loading: React.FC<LoadingProps> = ({
  children,
  size = { height: "500px", width: "100%" },
  content = "Loading",
  isLoading,
}) => {
  return (
    <>
      {isLoading && (
        <Segment style={{ ...size }}>
          <Loader active content={content} />
        </Segment>
      )}
      {!isLoading && children}
    </>
  );
};

export default memo(Loading);
