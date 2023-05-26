import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-containerSmall mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex otems-center tracking-wide">
        WHATS NEXT
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">GET IN TOUCH</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I&apos;m a talented and ambitious soon-to-be graduate, actively seeking
        thrilling opportunities to ignite my career and bring the spotlight to
        my passion.
      </p>
      <a href="mailto:ayushjaipuriyar21@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Click Here to email me
        </button>
      </a>
    </section>
  );
};

export default Contact;
