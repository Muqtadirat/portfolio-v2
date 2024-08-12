'use client';

import React, { useState } from 'react';

import InputField from './InputField';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [note, setNote] = useState<string>('');

  return (
    <div className="max-w-[1000px] mx-auto">
      <p className="mx-auto text-center text-3xl lg:text-[5.5rem] max-w-xs lg:max-w-full lg:leading-[100px] font-bricolage mb-9 lg:mb-14">
        Talk to me about a project and let’s do great work
      </p>
      <form action="" className="space-y-6 lg:space-y-8">
        <div>
          <InputField
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g Takezi Kensei Akinola"
          />
        </div>
        <div>
          <InputField
            type="text"
            name="note"
            label="Additional note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
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
