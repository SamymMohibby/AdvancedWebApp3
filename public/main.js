const form = document.getElementById("userForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const user = { name, email };

    const res = await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
})

const userBtn = document.getElementById("getUsers")
const userList = document.getElementById("userList")
userBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("/users");
    const data = await response.json();
    console.log("GET /users response:", data);
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
        const node = document.createElement("li")
        const textNode = document.createTextNode(`${data[i].name} - ${data[i].email}`)
        node.appendChild(textNode)
        userList.appendChild(node)
    }
  } catch (err) {
    console.error("Error fetching users:", err);
  }
});