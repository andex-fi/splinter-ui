import React, { FC, useRef } from 'react';

export interface AnchorButtonProps extends Omit<React.AnchorHTMLAttributes<any>, 'onClick'> {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface NativeButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'> {
  htmlType?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface Props extends Partial<NativeButtonProps> {
  block?: boolean;
  btnStyles?: string;
  ref?: any;
  href?: string;
  children: React.ReactNode;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon' | 'accept' | 'danger' | 'empty';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  submit?: boolean;
}

export const Button: FC<Props> = ({ btnStyles, onClick, link, href, ref, children, submit }) => {
  const buttonRef = (ref as any) || useRef<HTMLElement | null>(null);

  return link ? (
    <a className={btnStyles} href={link}>
      {children}
    </a>
  ) : href ? (
    <a className={btnStyles} href={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  ) : (
    <button className={btnStyles} onClick={onClick} type={submit ? 'submit' : 'button'}>
      {children}
    </button>
  );
};
