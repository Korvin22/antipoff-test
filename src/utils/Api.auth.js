export class ApiAuth {
  constructor(settings) {
    this._address = settings.baseUrl;
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(name, email, password) {
    return fetch(`${this._address}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // отправляем запрос на роут аутентификации
  authorize(email, password) {
    return fetch(`${this._address}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => this._getResponseData(res))
      .then((data) => {
        // сохраняем токен
          localStorage.setItem("token", data.token);
          return {token: data.token,
        password: password,
    email:email};
      });
  }
  checkToken = async (token) => {
    const res = await fetch(`${this._address}/users/me`, {
        method: "GET",
        headers: {
            "Accept": 'application/json',
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      });
      return this._getResponseData(res);
  }
 
}

const apiAuth = new ApiAuth({
  baseUrl: "https://reqres.in/api",
});

export { apiAuth };
