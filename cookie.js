// this file about cookie, cookie puts more data on browser

// it doesn't work without connicting any html file
const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));

    if (findCookie) {
        'country=US'
        // equal sign breaks down cookie's (Name and Value) from its array and makes them two individual arraies and put them
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}