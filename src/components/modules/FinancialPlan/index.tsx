import { Button, Header, Link, Text } from "components/elements";
import Sticky from "../Sticky";
import "./FinancialPlan.scss";
import ReactPlayer from 'react-player'

function FinancialPlan() {
  return (
    <>
      <Sticky isNav={false}>MadDevs</Sticky>
      <div className='modules__problem-resolution'>
        <ReactPlayer playing url='videos/6.MP4'
          width='100%'
          height='100%'
          controls={true}
        />
        <Header>Financial plan</Header>
        <Text>
        We plan to develop realistic financial projections, conduct market and industry analysis, create an effective budget, implement a risk management plan, and establish a financial reporting system that includes allocating costs for management, marketing, business, and finance expenses.
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

export default FinancialPlan;
