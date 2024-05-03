import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"
import generateIcon from "raw:~/assets/generate.png"
import React, { useState } from "react"

import { usePort } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector<HTMLElement>(".application-outlet")

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getShadowHostId = () => "plasmo-prompt-input"

const PromptInput = () => {
  const [prompt, setPrompt] = useState<string>("")

  const promptOpen = usePort("promptOpen")

  if (promptOpen) {
    const temp = promptOpen
    console.log("Prompt aaya", temp.data.open)
  }

  const generatePrompt = () => {
    console.log(prompt, "**********")
  }

  return (
    promptOpen.data?.open && (
      <div
        style={{ display: "none" }}
        className="fixed inset-0 z-[45] flex justify-center items-center bg-[rgba(13,13,18,0.2)] "
        data-chatgpt-prompt-input>
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
      </div>
    )
  )
}

export default PromptInput
