import { useEffect, useState } from "react"
import ArrowUpCircle from "./icons/ArrowUpCircle"
import ArrowDownCircle from "./icons/ArrowDownCircle"

const InInstallmentsPage = ({ onChange }) => {
    let parcelas = 12
    const [parcela, setParcela] = useState()

    return (
        <div className="bg-blue-600">
            <select onChange={onChange} name="select" className="bg-blue-600">
                {Array.from({ length: parcelas }).map((_, index) => (
                    <option value={index+1}>{index+1}</option>
                ))}
            </select>
        </div>

    );
}

export default InInstallmentsPage;