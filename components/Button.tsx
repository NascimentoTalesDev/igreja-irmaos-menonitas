interface TitleH1Props{
    text: string;
    className?: string;
}

const Button:React.FC<TitleH1Props> = ({ text, className }) => {
    return (
        <button className={`text-sm md:text-base h-[44px] rounded text-light ${className}`}>{text}</button>
    );
}
 
export default Button;