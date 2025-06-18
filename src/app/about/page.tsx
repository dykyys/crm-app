import { redirect } from 'next/navigation';

export const metadata = {
  title: 'About page',
  description: 'Createt by GoIT',
};

export default function About() {
  redirect('/');
  return <div>About</div>;
}
