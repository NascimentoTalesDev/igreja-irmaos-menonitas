interface ChevronUpCircleIconProps {
    className?: string;
}

const ChevronUpCircleIcon: React.FC<ChevronUpCircleIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-light ${className}`}>
            <g clip-path="url(#clip0_172_129)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65925 15.405L12 10.0575L17.3408 15.405C17.634 15.6975 18.1087 15.6975 18.402 15.405C18.6945 15.105 18.6945 14.6325 18.402 14.34L12.6585 8.59497C12.4793 8.41497 12.2332 8.36247 12 8.40747C11.7668 8.36247 11.5208 8.41497 11.3408 8.59497L5.598 14.34C5.3055 14.6325 5.3055 15.105 5.598 15.405C5.89125 15.6975 6.366 15.6975 6.65925 15.405ZM12 1.5C17.799 1.5 22.5 6.2025 22.5 12C22.5 17.7975 17.799 22.5 12 22.5C6.201 22.5 1.5 17.7975 1.5 12C1.5 6.2025 6.201 1.5 12 1.5ZM12 24C18.627 24 24 18.63 24 12C24 5.37 18.627 0 12 0C5.37225 0 0 5.37 0 12C0 18.63 5.37225 24 12 24Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_172_129">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default ChevronUpCircleIcon;
