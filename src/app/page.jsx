import { notFound } from 'next/navigation';
import { Hero } from '../components/Telenet/Hero.jsx';
import { Stats } from '../components/Telenet/Stats.jsx';
import { getPageFromSlug } from '../utils/content.js';

const componentMap = {
  hero: Hero,
  stats: Stats,
};

export default async function ComposablePage() {
  try {
    const page = await getPageFromSlug("/");

    if (!page) {
      return notFound();
    }

    return (
      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          const Component = componentMap[section.type];
          return <Component key={idx} {...section} />;
        })}
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}
