import { useEffect, useState } from "react";

import { apiUrl } from "../assets/constants/envs";
import { ProfessionsT } from "../types/professions";

export const useAllProfessions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [professions, setProfessions] = useState<ProfessionsT[] | []>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/professions`);

        if (response.ok) {
          const { data } = await response.json();
          setProfessions(data);
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

  return { professions, error, loading };
};
