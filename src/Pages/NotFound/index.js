import { Container, Info, Title } from "./styledComponents";

const NotFound = () => {
  return (
    <Container>
      <div>
        <Title content="404">404</Title>
        <Info content="Page Not Found">Page Not Found</Info>
      </div>
    </Container>
  );
};

export default NotFound;
