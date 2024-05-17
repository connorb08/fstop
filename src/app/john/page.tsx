import CloudflareImage from '@/components/CloudflareImage';
import style from './style.module.scss';
export default function John() {
    return <CloudflareImage src="/images/john.jpg" alt="John" className={style.Image} />;
}