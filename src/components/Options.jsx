import React from "react";

function Options({pages, setPages, languages, setLanguages}) {
  const decreasesPage = () => setPages((prev) => (prev > 1 ? prev - 1 : 1))
  const increasesPage = () => setPages((prev) => prev + 1)
  const decreasesLanguage = () => setLanguages((prev) => (prev > 1 ? prev - 1 : 1))
  const increasesLanguage = () => setLanguages((prev) => prev + 1)

  return (
      <div className="flex flex-col gap-2 items-end mt-4">
        <div className="flex items-center justify-between gap-2">
          <label htmlFor="pages" className="text-sm">Number of pages</label>
          <button
            className="px-2 rounded-full"
            onClick={decreasesPage}>-</button>
          <input 
            type="number"
            id="pages"
            min="1"
            value={pages}
            className="border rounded-xl w-12 px-2 py-1 text-center text-sm"
            onChange={(page) => setPages(Number(page.target.value))}
          />
          <button
            className="px-2 rounded-full"
            onClick={increasesPage}>+</button>
        </div>
        <div className="flex items-center justify-between gap-2">
          <label htmlFor="languages" className="text-sm">Number of languages</label>
        <button
            className="px-2 rounded-full"
            onClick={decreasesLanguage}>-</button>
          <input 
            type="number"
            id="languages"
            min="1"
            value={languages}
            className="border rounded-xl w-12 px-2 py-1 text-center text-sm"
            onChange={(language) => setLanguages(Number(language.target.value))}
          />
          <button
            className="px-2 rounded-full"
            onClick={increasesLanguage}>+</button>
        </div>
      </div>
  )
}
export default Options;