import React from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from '../Searchbar/Searchbar';
import { fetchPictures } from '../services/apiService'; // імпорт функції fetchPictures
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Container, ErrorContainer } from './App.styled'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)
export class App extends React.Component {
  state = {
    query: '',
    pictures: [],
    page: 1,
    error: null,
    showModalWindow: false,
    pictureModalWindow: '',
    altPicture: '',
    isLoading: false,
    responceLenght: 0,
  }; // об'єкт-стану state класу App з даними що відображаються в інтерфейсі

  searchPictures = value => {
    const { query } = this.state;
    if (value === '') {
      return Notiflix.Notify.failure(
        'Sorry, the search field cannot be empty. Please try again.'
      ); // якщо інпут пустий, то виводимо відповідне повідомлення
    } else if (value !== query) {
      this.setState({ query: value, pictures: [], page: 1 });
    } // інакше, якщо стан інпуту змінився, то в state записуємо текст запиту, обнуляємо вміст малюнків та скидаємо лічильник сторінок до 1
  }; // метод searchPictures класу App додає в state запит та обнуляє вміст малюнків і скидає лічильник сторінок до 1

  chosesPicture = (large, tags) => {
    this.setState({ pictureModalWindow: large, altPicture: tags });
    this.toggleModalWindow();
  }; // метод chosesPicture класу App додає в state адресу великої картинки largeImageURL (large) та підпис цієї картинки alt (tags)

  toggleModalWindow = () => {
    this.setState(({ showModalWindow }) => ({
      showModalWindow: !showModalWindow,
    }));
  }; // метод toggleModalWindow класу App змінює на протилежний стан мобільного вікна (показувати/не показувати)

  nextPage = () => {
    const page = this.state.page;
    this.setState({ page: page + 1 });
  }; // метод nextPage класу App додає в state поперереднє значення номеру сторінки (page) збільшене на 1

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true }); // змінюєм в state на true (показати) значення поля isLoading для рендеру Loader-у

        await fetchPictures(query, page)
          .then(respons => {
            const data = respons;
            this.setState(({ pictures }) => ({
              pictures: [...pictures, ...data],
              responceLenght: data.length,
            })); // додаємо в state до масиву поперередніх картинок масив нових та розмір отриманого масиву responceLenght (data.length)
            if (data.length < 12) {
              Notiflix.Notify.warning(
                'It was the last page. Please try another query.'
              );
            }
          })
          .catch(error => {
            this.setState({ error });
            Notiflix.Notify.failure(
              'Oops, sorry, there were problems with the download. Please try again.'
            );
            console.log('Error', error.message);
          }); //передача вмісту "input" і номера сторінки в фукцію "fetchPictures" та очікування на відповідь; при правильній відповіді додаємо її в state, при помилці виводимо відповідне повідомлення
      } catch (error) {
        this.setState({ error });
        Notiflix.Notify.failure(
          'Oops, sorry, there were problems with the download. Please try again.'
        );
        console.log('Error', error.message);
      } finally {
        this.setState({ isLoading: false }); // змінюєм в state на false (прибрати) значення поля isLoading для ререндеру Loader-у
      }
    } // якщо змінився запит (query) або номер сторінки (page) то виконуємо запит
  } // метод componentDidUpdate класу App викликається відразу після оновлення та виконує запит, при позитивній відповіді її запис в state та ререндер сторінки

  render() {
    const {
      pictures,
      isLoading,
      showModalWindow,
      pictureModalWindow,
      altPicture,
      responceLenght,
      error,
    } = this.state; // деструктуризуємо змінні з об'єкта-стану state класу App

    const { searchPictures, chosesPicture, nextPage, toggleModalWindow } = this; // деструктуризуємо методи класу App

    return (
      <Container>
        <Searchbar onSubmit={searchPictures} />

        {pictures && (
          <ImageGallery
            pictures={pictures}
            onClickSelectPicture={chosesPicture}
          />
        )}

        {error && <ErrorContainer>{error.message}</ErrorContainer>}

        {isLoading && <Loader />}

        {!(responceLenght < 12) && <Button onNextPage={nextPage} />}

        {showModalWindow && (
          <Modal
            largeImg={pictureModalWindow}
            altImg={altPicture}
            onClose={toggleModalWindow}
          />
        )}
      </Container>
    );
  } // повернення для рендеру розмітки застосунку "Пошук зображень"
} // клас App(), повертає компоненти з даними для рендеру сторінки
