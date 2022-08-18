const FORM = document.getElementById('form-generator');
const QRCODE = document.getElementById('qrcode');

const GENERATE_QRCode = (code) => {
    code.preventDefault();

    CLEAR_QRCODE();

    const URL = document.getElementById('url').value;
    const SIZE = document.getElementById('size').value;

    if (URL === '') {
        alert('Please enter a URL or Message');
        return;
    } else {
        SPINNER();

        setTimeout(() => {
            STOP_SPINNER();

            CODE_GENERATOR(URL, SIZE);
            setTimeout(() => {
                const QRCODE_IMAGE = QRCODE.querySelector('img').src;
                SAVE_QRCODE(QRCODE_IMAGE);
            }, 50);
        }, 1000);
    }
}

const CODE_GENERATOR = (url, size) => {
    const QR_CODE = new QR_CODE(QRCODE, {
        text: url,
        width: size,
        height: size,
    });
}

const SPINNER = () => {
    document.getElementById('spinner').style.display = 'block';
}

const STOP_SPINNER = () => {
    document.getElementById('spinner').style.display = 'none';
}

const CLEAR_QRCODE = () => {
    QRCODE.innerHTML = '';

    const SAVE_URL = document.getElementById('save-url');
    if (SAVE_URL) {
        SAVE_URL.remove();
    }
}

const SAVE_QRCODE = (SAVE_URL) => {
    const DATA_URL = document.createElement('save');
    DATA_URL.id = 'save-url';
    DATA_URL.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    DATA_URL.href = SAVE_URL;
    DATA_URL.download = 'qrcode';
    DATA_URL.innerHTML = 'Save QRCode';
    document.getElementById('generated').appendChild(DATA_URL);
}

STOP_SPINNER();

FORM.addEventListener('submit', GENERATE_QRCode);
