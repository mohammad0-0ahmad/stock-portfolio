export const fetchJSON = (url, body, action, method) => {
    fetch(url,{
        method: method ? method : 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then((data) => action(data));
}

export default { fetchJSON }