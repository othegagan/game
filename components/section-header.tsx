import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: string;
    subTitle: string;
    className?: string;
}

export default function SectionHeader({ title, subTitle, className }: SectionHeaderProps) {
    return (
        <div className={cn('text-center', className)}>
            <p className='mb-6 font-medium text-lg text-secondary uppercase tracking-wider'>{title}</p>
            <h2 className='mb-2.5 font-semibold text-3xl '>{subTitle}</h2>
        </div>
    );
}
