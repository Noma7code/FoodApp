import styles from "./container.module.css";
export default function Component({ children }) {
  // passed the key => children as a prop to recieve the child component foodlist
  return <div className={styles.pageContainer}>{children}</div>;
}
