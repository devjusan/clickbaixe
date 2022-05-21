import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface IActiveLink extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

const ActiveLink = ({ children, activeClassName, ...props }: IActiveLink) => {
  const { asPath } = useRouter();
  console.log(asPath);

  const className = asPath === props.href ? activeClassName : '';

  return <Link {...props}>{cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
