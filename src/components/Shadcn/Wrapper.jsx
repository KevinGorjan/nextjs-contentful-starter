import { Button } from './Button';
import { Hero } from './Hero';
import { Stats } from './Stats';
import { FAQ } from './FAQ';

const componentMap = {
  button: Button,
  hero: Hero,
  stats: Stats,
  faq: FAQ,
};

export const Wrapper = (props) => {
  const Component = componentMap[props.type];
  return Component ? <Component {...props} /> : null;
}