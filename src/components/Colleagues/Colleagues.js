import Colleague from "../Colleauge/Colleague";

function Colleagues(props) {

  const initialColleagues = [
   
  ]; 
  
  
  return (
    <>
      <div className="colleagues">
        {initialColleagues.slice(0, props.amount).map((colleague) => {
          return (
            <Colleague
              name={colleague.name}
              src={colleague.image.url}
              alt={colleague.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default Colleagues;
