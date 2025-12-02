import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { Session, User } from "@supabase/supabase-js";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  signUp: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  sendPasswordReset: (email: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // 1. Hämta session när appen laddar
    const setup = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
    };
    setup();

    // 2. Lyssna på auth-ändringar
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
    });

    // cleanup
    return () => subscription.unsubscribe();
  }, []);

  const signUp = (email: string, password: string) =>
    supabase.auth.signUp({
      email,
      password,
    });

  const signIn = (email: string, password: string) =>
    supabase.auth.signInWithPassword({
      email,
      password,
    });

  const signOut = () => supabase.auth.signOut();

  const sendPasswordReset = (email: string) =>
    supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

  return (
    <AuthContext.Provider
      value={{ user, session, signUp, signIn, signOut, sendPasswordReset }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
