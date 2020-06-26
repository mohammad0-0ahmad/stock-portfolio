export const fetchJSON = (url, body, action, method) => {
    fetch(url, {
        method: method ? method : 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => action(data))
        .catch();
}

export const fetchImg = (url, action) => {
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ session: localStorage.sessionId })
    })
        .then((res) => res.blob())
        .then(blob => URL.createObjectURL(blob))
        .then((data) => action(data))
        .catch();
}

export const uploadImg = (url, imgFile, action) => {
    const data = new FormData();
    data.append('session', localStorage.sessionId)
    data.append('img', imgFile)
    fetch(url,
        {
            method: 'POST',
            body: data
        }
    )
        .then(response => response.json())
        .then(data => action(data))
        .catch();
}

export default { fetchJSON }