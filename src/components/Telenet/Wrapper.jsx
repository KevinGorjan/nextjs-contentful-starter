import { Button } from './Button';
import { Hero } from './Hero';
import { Stats } from './Stats';

const componentMap = {
  button: Button,
  hero: Hero,
  stats: Stats,
};

export const Wrapper = (props) => {
  console.log(componentMap[props.type])
  const Component = componentMap[props.type];
  return <Component {...props} />;
}