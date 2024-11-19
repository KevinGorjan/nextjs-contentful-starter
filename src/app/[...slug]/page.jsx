import { notFound } from 'next/navigation';
import { Hero } from '../../components/Hero.jsx';
import { Stats } from '../../components/Stats.jsx';
import { getPageFromSlug } from '../../utils/content.js';
import { Button } from '../../components/Button';

const componentMap = {
  button: Button,
  hero: Hero,
  stats: Stats,
};

export default async function ComposablePage({ params }) {
  const { slug } = params;

  const pageSlug = slug.join('/');

  try {
    const page = await getPageFromSlug(`/${pageSlug}`);

    if (!page) {
      return notFound();
    }


    return (
      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          if(section.type === 'grid') {
            return (
              <div className={`${section.verticalOrHorizontal ? 'flex-row' : 'flex-col' } max-w-6xl mx-auto flex gap-12 md:items-center`} key={idx}>
                {
                  section.sections.map((gridSection, gridIdx) => {
                    const Component = componentMap[gridSection.type];
                    return <div className='flex' key={gridIdx}>
                      <Component {...gridSection}  />
                    </div>;
                  })
                }
              </div>
            )
          } else {
            const Component = componentMap[section.type];
            return <Component key={idx} {...section} />;
          }
        })}
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}
