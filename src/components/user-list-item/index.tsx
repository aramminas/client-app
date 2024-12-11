import { FC } from "react";
import { UserT } from "../../types/user";
import { serverImageUrl } from "../../utils";

type UserListItemProps = {
  user: UserT;
};

export const UserListItem: FC<UserListItemProps> = ({
  user: { id, first_name, last_name, email, avatar, profession_name },
}) => {
  const defaultAvatar = `https://loremflickr.com/200/200?random=${id}`;

  return (
    <div
      role="button"
      className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
    >
      <div className="mr-4 grid place-items-center">
        <img
          alt="candice"
          src={avatar ? serverImageUrl(avatar) : defaultAvatar}
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
        />
      </div>
      <div>
        <h6 className="text-slate-800 font-medium">
          {first_name} {last_name}
        </h6>
        <p className="text-slate-500 text-sm">
          {" "}
          {profession_name ?? "-"} / {email}
        </p>
      </div>
    </div>
  );
};
