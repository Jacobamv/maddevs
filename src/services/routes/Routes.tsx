import { Routes as Switch, Route } from "react-router-dom";
import { BusinessADPage, IntroPage, MarketingPage, ProblemDefinition, TeamDisplay } from "pages";
import { FinancialPlan, ProblemResolution, Sticky } from "components/modules";
import { Button, Header, Link, Text } from "components/elements";
import ReactPlayer from "react-player";

function Management() {
  return (
    <>
      <Sticky isNav={true}>MadDevs</Sticky>
      <div className='modules__problem-definition'>
        <ReactPlayer
          playing
          url='videos/3.MP4'
          width='100%'
          height='100%'
          controls={true}
        />{" "}
        <Header>Management plan</Header>
        <Text>
          A company plans to bridge the digital divide by providing affordable
          internet access, digital devices, and digital literacy programs to
          underserved communities worldwide while securing funding through
          grants, partnerships, and investments, setting realistic milestones
          and deadlines, maintaining transparent communication with
          stakeholders, and identifying potential challenges to mitigate risks.
        </Text>
      </div>
    </>
  );
}

function Business() {
  return (
    <>
      <Sticky isNav={true}>MadDevs</Sticky>
      <div className='modules__problem-definition'>
        <ReactPlayer
          playing
          url='videos/5.MP4'
          width='100%'
          height='100%'
          controls={true}
        />{" "}
        <Header>Business AD plan</Header>
        <Text>
          ConnectEd plans to generate revenue through affordable subscription
          fees, device sales, and partnerships with governments and NGOs, adapt
          its offerings by analyzing competitors, use direct sales,
          partnerships, and community outreach to reach customers, retain
          customers by providing excellent service, and measure success through
          revenue, profit margin, customer acquisition cost, and customer
          lifetime value.
        </Text>
      </div>
    </>
  );
}

function Marketing() {
  return (
    <>
      <Sticky isNav={true}>MadDevs</Sticky>
      <div className='modules__problem-definition'>
        <ReactPlayer
          playing
          url='videos/4.MP4'
          width='100%'
          height='100%'
          controls={true}
        />{" "}
        <Header>Marketing plan</Header>
        <Text>
          Our aim is to bridge the digital divide in underserved communities by
          offering affordable internet access, digital devices, and literacy
          programs, using various marketing strategies to reach potential
          beneficiaries and partners, and measuring success through website
          traffic, leads, conversions, and customer feedback.
        </Text>
      </div>
    </>
  );
}

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<IntroPage />} />
      <Route path='/team-display' element={<TeamDisplay />} />
      <Route path='/problem-definition' element={<ProblemDefinition />} />
      <Route path='/problem-resolution' element={<ProblemResolution />} />
      <Route path='/management' element={<Management />} />
      <Route path='/business' element={<BusinessADPage />} />
      <Route path='/finance' element={<FinancialPlan />} />
      <Route path='/marketing' element={<MarketingPage />} />
    </Switch>
  );
}
