import { songType } from "../types/songType";

export const shuffleSongs = (songs: songType[]) => {
  return [...songs].sort(() => Math.random() - 0.5);
};
