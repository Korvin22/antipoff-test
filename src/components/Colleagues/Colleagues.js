import Colleague from "../Colleauge/Colleague";
import initialColleagues from "../../vendor/constants";
function Colleagues(props) {

  return (
    <>
     
        <div className="colleagues">
          {initialColleagues.slice(0, props.amount).map((colleague) => {
            return (
              <Colleague
                name={colleague.name}
                src={colleague.image}
                alt={colleague.name}
              />
            );
          })}
        </div>
      
    </>
  );
}

export default Colleagues;
