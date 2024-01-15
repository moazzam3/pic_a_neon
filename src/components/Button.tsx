import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

type ButtonProps = {
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  LinkComponent?: React.ComponentType<LinkProps>;
} & (
  | ({ Link?: false } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ Link: true } & AnchorHTMLAttributes<HTMLAnchorElement>)
);

const sizeClass = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-md',
  lg: 'px-5 py-3 text-lg',
};

const Button = (props: ButtonProps) => {
  const { Link, LinkComponent, children, variant = 'text', color = 'primary', size, fullWidth = false, className: buttonClasses, ...rest } = props;

  // purgecss ignore
  const commonClasses = [
    'inline-flex items-center justify-center rounded-full gap-x-1 uppercase leading-6',
    sizeClass[size ?? 'md'],
    fullWidth && 'w-full',
    buttonClasses,
  ].filter(Boolean).join(' ');

  const variantClasses = {
    outlined: `border-2 border-${color}-500 text-${color}-500 hover:bg-${color}-100/10`,
    contained: `bg-${color}-500 text-white hover:bg-${color}-600`,
    text: `text-${color}-500 hover:bg-transparent`,
  };

  const className = [commonClasses, variantClasses[variant]].filter(Boolean).join(' ');

  if (Link) {
    const CustomLink = LinkComponent || 'a';
    return (
      <CustomLink className={className} {...rest}>
        {children}
      </CustomLink>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
