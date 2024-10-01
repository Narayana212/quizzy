import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
/**
 * A React component that renders a table wrapped in a div with overflow handling.
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS class names for the table.
 * @param {React.Ref} ref - A ref to be forwarded to the table element.
 * @returns {JSX.Element} A div containing a table with applied styles and props.
 */
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  /**
   * Creates a table header component with customizable className and additional props
   * @param {Object} props - The props object
   * @param {string} props.className - Additional CSS class names to apply to the thead element
   * @param {React.Ref} ref - React ref object to be forwarded to the thead element
   * @returns {JSX.Element} A thead element with applied className and forwarded ref
   */
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
/**
 * Creates a table body component with a reference and optional className
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref} ref - The ref to be forwarded to the tbody element
 * @returns {JSX.Element} A tbody element with applied className and forwarded ref
 */
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
/**
 * Renders a table footer component with customizable styling
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the footer
 * @param {React.Ref} ref - Ref object for the footer element
 * @returns {JSX.Element} A styled table footer element
 */
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  /**
   * A React component that renders a table row with customizable styling and behavior.
   * @param {Object} props - The component props.
   * @param {string} [props.className] - Additional CSS class names to apply to the table row.
   * @param {React.Ref} ref - A ref object to attach to the rendered table row element.
   * @returns {JSX.Element} A styled table row element with forwarded ref and props.
   */
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  /**
   * Renders a table header cell with customizable styling and props
   * @param {Object} props - The component props
   * @param {string} [props.className] - Additional CSS classes to apply to the th element
   * @param {React.Ref} ref - The ref to be forwarded to the th element
   * @returns {JSX.Element} A styled table header cell
   */
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
```
/**
 * A React component that renders a table cell (td) with customizable className and additional props.
 * @param {Object} props - The props object containing className and other properties.
 * @param {string} [props.className] - Additional CSS classes to apply to the td element.
 * @param {React.Ref} ref - A ref object to be attached to the td element.
 * @returns {JSX.Element} A rendered td element with the specified properties and ref.
 */
```
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ```
    /**
     * A functional component that renders a caption element with customizable className and additional props.
     * @param {Object} props - The props object containing className and other properties.
     * @param {string} [props.className] - Additional CSS class names to apply to the caption element.
     * @param {React.Ref} ref - A ref object to be forwarded to the caption element.
     * @returns {JSX.Element} A caption element with the specified className and props.
     */
    ```
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
