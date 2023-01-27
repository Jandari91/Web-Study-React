import { Modal as BootstrapModal } from "react-bootstrap";

export function Modal(props) {
  return (
    <BootstrapModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BootstrapModal.Body>
      {props.children}
      </BootstrapModal.Body>
      
    </BootstrapModal>
  );
}
