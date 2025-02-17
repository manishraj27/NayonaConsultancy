import React from 'react';

const ContactBox = () => {
  return (
    <div className="mt-16 relative w-full min-h-[85vh] lg:min-h-[75vh] rounded-3xl bg-light-200 flex items-center justify-center">
      <div className="flex w-full flex-col items-center gap-16 px-4 lg:px-0">
        <p className="text-gray-900 text-xl lg:text-5xl font-semibold tracking-wide text-center">
          Hey there! How can we assist you<br />
          on this afternoon in <span className="h-word">Markapur, India?</span>
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          <ActionButton>Start a project</ActionButton>
          <ActionButton>Join SOHub</ActionButton>
          <ActionButton>Say hi</ActionButton>
        </div>
      </div>
    </div>
  );
};

// Separate button component for reusability
const ActionButton = ({ children }) => {
  return (
    <button className="px-8 lg:px-12 select-none py-3 lg:py-5 rounded-full text-white bg-gray-800 hover:scale-110 transition-transform duration-300 ease-in-out text-lg lg:text-xl font-medium tracking-wide">
      {children}
    </button>
  );
};

export default ContactBox;