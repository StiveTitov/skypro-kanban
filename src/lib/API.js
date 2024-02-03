let URL_API = "https://wedev-api.sky.pro/api/";
export let token;
export let userName;

export async function getCardsFromAPI({ user }) {
  // const userData = JSON.parse(localStorage.getItem("user"));
  token = user.token;
  userName = user.name;
  try {
    const response = await fetch(`${URL_API}kanban`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    alert("Проверьте своё соединение");
  }
}

export async function loginAPI({ login, password }) {
  const response = await fetch(`${URL_API}user/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    alert("Неправильный логин или пароль");
    throw new Error("Неправильный логин или пароль");
  }
  const data = await response.json();
  return data;
}

export async function regisreation({ login, name, password }) {
  const response = await fetch(`${URL_API}user`, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if (response.status === 400) {
    alert("Пользователь с таким логином уже сущетсвует");
    throw new Error("Пользователь с таким логином уже сущетсвует");
  }
  const data = await response.json();
  return data;
}

export async function addNewCard({ title, topic, description, date }) {
  token = JSON.parse(localStorage.getItem("user")).token;

  console.log("TOKEN:", token);
  const response = await fetch(`${URL_API}kanban`, {
    method: "POST",

    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  
  const data = await response.json();
  return data;
}

export async function delCard(id) {
  token = JSON.parse(localStorage.getItem("user")).token;

  const response = await fetch(`${URL_API}kanban/${id}`, {
    method: "DELETE",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(`Del card: ${id}`);
  const data = await response.json();
  return data;
}
