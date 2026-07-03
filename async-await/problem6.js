function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Shagun"
            });
        }, 2000);
        
    });
}

// resolve ➡️ A function reference.

// resolve() ➡️ Call the function now.

// () => resolve(...) ➡️ Create a new function that will call resolve(...) later.



async function showUser() {
    console.log("Fetching user...");
    let user = await fetchUser();
    console.log("User fetched!");
    console.log(user);
}
showUser();

