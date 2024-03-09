interface ChevronDownCircleIconProps {
    className?: string;
}

const ChevronDownCircleIcon: React.FC<ChevronDownCircleIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-light ${className}`}>
            <g clip-path="url(#clip0_172_137)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3408 8.59497L12 13.9425L6.65925 8.59497C6.366 8.30247 5.89125 8.30247 5.598 8.59497C5.3055 8.89497 5.3055 9.3675 5.598 9.66L11.3415 15.405C11.5207 15.585 11.7668 15.6375 12 15.5925C12.2332 15.6375 12.4792 15.585 12.6592 15.405L18.402 9.66C18.6945 9.3675 18.6945 8.89497 18.402 8.59497C18.1087 8.30247 17.634 8.30247 17.3408 8.59497ZM12 22.5C6.201 22.5 1.5 17.7975 1.5 12C1.5 6.2025 6.201 1.5 12 1.5C17.799 1.5 22.5 6.2025 22.5 12C22.5 17.7975 17.799 22.5 12 22.5ZM12 0C5.373 0 0 5.37 0 12C0 18.63 5.373 24 12 24C18.6278 24 24 18.63 24 12C24 5.37 18.6278 0 12 0Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_172_137">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default ChevronDownCircleIcon;
