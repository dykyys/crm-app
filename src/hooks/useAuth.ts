'use client';

import { checkSession, logout } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AUTH_CHANGE_EVENT = 'auth-change';

export const triggerAuthChange = () => {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
};

export const useAuth = () => {
  const router = useRouter();
  // Булевий стан авторизації
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Функціяя для виходу з акаунту
  const signOut = async () => {
    await logout();
    router.replace('/sign-in');
  };

  // Функціяя перевірки сесії
  const checkAuth = async () => {
    try {
      const authStatus = await checkSession();
      setIsAuthenticated(authStatus);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Ефект для автоперевірки
  useEffect(() => {
    checkAuth();

    const handleAuthChange = () => checkAuth();

    // Підписуємось на нашу кастомну подію
    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);

    return () => {
      // Відписуємось при розмонтуванні
      window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    };
  }, []);

  return {
    isAuthenticated,
    isLoading,
    signOut,
    reCheckAuth: checkAuth,
  };
};
