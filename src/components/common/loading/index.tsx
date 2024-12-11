import { LoadingSvg } from "../../../assets/svgs/components/loading-svg";

export const Loading = () => {
  return (
    <div role="status" className="flex items-center justify-center gap-x-3">
      <LoadingSvg />
      <span className="text-gray-700 text-2xl">Loading...</span>
    </div>
  );
};
