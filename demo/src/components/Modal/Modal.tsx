import { FC, Fragment, PropsWithChildren } from 'react';
import classes from './Modal.module.css';

interface BackdropProps {
  onBackDropClick: (event: any) => any;
}

const Backdrop: FC<BackdropProps> = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onBackDropClick}
    ></div>
  );
};

const ModalOverlay: FC<PropsWithChildren<any>> = (props) => {
  return (
    <div className={classes.modal}>
      <div className='content'>{props.children}</div>
    </div>
  );
};

interface ModalProps extends PropsWithChildren<BackdropProps> {}

const Modal: FC<ModalProps> = (props) => {
  return (
    <Fragment>
      <Backdrop onBackDropClick={props.onBackDropClick} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
