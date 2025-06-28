import CloudflareImage from '@/components/CloudflareImage';
import style from './style.module.scss';
export default function Tim() {
    return <CloudflareImage src="/images/tim.jpeg" alt="Tim" className={style.Image} />;
}