'use client';

// Додаємо імпорти
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, LoginRequest } from '@/lib/api';

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    try {
      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as LoginRequest;
      // Виконуємо запит
      const res = await login(formValues);
      // Виконуємо редірект або відображаємо помилку
      if (res) {
        router.push('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.log('error', error);
      setError('Invalid email or password');
    }
  };

  return (
    <form action={handleSubmit}>
      <h1>Sign in</h1>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;
