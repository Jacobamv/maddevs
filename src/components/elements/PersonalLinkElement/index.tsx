import { PersonalLinkElementProps } from "components/models";
import "./PersonalLinkElement.scss";

function PersonalLinkElement({ linkImage }: PersonalLinkElementProps) {
  return (
    <div className='elements__personal-link'>
      <img src={linkImage} alt='bg-image' />
    </div>
  );
}

export default PersonalLinkElement;
