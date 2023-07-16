import PropTypes from 'prop-types';
import { Item, ItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ preview, tags, large, onClickPicture }) => (
  <Item>
    <ItemImg
      src={preview}
      alt={tags}
      onClick={() => onClickPicture(large, tags)}
    />
  </Item>
); // повернення для рендеру розмітки галереї одного малюнку, теги Item (li) та ItemImg (img)

ImageGalleryItem.propTypes = {  
  preview: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  onClickPicture: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту класу ImageGalleryItem
