import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Button component variants using CVA
 * Provides consistent button styling across the application
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 focus:ring-gray-500 dark:border-gray-600 dark:hover:bg-gray-800',
        ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-500 dark:hover:bg-gray-800',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        toolbar: 'bg-transparent hover:bg-toolbar-hover-bg dark:hover:bg-toolbar-hover-bg-dark focus:ring-primary-500 aria-pressed:bg-toolbar-active-bg dark:aria-pressed:bg-toolbar-active-bg-dark',
      },
      size: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
        icon: 'h-9 w-9 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-lg': 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>;

/**
 * Input component variants
 */
export const inputVariants = cva(
  'w-full rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-editor-border dark:border-editor-border-dark bg-editor-bg dark:bg-editor-bg-dark',
        filled: 'border-transparent bg-gray-100 dark:bg-gray-800',
        flushed: 'rounded-none border-0 border-b-2 border-gray-300 dark:border-gray-600 px-0',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type InputVariants = VariantProps<typeof inputVariants>;

/**
 * Dialog component variants
 */
export const dialogVariants = cva(
  'relative bg-editor-bg dark:bg-editor-bg-dark rounded-lg shadow-dialog animate-scale-in',
  {
    variants: {
      size: {
        sm: 'max-w-sm w-full p-4',
        md: 'max-w-lg w-full p-6',
        lg: 'max-w-2xl w-full p-8',
        xl: 'max-w-4xl w-full p-10',
        full: 'max-w-full w-full h-full rounded-none p-0',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type DialogVariants = VariantProps<typeof dialogVariants>;

/**
 * Dropdown menu variants
 */
export const dropdownVariants = cva(
  'absolute z-dropdown min-w-[12rem] rounded-md bg-editor-bg dark:bg-editor-bg-dark border border-editor-border dark:border-editor-border-dark shadow-lg animate-slide-down',
  {
    variants: {
      align: {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
      },
      position: {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
      },
    },
    defaultVariants: {
      align: 'start',
      position: 'bottom',
    },
  }
)

export type DropdownVariants = VariantProps<typeof dropdownVariants>;

/**
 * Badge component variants
 */
export const badgeVariants = cva(
  'inline-flex items-center rounded-full font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
        secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
        success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        outline: 'border border-gray-300 bg-transparent dark:border-gray-600',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>;

/**
 * Card component variants
 */
export const cardVariants = cva(
  'rounded-lg border bg-editor-bg dark:bg-editor-bg-dark border-editor-border dark:border-editor-border-dark',
  {
    variants: {
      variant: {
        default: 'shadow-md',
        elevated: 'shadow-lg',
        outlined: 'shadow-none',
        flat: 'shadow-none border-0',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

export type CardVariants = VariantProps<typeof cardVariants>;
