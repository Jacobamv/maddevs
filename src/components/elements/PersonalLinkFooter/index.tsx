import { PersonalLinkFooterProps } from "components/models";
import "./PersonalLinkFooter.scss";

function PersonalLinkFooter({ text, image }: PersonalLinkFooterProps) {
  return (
    <div className='elements__personal-footer'>
      <img src={image} alt='personal-image' />
      <p>{text}</p>
    </div>
  );
}

export default PersonalLinkFooter;
