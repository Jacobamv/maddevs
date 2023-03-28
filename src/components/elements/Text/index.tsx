import { TextProps } from "components/models/elements";
import "./Text.scss";

export default function Text({ styles, children, ...rest }: TextProps) {
  return (
    <p className='elements__text' style={styles} {...rest}>
      {children}
    </p>
  );
}
