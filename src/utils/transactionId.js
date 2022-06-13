const isValue = localStorage.getItem('transaction_id') 

export const transaction_id = isValue ? isValue : ''
