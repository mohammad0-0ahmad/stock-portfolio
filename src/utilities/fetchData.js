export const fetchJSON = (url, body, action) => {
    if (body === null || body === undefined) {
        body = {}
    }
    if (localStorage.sessionId) {
        body.session = localStorage.sessionId;
    }
    body = JSON.stringify(body);
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body
    })
        .then(res => res.json())
        .then(data => action(data))
        .catch(e => { });
}

export const fetchImg = (url, action) => {
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ session: localStorage.sessionId })
    })
        .then(res => res.blob())
        .then(blob => URL.createObjectURL(blob))
        .then(data => action(data))
        .catch(e => { });
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
        .catch(e => { });
}

export default { fetchJSON }