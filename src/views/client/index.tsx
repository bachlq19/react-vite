import { Link } from "react-router-dom";

const Client = () => {
  return (
    <div>
      <div>this is client page</div>
      <Link to={"/admin"}>go to admin</Link>
    </div>
  );
};

export default Client;
