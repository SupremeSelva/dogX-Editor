import React from 'react'
import { cn } from '@/lib/tailwind/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn('editor-input', className)}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
