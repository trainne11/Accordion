import Accordion from "./components/Accordion";

function App() {
  let users = [
    {
      label : "hey how are you doing?",
      content : "I am doing good wht abt u?"
    },
    {
      label : "i wanna fall with react",
      content : "ME too.................."
    }
  ]
  return <Accordion users={users}/>;
}

export default App;
