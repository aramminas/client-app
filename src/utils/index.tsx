import { serverUrl } from "../assets/constants/envs";

export const serverImageUrl = (imgUrl: string) => {
  return `${serverUrl}/${imgUrl}`;
};
