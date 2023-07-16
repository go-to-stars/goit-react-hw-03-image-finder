import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox, LargeImg } from './Modal.styled';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  } // метод componentDidMount викликається відразу після монтування (тобто вставки компонента в DOM), та додає слухач натискання кнопок на клавіатурі

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  } // метод componentWillUnmount викликається безпосередньо перед розмонтуванням та видаленням компонента, та прибирає слухач натискання кнопок на клавіатурі

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }; // метод keyDown, при настанні події - натискання клавіші 'Escape' викликає метод onClose() батьківського компоненнта

  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }; // метод overlayClick, при настанні події - натискання на підкладку модального вікна overlay викликає метод onClose() батьківського компоненнта

  render() {
    return (
      <Overlay onClick={this.overlayClick}>
        <ModalBox>
          <LargeImg src={this.props.largeImg} alt={this.props.altImg} />
        </ModalBox>
      </Overlay>
    );
  } // повернення для рендеру розмітки модального вікна, теги Overlay (div), ModalBox (div) та LargeImg (img)
} // клас Modal, повертає компоненти з даними для рендеру модального вікна 

Modal.propTypes = {
  altImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту класу Modal

