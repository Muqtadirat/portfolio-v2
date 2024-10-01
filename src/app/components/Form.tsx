'use client';

import React, { useRef, useState } from 'react';

import InputField from './InputField';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    note: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parameters = {
      name: formData.name,
      note: formData.note,
      to_name: 'Muqtadirat',
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        parameters,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        
      )
      .then(
        () => {
          toast.success('Thank you for reaching out!');

          setTimeout(() => {
            setFormData({
              name: '',
              note: '',
            });
            if (form.current) {
              form.current.submit();
            }
          }, 4000);
        },
        () => {
          toast.error('Email failed to send');
        },
      )
      .catch((error: string) => console.log(error));
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <p className="mx-auto text-center text-3xl lg:text-[5.5rem] max-w-xs lg:max-w-full lg:leading-[100px] font-bricolage mb-9 mt-10 lg:mb-14">
        Talk to me about a project and let’s do great work
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-6 lg:space-y-8">
        <div>
          <InputField
            type="text"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g Takezi Kensei Akinola"
          />
        </div>
        <div>
          <InputField
            type="text"
            name="note"
            label="Additional note"
            value={formData.note}
            onChange={handleInputChange}
            placeholder="I'd like to speak to you about..."
          />
        </div>

        <button
          type="submit"
          className="mt-6 lg:mt-10 py-3 px-4 rounded-lg bg-[#0A0A0A] text-white hover:bg-white hover:text-text-default hover:outline outline-2 outline-black font-semibold transition-all duration-500 ease-in-out"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;
