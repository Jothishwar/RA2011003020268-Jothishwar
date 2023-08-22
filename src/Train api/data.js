
async function getauthToken() {
    const authData = await fetch("http://20.244.56.144/train/auth", {
        method: 'POST',
        body: JSON.stringify(
            {
                "companyName": "Trainvue",
                "clientID": "cc240783-477e-4160-8068-2f643f9649f8",
                "clientSecret": "mIjNCfaUwhaFJjcl",
                "ownerName": "Jothishwar",
                "ownerEmail": "js2207@srmist.edu.in",
                "rollNo": "RA2011003020268"
            })
    })
    const thisData = await authData.json()
    return thisData;
}

export async function getTrains(){
    const auth_data= await getauthToken();
    const res_data = await fetch("http://20.244.56.144/train/trains", {
            method: 'GET',
            headers: { Authorization: `Bearer ${auth_data.access_token}` }
    })
    const train_data = await res_data.json();
    return train_data;
}