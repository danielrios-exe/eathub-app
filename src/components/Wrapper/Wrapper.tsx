import React from 'react';

const Wrapper = ({ children }: any) => {
  return (
    <div className=" flex flex-col items-center w-full mt-8">
      <div className="flex flex-col items-center justify-center mt-10 w-4/6">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
