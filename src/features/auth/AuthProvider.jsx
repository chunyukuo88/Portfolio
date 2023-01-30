import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from './client.js';

const AuthProvider = (props) => (
  <SessionContextProvider supabaseClient={supabaseClient}>
    {props.children}
  </SessionContextProvider>
);

export default AuthProvider;
