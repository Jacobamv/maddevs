import { Button, Header, Link, Text } from "components/elements";
import Sticky from "../Sticky";
import "./BusinessAD.scss";
import ReactPlayer from 'react-player'

function BusinessAD() {
  return (
    <>
      <Sticky isNav={false}>MadDevs</Sticky>
      <div className='modules__problem-resolution'>
        <ReactPlayer playing url='videos/5.MP4'
          width='100%'
          height='100%'
          controls={true}
        />
        <Header>Business AD plan</Header>
        <Text>
        ConnectEd plans to generate revenue through affordable subscription fees, device sales, and partnerships with governments and NGOs, adapt its offerings by analyzing competitors, use direct sales, partnerships, and community outreach to reach customers, retain customers by providing excellent service, and measure success through revenue, profit margin, customer acquisition cost, and customer lifetime value.
        </Text>
        <Link
          styles={{
            color: "white",
            textDecoration: "none",
          }}
          to='/team-display'
        >
        </Link>
      </div>
    </>
  );
}

export default BusinessAD;
