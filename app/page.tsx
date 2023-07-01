'use client';
import Introduction from '@/components/Introduction/index';
import Leads from '@/components/Leads';
import Footer from '@/components/Footer';
import Videos from '@/components/Videos';

export const metadata = {
  title: 'Leadster',
  description: 'Transformando visitantes em clientes',
};

export default function Home() {
  return (
    <main>
      <Introduction />
      <Videos />
      <Leads />
      <Footer />
    </main>
  );
}
