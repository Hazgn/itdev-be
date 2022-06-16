const success = (res, status, data) => {
    res.status(status).json({ result: data })
}

const error = (res, status, err) => {
    const errData = new Error(err)
    res.status(status).json({ err: errData.message })
}

const send = (res, status, send) => {
    res.status(status).send(send)
}

module.exports = {
    success,
    error,
    send
}