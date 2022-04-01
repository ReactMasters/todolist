import classNames from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'default' | 'weak' | 'primary' | 'outlined' | 'transparent'
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  size?: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonProps> = ({
  type,
  className,
  size = 'medium',
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[type],
        styles[size],
        className
      )}
      {...props}
    />
  )
}

export default Button
