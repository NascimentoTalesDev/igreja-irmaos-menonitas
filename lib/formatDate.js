export default function formatDate(date) {
    if (!date) {
        return null
    }    
    let day = new Date(date).getDate()
    let month = new Date(date).getMonth()+1
    let year = new Date(date).getFullYear()

    return `${day}-${month}-${year}`
}