import { useSelector } from "react-redux";

const Testing = props => {
  const data = useSelector((state) => state);
  return (
    <div>
      {console.log(data.disesaseData)}
        {props.closeShow()}
    </div>
  );
};

export default Testing;
