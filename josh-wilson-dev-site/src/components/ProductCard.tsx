import styled from '@emotion/styled';
import { Colors } from '@/themes/Colors';
import DelayedDisplay from './DelayedDisplay';

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
  align-items: center;
`;

const ProductImage = styled.img`
  height: 100%;
`;

const Thumbail = styled.div`
  height: 100%;
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
`;

const ProductLink = styled.a`
  transition: transform 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: red;
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
