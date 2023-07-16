import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ pictures, onClickSelectPicture }) => (
  <List>
    {pictures.map(picture => (
      <ImageGalleryItem
        key={picture.id}
        preview={picture.webformatURL}
        tags={picture.tags}
        large={picture.largeImageURL}
        onClickPicture={onClickSelectPicture}
      />
    ))}
  </List>
); // повернення для рендеру розмітки галереї малюнків

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onClickSelectPicture: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту класу ImageGallery
