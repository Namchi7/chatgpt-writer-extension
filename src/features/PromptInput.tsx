import generateIcon from "raw:~/assets/generate.png"
import React, { useState } from "react"

export const PromptInput = () => {
  const [prompt, setPrompt] = useState<string>("")

  const generatePrompt = () => {
    // console.log("+++++++++++++++++Generate+++++++++++++++++")
    // const promptInput = document.querySelector("#data-chatgpt-prompt-input")

    // console.log(promptInput, "Ye bhi to hai************")

    // console.log(promptInput.value, "+++++++++++++++++Generate+++++++++++++++++")

    console.log(prompt, "***********")
  }

  return (
    <div className="w-[870px] p-[26px] flex flex-col justify-start items-end gap-[26px] rounded-[15px] bg-[#F9FAFB] shadow-lg z-50 ">
      <input
        type="text"
        placeholder="Your Text"
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full px-4 py-4 rounded-lg border border-solid border-gray-200 text-gray-800 placeholder:text-gray-300 text-2xl text-left font-medium "
        id="data-chatgpt-prompt-input"
      />

      <button
        onClick={() => generatePrompt()}
        type="button"
        className="flex flex-nowrap justify-center items-center gap-[2.5px] px-6 py-3 bg-[#3B82F6] rounded-lg ">
        <img
          src={generateIcon}
          alt="Click to "
          height={24}
          width={24}
          className="w-6 h-6 "
        />

        <p className="text-2xl text-white font-semibold">Generate</p>
      </button>
    </div>
  )
}
