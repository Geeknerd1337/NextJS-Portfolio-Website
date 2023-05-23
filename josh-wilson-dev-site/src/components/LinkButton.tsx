import styled from '@emotion/styled';

interface LinkButtonProps {
  src?: string;
  alt?: string;
  href?: string;
}

const LinkImage = styled.img`
  width: 2vw;
  height: 2vw;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function LinkButton({ src, alt, href }: LinkButtonProps) {
  return (
    <a href={href}>
      <LinkImage src={src} alt={alt}></LinkImage>
    </a>
  );
}
