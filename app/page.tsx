import HorizontalScrollLayout from '@/components/horizontal-scroll';
import SectionOne from '@/components/hero';
import SectionTwo from '@/components/section-two';

export default function Page() {
  return (
    <HorizontalScrollLayout>
      <SectionOne />
      <SectionTwo />
    </HorizontalScrollLayout>
  );
}
