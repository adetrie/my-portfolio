import {t} from "i18next";

const UnableToLoad = () => {
    const reloadHandler = () => {
        location.reload(true);
    };

    return (
        <div>
            <div
                blur
                aria-labelledby="modal-title"
                open={true}>
                <header>
                    <span id="modal-title" size={18}>
                        <Text b size={18}>
                            {t('common.welcome-to-alexisdetrie-dev')}
                        </Text>

                    </span>
                </header>
                <div>
                    {t('error.unable-to-fetch-default-data')}
                </div>
                <div>
                    <button auto onClick={reloadHandler}>
                        {t('common.reload-page')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UnableToLoad;
