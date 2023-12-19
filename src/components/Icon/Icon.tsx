import svgSprite from "../../img/svg-sprite.svg";
import { IconProps } from "../../types/IconProps";

const Icon: React.FC<IconProps> = ({ idIcon, className, onClick }) => {
  return (
    <>
      <svg className={className} onClick={onClick}>
        <use href={`${svgSprite}#${idIcon}`}></use>
      </svg>
    </>
  );
};

export default Icon;
