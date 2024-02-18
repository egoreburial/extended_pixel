export const makeWhatsAppMeUrl = (number, message = undefined) => {
    let url = `https://wa.me/${number}`;

    if (message) {
        url += `?text=${encodeURI(message)}`;
    }

    return url;
};
