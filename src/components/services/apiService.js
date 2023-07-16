import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/'; // базовий URL
const API_KEY = '36631917-353b26ef8ccbf147215af965d'; // ключ користувача
const requestParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
}); // параметри запиту

export const fetchPictures = async (query, page) => {

  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&${requestParams}&page=${page}`;

  const responce = await axios(url);
  
  if (responce.status !== 200) {
    throw new Error(responce.status);
  } // якщо статус відповіді не дорівнює 200 (успішний запит), то прокидаємо помилку з цим статусом
  
  return responce.data.hits;
}; // асинхронна фукція fetchPictures() очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних
