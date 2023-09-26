import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ProjectAlert from "./components/ProjectAlert";

function App() {
  // let items = [
  //   "New York",
  //   "Tokyo",
  //   "Mumbai",
  //   "San Francisco",
  //   "Paris",
  //   "London",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Alert>
  //       <b>Hello</b> Hello World
  //     </Alert>
  //   </div>
  // );

  const handleClick = () => {
    console.log("Clicked");
    setAlertVisibility(true);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <ProjectAlert
          text="Something went wrong"
          onClose={() => {
            setAlertVisibility(false);
          }}
        ></ProjectAlert>
      )}
      <Button onClick={handleClick} color="primary">
        Hello Click Me
      </Button>
    </div>
  );
}

export default App;
