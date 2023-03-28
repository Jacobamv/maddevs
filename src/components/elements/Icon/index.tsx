import { IconProps } from "components/models";
import "./Icon.scss";

export default function Icon({ styles, children, ...rest }: IconProps) {
  return (
    <div className='elements__icon' style={{ ...styles }} {...rest}>
      {children}
    </div>
  );
}
