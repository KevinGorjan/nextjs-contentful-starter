import { Button } from './Button';
import { Hero } from './Hero';
import { Stats } from './Stats';
import { FAQ } from './FAQ';
import { ProfileCard } from './ProfileCard';
import { Wysiwyg } from './Wysiwyg';

const componentMap = {
  button: Button,
  hero: Hero,
  stats: Stats,
  faq: FAQ,
  profileCard: ProfileCard,
  editorComponent: Wysiwyg
};

export const Wrapper = (props) => {
  const Component = componentMap[props.type];
  return Component ? <Component {...props} /> : null;
}