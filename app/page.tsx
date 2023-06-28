import Introduction from '@/components/Introduction/index';
import Leads from '@/components/Leads';

export const metadata = {
  title: 'Leadster',
  description: 'Transformando visitantes em clientes',
};

export default function Home() {
  return (
    <main id='#'>
      <Introduction />
      <Leads />
    </main>
  );
}
