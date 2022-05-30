/* eslint-disable import/no-anonymous-default-export */
export const formatCurrency = (price) => {
    const number = null;
    switch(price.currency){
        case "ARS":
            number = <>$ {formatThousands(price.amount)}<sup>{price.decimals}</sup></>;
            break;
        default:
            number = <>$ {formatThousands(price.amount)}</>;
            break;
    }
    return number;
}

export const formatThousands = (number) => {
    try {
        const formatePuntos = number
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const formateThousandsSeparators = formatePuntos;
        return formateThousandsSeparators;
    } catch (error) {
        return '';
    }
}

export default { formatCurrency, formatThousands };