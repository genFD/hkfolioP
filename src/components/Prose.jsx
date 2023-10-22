import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(className, 'prose text-lg font-medium dark:prose-invert')}
    >
      {children}
    </div>
  )
}
