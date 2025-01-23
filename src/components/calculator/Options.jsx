import React, { useState } from "react";

function Options({ pages, setPages, languages, setLanguages }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  const decreasesPage = () => setPages((prev) => (prev > 1 ? prev - 1 : 1));
  const increasesPage = () => setPages((prev) => prev + 1);
  const decreasesLanguage = () =>
    setLanguages((prev) => (prev > 1 ? prev - 1 : 1));
  const increasesLanguage = () => setLanguages((prev) => prev + 1);

  return (
    <div className="flex flex-col gap-2 items-end mt-4">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="pages"
          className="text-sm cursor-pointer text-cyan-600 hover:font-semibold font-medium transition"
          onClick={() => openModal("pages")}
        >
          Number of pages
        </label>
        <button className="px-2 rounded-full" onClick={decreasesPage}>
          -
        </button>
        <input
          type="number"
          id="pages"
          min="1"
          value={pages}
          className="border rounded-xl w-12 px-2 py-1 text-center text-sm"
          onChange={(page) => setPages(Number(page.target.value))}
        />
        <button className="px-2 rounded-full" onClick={increasesPage}>
          +
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="languages"
          className="text-sm cursor-pointer hover:font-semibold font-medium text-cyan-600 transition"
          onClick={() => openModal("languages")}
        >
          Number of languages
        </label>
        <button className="px-2 rounded-full" onClick={decreasesLanguage}>
          -
        </button>
        <input
          type="number"
          id="languages"
          min="1"
          value={languages}
          className="border rounded-xl w-12 px-2 py-1 text-center text-sm"
          onChange={(language) => setLanguages(Number(language.target.value))}
        />
        <button className="px-2 rounded-full" onClick={increasesLanguage}>
          +
        </button>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-11/12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Number of {modalContent}</h3>
              <button
                className="px-2 text-center text-sm font-medium text-cyan-600 bg-slate-50 rounded hover:font-semibold transition"
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Add the number of {modalContent} ​​that your project will have.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              The cost of each {modalContent} is <strong>30€</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Options;
