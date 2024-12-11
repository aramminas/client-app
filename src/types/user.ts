export type UserT = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string | null;
  profession_id: number | null;
  profession_name: string | null;
  created_at: Date;
  updated_at: Date;
};

export type CreateUserT = {
  firstName: string;
  lastName: string;
  email: string;
  profession: string | number;
  avatar?: File | undefined;
};
