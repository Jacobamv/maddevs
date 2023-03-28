import { Icons, PersonalLink, Sticky } from "components/modules";
import { Text } from "components/elements";
import "./TeamDisplay.scss";

function TeamDisplay() {
  return (
    <div className='templates__team-display'>
      <Sticky isNav={true}>MadDevs</Sticky>
      <p>In this part, you have the opportunity to see detailed information about each of the directors <br/> by clicking on the photo</p>
      <Icons />
      <Text>
        <div>
          <div>
            Also, by clicking on the blocks below you will be given the opportunity to
            view in detail information about each aspect of our work.
          </div>
          <div>Enjoy!</div>
        </div>
      </Text>
      <PersonalLink />
      <br/>
      <br/>
    </div>
  );
}

export default TeamDisplay;
