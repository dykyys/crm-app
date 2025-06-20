'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const AuthNavigation = () => {
  const { isAuthenticated, signOut } = useAuth();

  return isAuthenticated ? (
    <li>
      <button onClick={signOut}>Logout</button>
    </li>
  ) : (
    <>
      <li>
        <Link href="/sign-in">Login</Link>
      </li>
      <li>
        <Link href="/sign-up">Register</Link>
      </li>
    </>
  );
};

export default AuthNavigation;
