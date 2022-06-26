import React from "react";
import styled from "@emotion/styled/macro";
import Modal from "../../Modal";

const TodoFormModal: React.FC = () => {
  return (
    <Modal>
      <ModalBody>
        <Card>
          <Date></Date>
        </Card>
      </ModalBody>
    </Modal>
  );
};

export default TodoFormModal;
