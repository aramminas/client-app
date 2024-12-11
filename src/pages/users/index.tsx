import { Link } from "react-router-dom";
import Button from "../../components/common/button";
import { UsersList } from "../../components/users-list";

export const Users = () => {
  return (
    <>
      <div className="flex gap-16 my-4">
        <div>
          <h2>Users Page</h2>
          <p>Welcome to the Users page!</p>
        </div>
        <div>
          <Link to="/users/create">
            <Button>+ Create User</Button>
          </Link>
        </div>
      </div>
      <UsersList />
    </>
  );
};
