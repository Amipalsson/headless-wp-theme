import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logoImg from "./images/logo.png";
import tw from "twin.macro";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          {/* Add header logo*/}
          <Logo img src={logoImg} alt="Logo" />
          {/* <Title>{state.frontity.title}</Title> */}
        </StyledLink>
        {/*<Description>{state.frontity.description}</Description> */}
        <Nav />
      </Container>
      <MobileMenu />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  ${tw`flex items-end justify-between w-full max-w-full text-primary`};
`;
const StyledLink = styled(Link)`
${tw `no-underline`};
`;
{
  /* Logo styled component */
}
const Logo = styled.img`
  ${tw`h-16 px-6`}
`;
