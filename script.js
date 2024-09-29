function sendEmail(event) {
    event.preventDefault();

    let params = {
        from_name: document.getElementById("name_id").value,
        email: document.getElementById("email_id").value,
        message: document.getElementById("textarea_id").value
    };

    emailjs.send("service_4tuixig", "template_1n6tpsq", params)
        .then(function() {
            showModal(true);
        })
        .catch(function() {
            showModal(false);
        });
}

function showModal(isSuccess) {
    const modal = document.querySelector('.modal');
    const modalContentTrue = document.querySelector('.modal-content-true');
    const modalContentError = document.querySelector('.modal-content-error');

    modal.classList.add('open');
    if (isSuccess) {
        modalContentTrue.style.display = 'block';
        modalContentError.style.display = 'none';
    } else {
        modalContentTrue.style.display = 'none';
        modalContentError.style.display = 'block';
    }
}

document.querySelector('.button-close-true').addEventListener('click', closeModal);
document.querySelector('.button-close-error').addEventListener('click', closeModal);

function closeModal() {
    document.querySelector('.modal').classList.remove('open');
}

document.querySelector('.contact-main').addEventListener('submit', sendEmail);

const translations = {
    en: {
        h1_header: "Hi, I'm Bogdan!",
        h3_header: "Nice to meet you",
        h1_contact: "Contact",
        p_contact: `If you have any questions, please contact me using the form below or directly by email or telegram.`,
        h1_skills: "Frontend Development",
        contact_submit_button: "Send",
        h1_modal_true: "Your message has been sent ✅",
        h1_modal_error: "Your message was not sent ❌",
        p_modal_true: `Thank you for contacting me. You can also contact me directly via email or Telegram.`,
        p_modal_error: `You can also contact me using my Telegram <button class="button-tg"><a href="https://t.me/aaron_228"><img src="./img/Telegram_logo.svg" height="25px" width="25px" alt=""></a></button>`,
        button_modal_true: "Close",
        button_modal_error: "Close",
        placeholder_name: "Name",
        placeholder_email: "E-mail",
        placeholder_message: "Message",
        p_contact2: "will be happy to answer them!"
    },
    ru: {
        h1_header: "Привет, я Богдан!",
        h3_header: "Приятно познакомиться",
        h1_contact: "Контакты",
        p_contact: `Если у вас есть какие-либо вопросы, свяжитесь со мной, используя форму ниже или напрямую по электронной почте или telegram.`,
        h1_skills: "Фронтенд Разработка",
        contact_submit_button: "Отправить",
        h1_modal_true: "Ваше сообщение отправлено ✅",
        h1_modal_error: "Ваше сообщение не было отправлено ❌",
        p_modal_true: `Спасибо, что связались со мной. Вы также можете связаться со мной напрямую по электронной почте или через Telegram.`,
        p_modal_error: `Вы также можете связаться со мной через мой Telegram <button class="button-tg"><a href="https://t.me/aaron_228"><img src="./img/Telegram_logo.svg" height="25px" width="25px" alt=""></a></button>`,
        button_modal_true: "Закрыть",
        button_modal_error: "Закрыть",
        placeholder_name: "Имя",
        placeholder_email: "Электронная почта",
        placeholder_message: "Сообщение",
        p_contact2: "⠀"
    },
    ua: {
        h1_header: "Привіт, я Богдан!",
        h3_header: "Приємно познайомитись",
        h1_contact: "Контакти",
        p_contact: `Якщо у вас виникли запитання, будь ласка, зв’яжіться зі мною за допомогою форми нижче або безпосередньо електронною поштою чи telegram.`,
        h1_skills: "Фронтенд Розробка",
        contact_submit_button: "Надіслати",
        h1_modal_true: "Ваше повідомлення надіслано ✅",
        h1_modal_error: "Ваше повідомлення не надіслано ❌",
        p_modal_true: `Дякую, що зв'язалися зі мною. Ви також можете зв'язатися зі мною безпосередньо електронною поштою або через Telegram.`,
        p_modal_error: `Ви також можете зв’язатися зі мною за допомогою мого Telegram <button class="button-tg"><a href="https://t.me/aaron_228"><img src="./img/Telegram_logo.svg" height="25px" width="25px" alt=""></a></button>`,
        button_modal_true: "Закрити",
        button_modal_error: "Закрити",
        placeholder_name: "Ім'я",
        placeholder_email: "Електронна пошта",
        placeholder_message: "Повідомлення",
        p_contact2: "⠀"
    },
    de: {
        h1_header: "Hallo, ich bin Bohdan!",
        h3_header: "Freut mich, Sie kennenzulernen",
        h1_contact: "Kontakte",
        p_contact: `Bei Fragen kontaktiere mich gerne über das untenstehende Formular oder direkt per E-Mail oder telegram.`,
        h1_skills: "Frontend-Entwicklung",
        contact_submit_button: "Schicken",
        h1_modal_true: "Ihre Nachricht wurde gesendet ✅",
        h1_modal_error: "Ihre Nachricht wurde nicht gesendet ❌",
        p_modal_true: `Vielen Dank, dass Sie mich kontaktiert haben. Sie können mich auch direkt per E-Mail oder Telegram kontaktieren.`,
        p_modal_error: `Sie können mich auch über mein Telegram kontaktieren <button class="button-tg"><a href="https://t.me/aaron_228"><img src="./img/Telegram_logo.svg" height="25px" width="25px" alt=""></a></button>`,
        button_modal_true: "schließen",
        button_modal_error: "schließen",
        placeholder_name: "Name",
        placeholder_email: "E-Mail",
        placeholder_message: "Nachricht",
        p_contact2: "⠀"
    }
};

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    const buttonContainer = document.querySelector('.button-container');

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });

    document.querySelector('#name_id').placeholder = translations[language].placeholder_name || "Name";
    document.querySelector('#email_id').placeholder = translations[language].placeholder_email || "E-mail";
    document.querySelector('#textarea_id').placeholder = translations[language].placeholder_message || "Message";

    if (language === 'ru' || language === 'ua' || language === 'de') {
        buttonContainer.style.marginTop = '0px';
    } else {
        buttonContainer.style.marginTop = '15px';
    }
}

