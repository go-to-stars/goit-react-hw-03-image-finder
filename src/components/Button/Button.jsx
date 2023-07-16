import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onNextPage }) => (
  <ButtonLoadMore type="button" onClick={onNextPage}>
    Load more
  </ButtonLoadMore>
); // повернення для рендеру розмітки кнопки "Load more" (тег Button)

Button.propTypes = {
  onNextPage: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту класу Button
