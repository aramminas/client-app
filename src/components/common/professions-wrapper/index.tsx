import { useAllProfessions } from "../../../hooks/useAllProfessions";
import { ProfessionsT } from "../../../types/professions";
import { ErrorMsg } from "../error-msg";
import { Loading } from "../loading";
import { Select } from "../select";

export const ProfessionsSelectWrapper = () => {
  const { professions, error, loading } = useAllProfessions();

  if (error) {
    return <ErrorMsg>{error}</ErrorMsg>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Select<ProfessionsT>
      name="profession"
      options={professions}
      placeholder="Select a profession"
    />
  );
};
