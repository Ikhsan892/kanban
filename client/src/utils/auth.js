import { http } from "./http";

export const login = async (name, pw) => {
  return await http.post("/user/login", {
    nama: name,
    password: pw,
  });
};
