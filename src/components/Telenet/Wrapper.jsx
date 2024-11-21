import { Button } from './Button';
import { Hero } from './Hero';
import { Stats } from './Stats';

const componentMap = {
  button: Button,
  hero: Hero,
  stats: Stats,
};

export const Wrapper = (props) => {
  const Component = componentMap[props.type];
  return Component ? <Component {...props} /> : null;
}