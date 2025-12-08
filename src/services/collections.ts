// src/services/collections.ts
import { supabase } from "../supabaseClient";

export type Collection = {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  created_at: string;
};

export async function fetchCollectionsForUser(userId: string) {
  const { data, error } = await supabase
    .from("user_collections")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .returns<Collection[]>();

  return { data, error };
}

export async function createCollection(
  userId: string,
  name: string,
  description?: string
) {
  const { data, error } = await supabase
    .from("collections")
    .insert([{ user_id: userId, name, description }])
    .select()
    .single()
    .returns<Collection>();

  return { data, error };
}

export async function addRecipeToCollection(
  collectionId: string,
  recipeId: string
) {
  const { data, error } = await supabase
    .from("collection_items")
    .insert([{ collection_id: collectionId, recipe_id: recipeId }])
    .select()
    .single();

  return { data, error };
}

export async function removeRecipeFromCollection(
  collectionId: string,
  recipeId: string
) {
  const { error } = await supabase
    .from("collection_items")
    .delete()
    .match({ collection_id: collectionId, recipe_id: recipeId });

  return { error };
}

export async function getCollectionsContainingRecipe(
  userId: string,
  recipeId: string
) {
  const { data, error } = await supabase.rpc(
    "get_user_collections_containing_recipe",
    {
      _user_id: userId,
      _recipe_id: recipeId,
    }
  );

  return { data, error };
}
