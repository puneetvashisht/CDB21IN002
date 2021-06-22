const authHeader = () => {
    let header = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json'
    }
    console.log(header)
    return header;
}

export default authHeader;
