export default {
    navigation: {
        weProvide: 'We provide',
        ourServices: 'Our services',
        ourProjects: 'Our projects',
        brands: 'Our brands',
        contactUs: 'Contact Us',
    },
    hero: {
        title: 'EVENT PRODUCTION & FULL TECHNICAL SUPPORT IN DUBAI',
        callUsNow: 'CONTACT US'
    },
    weProvide: {
        header: 'We provide',
        lightingEquipment: 'Lighting Equipment',
        soundEquipment: 'Sound Equipment',
        stageTrussing: 'Stage & Trussing',
        ledScreens: 'LED Screens',
    },
    ourServices: {
        header: 'Our services',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    ourProjects: {
        header: 'Our projects',
    },
    brands: {
        header: 'Our brands',
        others: 'And others',
    },
    contactUs: {
        header: 'Contact Us',
        description: {
            text1: 'Still have questions?',
            text2: 'We will contact you shortly',
            text3: 'Fill out the short form for quick feedback'
        },
        form: {
            whatsAppTemplate: {
                part: 'Hello!\nI am {first_name} {last_name} and i\'m interested in your services\n{message}\nPlease contact me via {email}.',
                full: 'Hello!\nI am {first_name} {last_name} and i\'m interested in your services\n{message}\nPlease contact me via {email} or {phone}',
            },
            submit: 'Submit',
            labels: {
                first_name: 'First Name',
                last_name: 'Last Name',
                email: 'Email',
                phone: 'Phone',
                message: 'Message',
            },
            validationErrors: {
                first_name: {
                    required: 'First name is required',
                    min: 'First name should be at least 2 characters',
                    max: 'First name should be up to 100 characters',
                },
                last_name: {
                    required: 'Last name is required',
                    min: 'Last name should be at least 2 characters',
                    max: 'Last name should be up to 100 characters',
                },
                email: {
                    required: 'Email is required',
                    email: 'Email is invalid',
                },
                phone: {
                    matches: 'Phone number is not valid',
                },
                message: {
                    min: 'Message should be at least 10 characters',
                    max: 'Message should be up to 400 characters',
                },
            }
        },
    },
    footer: {
        ourMail: 'Our mail',
        callUs: 'Call us',
        allRightsReserved: 'All rights reserved.'
    }
}
