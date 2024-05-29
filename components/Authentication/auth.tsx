'use client';

import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { createClient } from '@/utils/supabase/client';

export default function Authentication() {
  const supabase = createClient();
  return (
    <Auth
      appearance={{ theme: ThemeSupa }}
      supabaseClient={supabase}
      providers={['github', 'google']}
    />
  );
}
