import styled from '@emotion/styled';
import { Colors } from '@/themes/Colors';
import ProductCard from './ProductCard';

const VFXHolder = styled.div`
  width: 90%;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.Background};
  gap: 2vh;
  padding-bottom: 10vh;
`;

export default function VFX() {
  return (
    <VFXHolder>
      <ProductCard
        title="Dot Com Guy"
        description="Dot Com Guy is a sequel to the music video HD ME. A test of various VFX skills such as 3D tracking, 3D modeling, and compositing. Often described as weirdly compelling."
        image="dcg.png"
        link="https://www.youtube.com/watch?v=8WPKzuzy9UQ"
      />
      <ProductCard
        title="AI: The Modern Eldritch Horror"
        description="A student short film I made for my computer ethics class in school. It shows of my skills using video editing programs like Sony Vegas and Davinci resolve. It covers the many dangerous associated with generative AI and the potential future it may lead us to."
        image="ai.png"
        link="https://www.youtube.com/watch?v=Ik_da_xMPzE"
      />
    </VFXHolder>
  );
}
