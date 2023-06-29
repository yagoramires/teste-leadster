import Introduction from '@/components/Introduction/index';
import Leads from '@/components/Leads';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Leadster',
  description: 'Transformando visitantes em clientes',
};

export default function Home() {
  return (
    <main>
      <Introduction />
      <Leads />
      <Footer />
    </main>
  );
}
