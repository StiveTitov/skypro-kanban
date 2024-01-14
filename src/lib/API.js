let URL_API = "https://wedev-api.sky.pro/api/";
export let token;
export let userName;

console.log(token);

export async function getCardsFromAPI() {
  const userData = JSON.parse(localStorage.getItem("user"));
  token = userData.token;
  userName = userData.name;
  console.log(userName);
  const response = await fetch(`${URL_API}kanban`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function login({ login, password }) {
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
