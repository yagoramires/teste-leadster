import Introduction from '@/components/Introduction/index';
import Leads from '@/components/Leads';
import Footer from '@/components/Footer';
import Videos from '@/components/Videos';

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
