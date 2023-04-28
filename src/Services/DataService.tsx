let userData = {};

export async function createAcc(createdUser: { Id: number; Username: string; Password: string; }) {
    const res = await fetch('https://tasktrackersprintapi.azurewebsites.net/User/Adduser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    return data;
}

export async function login(loginUser: { Username: string; Password: string; }) {
    const res = await fetch('https://tasktrackersprintapi.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }

    let data = await res.json();
    return data;
}


