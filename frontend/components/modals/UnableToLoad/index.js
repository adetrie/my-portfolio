import {useEffect, useState} from 'react';
import {Button, Checkbox, Input, Modal, Row, Text} from "@nextui-org/react";

function Password(props) {
    return null;
}

const UnableToLoad = () => {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    useEffect(() => {
    }, []);

    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={true}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onClick={closeHandler}>
                        Recharger la page
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UnableToLoad;
