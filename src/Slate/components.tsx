import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

interface BaseProps {
  className: string;
  icon: string;
  [key: string]: unknown;
}

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
      } & BaseProps
    >,
    ref: any
  ) => (
    <span {...props} className={`button ${active ? "active" : ""}`} ref={ref} />
  )
);

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
      {
        value: any;
      } & BaseProps
    >,
    ref: any
  ) => {
    const textLines = value.document.nodes
      .map((node: any) => node.text)
      .toArray()
      .join("\n");
    return (
      <div ref={ref} {...props}>
        <div>Slate's value as text</div>
        <div>{textLines}</div>
      </div>
    );
  }
);

export const Icon = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: any) => (
    <span {...props} className="icon" ref={ref} />
  )
);

export const Instruction = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: any) => (
    <div {...props} className="instruction" ref={ref} />
  )
);

export const Menu = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: any) => (
    <div {...props} className="menu" ref={ref} />
  )
);

export const Portal = ({ children }: { children: any }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

export const Toolbar = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: any) => (
    <Menu {...props} className="toolbar" ref={ref} />
  )
);
