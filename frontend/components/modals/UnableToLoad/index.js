import {Button, Modal, Text} from "@nextui-org/react";
import {t} from "i18next";

const UnableToLoad = () => {
    const reloadHandler = () => {
        location.reload(true);
    };

    return (
        <div>
            <Modal
                blur
                aria-labelledby="modal-title"
                open={true}>
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        <Text b size={18}>
                            {t('common.welcome-to-alexisdetrie-dev')}
                        </Text>

                    </Text>
                </Modal.Header>
                <Modal.Body>
                    {t('error.unable-to-fetch-default-data')}
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onClick={reloadHandler}>
                        {t('common.reload-page')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UnableToLoad;
