import { getData } from "./getData";

export const mediaData = async () => {
  const data = await getData();
  console.log('media',data.data);
  return data;
};
