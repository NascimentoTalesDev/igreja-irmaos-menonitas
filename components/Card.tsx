interface CardProps{
    children: React.ReactNode
}

const Card:React.FC<CardProps> = ({ children }) => {
    return (
        <div className={`bg-secondary_less p-[20px] rounded`}>{children}</div>
    );
}
 
export default Card;