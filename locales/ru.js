export default {
    navigation: {
        weProvide: 'Наше оборудование',
        ourServices: 'Наши услуги',
        ourProjects: 'Наши проекты',
        brands: 'Наши бренды',
        contactUs: 'Свяжитесь с нами',
    },
    hero: {
        title: 'ПОЛНАЯ ТЕХНИЧЕСКАЯ ПОДДЕРЖКА МЕРОПРИЯТИЙ В ДУБАЕ',
        callUsNow: 'СВЯЗАТЬСЯ'
    },
    weProvide: {
        header: 'Наше оборудование',
        lightingEquipment: 'Световое оборудование',
        soundEquipment: 'Звуковое оборудование',
        stageTrussing: 'Сцены и фермы',
        ledScreens: 'LED-экраны',
    },
    ourServices: {
        header: 'Наши услуги',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    ourProjects: {
        header: 'Наши проекты',
    },
    brands: {
        header: 'Наши бренды',
        others: 'И другие',
    },
    contactUs: {
        header: 'Свяжитесь с нами',
        description: {
            text1: 'Остались вопросы?',
            text2: 'Мы свяжемся с вами в ближайшее время',
            text3: 'Заполните короткую форму для оперативной обратной связи'
        },
        form: {
            whatsAppTemplate: {
                part: 'Здавствуйте!\nМеня зовут {first_name} {last_name} и я заинтересован в ваших услугах\n{message}\nПожалуйста, свяжитесь со мной через почту {email}.',
                full: 'Здавствуйте!\nМеня зовут {first_name} {last_name} и я заинтересован в ваших услугах\n{message}\nПожалуйста, свяжитесь со мной через почту {email} или по телефону {phone}',
            },
            submit: 'Отправить',
            labels: {
                first_name: 'Имя',
                last_name: 'Фамилия',
                email: 'Email',
                phone: 'Телефон',
                message: 'Сообщение',
            },
            validationErrors: {
                first_name: {
                    required: 'Укажите имя',
                    min: 'Имя должно содержать не менее 2 символов',
                    max: 'Имя должно содержать до 100 символов',
                },
                last_name: {
                    required: 'Обязательно указать фамилию',
                    min: 'Фамилия должна содержать не менее 2 символов',
                    max: 'Фамилия должна содержать до 100 символов',
                },
                email: {
                    required: 'Требуется адрес электронной почты',
                    email: 'Некорретный e-mail',
                },
                phone: {
                    matches: 'Некорректный телефон',
                },
                message: {
                    min: 'Сообщение должно содержать не менее 10 символов',
                    max: 'Сообщение должно содержать до 400 символов',
                },
            }
        },
    },
    footer: {
        ourMail: 'Наша почта',
        callUs: 'Позвонить нам',
        allRightsReserved: 'Все права защищены.'
    }
}
