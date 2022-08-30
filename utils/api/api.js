const BASE_URL = "https://api.github.com/search/repositories?q=";

function __getResponseData(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const searchReps = (searchWord) => {
  return fetch(`${BASE_URL}${searchWord}`, {
    method: "GET",
  }).then((res) => {
    return __getResponseData(res);
  });
};
