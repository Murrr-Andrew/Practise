import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Row from "./ui/Row";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">The Wild Oasis</Heading>
            <Button
              variation="primary"
              size="medium"
              onClick={() => alert("Check in")}
            >
              Check in
            </Button>
          </div>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
