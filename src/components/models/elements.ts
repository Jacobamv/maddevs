import React from "react";

export interface CircleBtnProps {
  image: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ButtonProps extends React.ComponentProps<"button"> {
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

export interface HeaderProps extends React.ComponentProps<"h1"> {
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

export interface LinkProps {
  to: string;
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

export interface TextProps {
  handleClick: () => void;
  styles?: React.CSSProperties;
  children: React.ReactNode;
}
