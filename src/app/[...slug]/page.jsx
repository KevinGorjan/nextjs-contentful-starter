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
            console.log(section)
            return (
              <div
                key={idx}
                className={`max-w-6xl mx-auto grid gap-4 items-center ${
                  section.verticalOrHorizontal
                    ? `grid-rows-1`
                    : `grid-cols-${section.sections.length}`
                }`}
              >
                {
                  section.sections.map((item, gridIdx) => {
                    const Component = componentMap[item.type];
                    return (
                      <div key={gridIdx} className='text-center'>
                        <Component  {...item} />
                      </div>
                    )
                  }
                )}
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
