import { BoxSpinner } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => (
  <BoxSpinner>
    <RotatingLines
      strokeColor="#303f9f"
      strokeWidth="5"
      animationDuration="0.8"
      width="96"
      visible={true}
    />
  </BoxSpinner>
); // повернення для рендеру розмітки завантажувача (spinner-а), тег BoxSpinner (div)
