import { useAllUsers } from "../../hooks/useAllUsers";
import { ErrorMsg } from "../common/error-msg";
import { Loading } from "../common/loading";
import { UserListItem } from "../user-list-item";

export const UsersList = () => {
  const { users, error, loading } = useAllUsers();

  if (error) {
    return <ErrorMsg>{error}</ErrorMsg>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative flex w-1/2 flex-col rounded-lg border border-slate-200 bg-white shadow-sm mb-10">
      <nav className="flex min-w-[240px] flex-col gap-1 p-1.5">
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </nav>
    </div>
  );
};
