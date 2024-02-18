'use client';

import BrandButton from "@/components/BrandButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import {I18nProviderClient, useScopedI18n} from "@/locales/client";
import en from "@/locales/en";
import {NUMERIC_CONTACT_PHONE} from "@/constants/common";
import {makeWhatsAppMeUrl} from "@/components/utils";

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

function ContactForm() {
    const formScopedT = useScopedI18n('contactUs.form')
    const labelsScopedT = useScopedI18n('contactUs.form.labels')
    const validationErrorsScopedT = useScopedI18n('contactUs.form.validationErrors')

    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .required(validationErrorsScopedT('first_name.required'))
            .min(2, validationErrorsScopedT('first_name.min'))
            .max(100, validationErrorsScopedT('first_name.max')),
        last_name: Yup.string()
            .required(validationErrorsScopedT('last_name.required'))
            .min(2, validationErrorsScopedT('last_name.min'))
            .max(100, validationErrorsScopedT('last_name.max')),
        email: Yup.string()
            .required(validationErrorsScopedT('email.required'))
            .email(validationErrorsScopedT('email.email')),
        phone: Yup.string().matches(phoneRegExp, validationErrorsScopedT('phone.matches')),
        message: Yup.string()
            .min(10, validationErrorsScopedT('message.min'))
            .max(400, validationErrorsScopedT('message.max')),
    });

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
        reset
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: '',
        }
    });

    const onSubmit = data => {
        let message = formScopedT(`whatsAppTemplate.${data.phone ? 'full' : 'part'}`, data);

        window.open(makeWhatsAppMeUrl(NUMERIC_CONTACT_PHONE, message));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-wrap sm:gap-4'>
                <div className="flex flex-col w-full sm:w-1/2-gap-6">
                    <label className='text-base/[26px] mb-2' htmlFor="first_name">{labelsScopedT('first_name')}</label>
                    <input
                        className="border py-2 px-3 focus:outline-none focus:border-brand-blue bg-brand-grey"
                        type="text"
                        id="first_name"
                        {...register('first_name')}
                    />
                    <p className='text-sm min-h-[20px] text-brand-blue'>{errors.first_name ? errors.first_name.message: ''}</p>
                </div>
                <div className="flex flex-col w-full sm:w-1/2-gap-6">
                    <label className='text-base/[26px] mb-2' htmlFor="last_name">{labelsScopedT('last_name')}</label>
                    <input
                        className="border py-2 px-3 focus:outline-none focus:border-brand-blue bg-brand-grey"
                        type="text"
                        id="last_name"
                        {...register('last_name')}
                    />
                    <p className='text-sm min-h-[20px] text-brand-blue'>{errors.last_name ? errors.last_name.message: ''}</p>
                </div>
                <div className="flex flex-col w-full sm:w-1/2-gap-6">
                    <label className='text-base/[26px] mb-2' htmlFor="email">{labelsScopedT('email')}</label>
                    <input
                        className="border py-2 px-3 focus:outline-none focus:border-brand-blue bg-brand-grey"
                        type="email"
                        id="email"
                        {...register('email')}
                    />
                    <p className='text-sm min-h-[20px] text-brand-blue'>{errors.email ? errors.email.message: ''}</p>
                </div>
                <div className="flex flex-col w-full sm:w-1/2-gap-6">
                    <label className='text-base/[26px] mb-2' htmlFor="phone">{labelsScopedT('phone')}</label>
                    <input
                        className="border py-2 px-3 focus:outline-none focus:border-brand-blue bg-brand-grey"
                        type="text"
                        id="phone"
                        {...register('phone')}
                    />
                    <p className='text-sm min-h-[20px] text-brand-blue'>{errors.phone ? errors.phone.message: ''}</p>
                </div>
                <div className="flex flex-col w-full">
                    <label className='text-base/[26px] mb-2' htmlFor="message">{labelsScopedT('message')}</label>
                    <textarea
                        className="border py-2 px-3 focus:outline-none focus:border-brand-blue bg-brand-grey"
                        rows={4}
                        name="message"
                        id="message"
                        {...register('message')}
                    />
                    <p className='text-sm min-h-[20px] text-brand-blue'>{errors.message ? errors.message.message: ''}</p>
                </div>
            </div>
            <div className='text-center sm:text-right mt-6'>
                <BrandButton>
                    {formScopedT('submit')}
                </BrandButton>
            </div>
        </form>
    )
}

function I18nContactsForm() {
    return (
        <I18nProviderClient fallbackLocale={en}>
            <ContactForm />
        </I18nProviderClient>
    )
}

export default I18nContactsForm;
