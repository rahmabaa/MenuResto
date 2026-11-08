export const formatPrice = (n, currency = 'DT') => n.toFixed(3).replace('.', ',') + ' ' + currency
