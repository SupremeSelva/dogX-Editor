import React from 'react'
import { cn } from '@/lib/tailwind/cn'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn('editor-select', className)}
        {...props}
      >
        {children}
      </select>
    )
  }
)

Select.displayName = 'Select'
