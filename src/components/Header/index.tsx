import Link from 'next/link';
import styles from './styles.module.scss'
import {SignInButton} from '../SignInButton';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/"><img src="/images/logo.svg" alt="logo Board" /></Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/board"> Meu board</Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}
