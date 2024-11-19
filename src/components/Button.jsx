import Link from 'next/link';

const themeClassMap = {
  default: 'border-purple-700 bg-purple-700 text-white hover:bg-purple-500 hover:border-purple-500',
  outline: 'border-purple-700 bg-transparent text-purple-700 hover:text-purple-500 hover:border-purple-500',
};

export const Button = (props) => {
  console.log(props)
  return (
    <Link
      href={props.url}
      data-sb-object-id={props.id}
    >
      <wink-button
        theme="telenet-light"
        text={props.label}
        appearance={props.theme}
        size="md"
        width="none"
        icon="chevron-right"
        icon-position="right"
        status="none"
        element="button"
        type="button"
      >
      </wink-button>
    </Link>
  );
};
