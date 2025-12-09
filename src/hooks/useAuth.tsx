// src/hooks/useAuth.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import type { Session, User } from "@supabase/supabase-js";
import Loading from "../components/Loading";

interface Profile {
  id: string;
  name: string | null;
  bio: string | null;
  avatar_url: string | null;
}

interface AuthContextValue {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // -------------------------
  // Init session on app load
  // -------------------------
  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setSession(data.session ?? null);
        setUser(data.session?.user ?? null);

        if (data.session?.user) {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", data.session.user.id)
            .single();
          setProfile(profileData ?? null);
        }
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (err) {
        console.error("Auth init error:", err);
        setUser(null);
        setProfile(null);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);
      if (!newSession) setProfile(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // -------------------------
  // Auth methods
  // -------------------------
  const signUp = async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data.user) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        name: name,
        bio: null,
        avatar_url: null,
      });
    }
    return { data, error };
  };

  const signIn = (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password });

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
  };

  // -------------------------
  // Render loader tills auth är klar
  // -------------------------
  // if (loading) {
  //   return <Loading show={true} />;
  // }

  return (
    <AuthContext.Provider
      value={{ user, profile, session, loading, signUp, signIn, signOut }}
    >
      {children}
      <Loading show={loading} />
    </AuthContext.Provider>
  );
};

// Hook för att använda context
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
