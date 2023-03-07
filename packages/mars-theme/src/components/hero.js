import { connect, styled } from "frontity";
import FeaturedMedia from "./images/hero-portofolio.jpg";
import tw from "twin.macro";

const Hero = ({ state }) => {
  return (
    
      <Wrapper>
        <HeroImage  src={FeaturedMedia} />
        <Container>
          <Title>{state.frontity.title}</Title>
          <Description>{state.frontity.description}</Description>
        </Container>
      </Wrapper>
  );
};

// Connect the Hero component to get access to the `state` in it's `props`
export default connect(Hero);

const Wrapper = styled.div`
${tw`relative flex flex-col w-full h-full items-center justify-center h-[400px]`};
`;

const Container = styled.div`
${tw`relative z-30 flex flex-col items-center justify-center w-full`};
`;

const Title = styled.h2`
${tw`mb-4 text-6xl text-primary`}
`;

const Description = styled.h4`
${tw`text-xl text-primary`}
`;

const HeroImage = styled.img`
${tw`absolute top-0 z-10 w-full h-full`}
`;
