"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  ```
  /**
   * Creates a separator component with customizable orientation and styling
   * @param {Object} props - The component props
   * @param {string} props.className - Additional CSS class names
   * @param {string} [props.orientation="horizontal"] - The orientation of the separator ("horizontal" or "vertical")
   * @param {boolean} [props.decorative=true] - Whether the separator is decorative or semantic
   * @param {React.Ref} ref - The ref to be forwarded to the root element
   * @returns {React.ReactElement} A separator component
   */
  ```
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
