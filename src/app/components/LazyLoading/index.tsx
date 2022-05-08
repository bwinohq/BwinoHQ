import { useEffect, useState, ImgHTMLAttributes } from 'react';
import styled from "styled-components";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    placeholderImg?: any;
    errorImg?: string;
  }

const ImageDiv = ({ src, placeholderImg, errorImg, ...props }: ImageProps) => {
    const [imgSrc, setSrc] = useState(placeholderImg || src);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", () => {
      setSrc(src);
    });
    img.addEventListener("error", () => {
      setSrc(errorImg || placeholderImg);
    });
  }, [src, placeholderImg, errorImg]);
  return (
    <img {...props} src={imgSrc} alt="" />
  )
}

// const imgDiv = styled.div`
//   height: 400px;
//   width: 400px;
//   background-color: purple;
// `

export default ImageDiv;