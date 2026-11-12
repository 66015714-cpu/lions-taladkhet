import { createClient } from '@supabase/supabase-js';

const getStoredConfig = () => {
  try {
    const raw = localStorage.getItem('lions_taladkhet_supabase_cfg');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const stored = getStoredConfig();
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || stored.url || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || stored.anonKey || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
