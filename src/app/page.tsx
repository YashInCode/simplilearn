import Header from '@/components/header/content';
import EventAgenda from '@/components/sections/eventAgenda/content';
import FeatureSpeakers from '@/components/sections/featureSpeakers/content';
import ExploringSection from '@/components/sections/explorings/content';
import ExamplesSection from '@/components/sections/examples/content';
import EmailSection from '@/components/sections/emailSection/content';
import Footer from '@/components/footer/content';

export default function Home() {
  return (
    <div className=" bg-white">
      <Header />
      <EmailSection />
      <ExploringSection />
      <FeatureSpeakers />
      <ExamplesSection />
      <EventAgenda />
      <Footer />
    </div>
  );
}
