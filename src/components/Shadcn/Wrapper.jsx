import { Button } from './Button';
import { Hero } from './Hero';
import { Stats } from './Stats';
import { FAQ } from './FAQ';
import { ProfileCard } from './ProfileCard';

const componentMap = {
  button: Button,
  hero: Hero,
  stats: Stats,
  faq: FAQ,
  profileCard: ProfileCard
};

export const Wrapper = (props) => {
  const Component = componentMap[props.type];
  return Component ? <Component {...props} /> : null;
}