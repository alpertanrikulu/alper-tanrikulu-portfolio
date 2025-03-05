"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Modal({ open, tech, closeModal }) {
  if (!tech) return null; // Eğer tech boşsa, hata almamak için
  const { title, description, link, icon } = tech;

  return (
    <Dialog open={open} onClose={closeModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-midnight/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center sm:mx-0 sm:size-10">
                  <img src={icon} alt={`${title} icon`} />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 font-playfair font-black text-2xl"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-md text-gray-500 font-roboto">
                      {description}
                    </p>
                    <br />
                    {tech?.description2 && (
                      <p className="text-md text-gray-500 font-roboto">
                        {tech.description2}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => closeModal()}
                className="font-roboto inline-flex w-full justify-center rounded-lg bg-red-600 px-3 py-2 text-lg font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                data-autofocus
                href={link}
                className="myButton2 font-robot text-lg font-semibold flex text-center items-center"
              >
                Go to page
              </a>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
