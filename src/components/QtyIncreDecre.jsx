export const handleUpdateQty = (id, change, setQuantities) => {
    setQuantities(prev => {
        const currentQty = prev[id] || 0;
        const newQty = currentQty + change;
        if (newQty >= 0 && newQty <= 50) {
            return {
                ...prev,
                [id]: newQty
            }
        }
        return prev
    })
}