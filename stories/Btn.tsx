import './btn.css';

interface BtnProps {
    // primary?: boolean;
    size: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Btn = ({
    // primary = false,
    size = 'large',
    label
}: BtnProps) => {
    // const mode = primary ? 'btn--primary' : 'btn--secondary';
    return (
        <button
            type="button"
            // className={['btn', `btn--${size}`, mode].join(' ')}
            className={['btn', `btn--${size}`].join(' ')}
        >
            {label}
        </button>
    )
}
