import styled from '@emotion/styled';
import { Colors } from '@/themes/Colors';
import DelayedDisplay from './DelayedDisplay';
import { down } from 'styled-breakpoints';

interface ProductCardProps {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
}

const ProductCardBackground = styled.div`
  border: 4px solid ${Colors.Amber};
  background-color: ${Colors.Amber};

  color: ${Colors.Amber};
  text-shadow: 0px 0px 10px ${Colors.Amber};
  font-family: 'Roboto Mono';
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  width: 95%;
`;

const ProductImage = styled.img`
  height: 100%;
`;

const Thumbail = styled.div`
  height: 10vh;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5vw;
  gap: 1vw;

  background-color: ${Colors.Background};
  color: ${Colors.Amber};
  text-shadow: 0px 0px 10px ${Colors.Amber};
  font-family: 'Roboto Mono';
`;

const Title = styled.div`
  width: 100%;
  padding: 0.5vw;
  font-size: 1.25vw;
  ${down('sm')} {
    font-size: 4vw;
  }
  font-family: 'Roboto Mono';
  font-weight: 1000;
  background-color: ${Colors.Amber};
  color: ${Colors.Background};
`;

const Description = styled.div`
  color: ${Colors.Amber};
  text-shadow: 0px 0px 10px ${Colors.Amber};
  font-family: 'Roboto Mono';
  font-size: 1vw;
  padding: 0.5vw;
  ${down('sm')} {
    font-size: 3vw;
  }
`;

const ProductLink = styled.a`
  transition: transform 0.1s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default function ProductCard({
  title,
  description,
  link,
  image,
}: ProductCardProps) {
  return (
    <ProductLink href={link} target="_blank">
      <ProductCardBackground>
        <DelayedDisplay delay={100}>
          <Title>{title}</Title>
        </DelayedDisplay>
        <Info>
          <Thumbail>
            <DelayedDisplay delay={200}>
              <ProductImage src={image} />
            </DelayedDisplay>
          </Thumbail>
          <DelayedDisplay delay={300}>
            <Description>{description}</Description>
          </DelayedDisplay>
        </Info>
      </ProductCardBackground>
    </ProductLink>
  );
}
