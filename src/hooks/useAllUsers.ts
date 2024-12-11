import { useEffect, useState } from "react";

import { apiUrl } from "../assets/constants/envs";
import { UserT } from "../types/user";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<UserT[] | []>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/users`);

        if (response.ok) {
          const { data } = await response.json();
          setUsers(data);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          console.log("Error:: ", error);
          setError("Server error");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { users, error, loading };
};
