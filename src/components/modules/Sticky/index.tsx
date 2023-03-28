import { Button, Filler, Header } from "components/elements";
import { StickyProps } from "components/models/modules";
import { useNavigate } from "react-router-dom";
import go_back_icon from "assets/icons/go_back.svg";
import "./Sticky.scss";

function Sticky({ children, isNav }: StickyProps) {
  const navigate = useNavigate();
  const btnStyles = {
    border: "none",
    filter: "none",
    background: "none",
  };

  if (isNav) {
    return (
      <>
        <div className={`modules__sticky`}>
          <Button
            styles={btnStyles}
            onClick={() => {
              console.log("clicked");
              navigate(-1);
            }}
          >
            <img src={go_back_icon} />
          </Button>
          <Header>{children}</Header>
        </div>
        <Filler />
      </>
    );
  }

  return (
    <>
      <div className={`modules__sticky`}>
        <Header>{children}</Header>
      </div>
      <Filler />
    </>
  );
}

export default Sticky;
