import * as React from "react";

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

function mergeProps(
  slotProps: React.HTMLAttributes<HTMLElement>,
  childProps: React.HTMLAttributes<HTMLElement>
) {
  const { className: slotClassName, ...restSlotProps } = slotProps;
  const { className: childClassName, ...restChildProps } = childProps;

  return {
    ...restSlotProps,
    ...restChildProps,
    className: [slotClassName, childClassName].filter(Boolean).join(" "),
  };
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, forwardedRef) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const childProps = children.props as React.HTMLAttributes<HTMLElement>;
    const merged = mergeProps(props, childProps);

    const child = children as React.ReactElement;

    return (React.cloneElement as unknown as (
      element: React.ReactElement,
      props: Record<string, unknown>
    ) => React.ReactElement)(child, {
      ...merged,
      ref: forwardedRef,
    });
  }
);

Slot.displayName = "Slot";
