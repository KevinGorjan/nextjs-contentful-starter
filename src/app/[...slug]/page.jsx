import { notFound } from 'next/navigation';
import { getPageFromSlug } from '../../utils/content.js';
import { Wrapper as TelenetWrapper } from '../../components/Telenet/Wrapper';
import { Wrapper as ShadcnWrapper } from '@/src/components/Shadcn/Wrapper';

const themes = {
  'telenet': TelenetWrapper,
  'shadcn': ShadcnWrapper,
}

const getTheme = (theme) => themes[theme]

export default async function ComposablePage({ params }) {
  const { slug } = params;

  const pageSlug = slug.join('/');

  try {
    const page = await getPageFromSlug(`/${pageSlug}`);

    if (!page) {
      return notFound();
    }

    const ThemeComponent = getTheme('shadcn')

    const HorizontalClasses = (length) => {
      const classes = {
        1: 'grid-cols-1',
          2: 'md:grid-cols-2 grid-cols-1',
          3: 'md:grid-cols-3 grid-cols-1',
      }
      return classes[length] || classes[1];
    }

    return (
      <div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          if(section.type === 'grid') {
            return (
              <div
                data-sb-object-id={section.id}
                key={idx}
                className={`max-w-6xl mx-auto grid gap-4 items-center mt-4 ${
                  section.verticalOrHorizontal
                    ? 'grid-rows-1'
                    : HorizontalClasses(section.sections.length)
                }`}
              >
                {
                  section.sections.map((item, gridIdx) => {
                    return (
                      <div key={gridIdx} className='text-center'>
                        <ThemeComponent {...item} />
                      </div>
                    )
                  }
                )}
              </div>
            )
          } else {
            return <ThemeComponent {...section} key={idx} />;
          }
        })}
      </div>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}
