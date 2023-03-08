import { Link } from "react-router-dom";

const Admin = () => {
  return <div>
    <div>this is admin page</div>
    <Link to={"/"}>go to home</Link>
    <Link to={"/admin/children"}>go to children</Link>
  </div>;
};

export default Admin;
