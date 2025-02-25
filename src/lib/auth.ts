import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  reputation: number;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateReputation: (points: number) => void;
  loginWithGoogle: () => Promise<void>;
};

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const useAuth = create<AuthStore>(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => {
        set({ user: null, isAuthenticated: false });
        window.location.href = "/";
      },
      loginWithGoogle: async () => {
        try {
          const auth = new window.google.auth2.GoogleAuth({
            client_id: GOOGLE_CLIENT_ID,
            scope: "profile email",
          });

          const googleUser = await auth.signIn();
          const profile = googleUser.getBasicProfile();

          const user = {
            id: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            avatar: profile.getImageUrl(),
            reputation: 100,
          };

          set({ user, isAuthenticated: true });
        } catch (error) {
          console.error("Google login failed:", error);
        }
      },
      updateReputation: (points) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, reputation: state.user.reputation + points }
            : null,
        })),
    }),
    {
      name: "auth-storage",
    },
  ),
);
