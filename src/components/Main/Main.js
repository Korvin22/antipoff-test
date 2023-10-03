import Header from "../Header/Header";
import Colleagues from "../Colleagues/Colleagues";
function Main(props) {
  return (
    <main>
      <Header signOut={props.signOut}/>
      <Colleagues />
    </main>
  );
}

export default Main;
