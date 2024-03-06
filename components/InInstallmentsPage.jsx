const InInstallmentsPage = ({ onChange }) => {
    let parcelas = 12

    return (
        <div className="bg-secondary_less">
            <select onChange={onChange} name="select" className="bg-secondary_less">
                {Array.from({ length: parcelas }).map((_, index) => (
                    <option value={index+1}>{index+1}</option>
                ))}
            </select>
        </div>

    );
}

export default InInstallmentsPage;