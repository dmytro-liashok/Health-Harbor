import { instance } from "./instanceAPI";

export const token = {
  set: (token: string) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clear: () => {
    instance.defaults.headers.common.Authorization = "";
  },
};
