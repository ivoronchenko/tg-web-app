import WebApp from "@twa-dev/sdk"

let tg = WebApp

export function useTelegram(){
    let onClose = () => {
        tg.close();
    }

    let onToggleButton = () => {
        if (tg.MainButton.isVisible){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}