import styles from './Text.module.css'

interface Props {
  children: string
}
export default function Text({children}:Props) {
  return <p className={ styles.root }>{children}</p>
}