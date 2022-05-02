const getCurrentISSLoction = async () => {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    console.log(response);
    const issResponse = await response.json();
    console.log(issResponse);
    return issResponse;
}

export default getCurrentISSLoction;