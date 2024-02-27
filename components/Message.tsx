import bus from '@/lib/bus'
import { useEffect, useState } from 'react'
import CloseCircleIcon from '@/components//icons/CloseCircleIcon'
import CheckCircleIcon from '@/components/icons/CheckCircleIcon'

function Message() {
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        bus.addListener('flash', ({ message, type }) => {

            setVisibility(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisibility(false)
            }, 2000);
        })
    }, [])

    if (type === "error") {
        return (
            visibility && (
                <div className={`fixed z-[9999999999] top-0 left-0 w-full flex justify-center`}>
                    <div className='bg-danger flex gap-2 text-gray-50 p-2 rounded-md mt-1'>
                        {message}
                        <CloseCircleIcon />
                    </div>
                </div>
            )
        )
    }

    if (type === "success") {
        return (
            visibility && (
                <div className={`fixed z-[9999999999] top-0 left-0 w-full flex justify-center`}>
                    <div className='bg-success flex gap-2 text-gray-50 p-2 rounded-md mt-1'>
                        {message}
                        <CheckCircleIcon />
                    </div>
                </div>
            )
        )
    }
    
}

export default Message

