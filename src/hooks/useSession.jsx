import { login } from "@/data/models/auth";
import { create } from "zustand";

const useSession = create((set) => ({
  loading: false,
  user: undefined,
  login: async (email, password) => {
    set({ loading: true });
    const user = await login(email, password);
    set({ user });
    set({ loading: false });
  },
  registerUser: async (user) => {
    set({ loading: true });
    const userData = await login(user);
    set({ user: userData });
    set({ loading: false });
  },
}));

export default useSession;
