import Link from 'next/link';
import { Button as ShadcnButton } from "@/components/ui/button"

export const Button = (props) => {
  return (
    <ShadcnButton>
      <Link
        href={props.url}
        data-sb-object-id={props.id}
      >
        {props.label}
      </Link>
    </ShadcnButton>
  );
};
