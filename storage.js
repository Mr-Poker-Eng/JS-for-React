//localstorage method
// 1. setItem
// 2. getItem
// 3. clear
// 4. removeItem
// 5. localstorage.length
// 6. localStorage.key

const handleAddToStorage = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // console.log(name)
    // localStorage.setItem(email, name);

    const data = {email, name}
    // console.log(data)
    localStorage.setItem(email, JSON.stringify(data))
}


const storedItem = localStorage.getItem("mmunim9.9.01@gmail.com");

console.log(JSON.parse(storedItem))


const handleClear = () => {
    localStorage.clear()
}