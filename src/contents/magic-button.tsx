import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import magicIcon from "raw:~/assets/magic.png"
import React, { useEffect, useState } from "react"

import { sendToBackground, sendToBackgroundViaRelay } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("div.msg-form__contenteditable")

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getShadowHostId = () => "plasmo-magic-button"

const MagicButton = () => {
  const [showMagicIcon, setShowMagicIcon] = useState<boolean>(false)

  useEffect(() => {
    const inputField = document.querySelector("div.msg-form__contenteditable")

    inputField.addEventListener("focusin", () => {
      setShowMagicIcon(true)
    })
    inputField.addEventListener("focusout", () => {
      setTimeout(() => setShowMagicIcon(false), 500)
    })

    // magicIcon.addEventListener("focusin", () => {
    //   setShowMagicIcon(true)
    // })
    // magicIcon.addEventListener("focusout", () => {
    //   setShowMagicIcon(false)
    // })
  }, [])

  const showMagic = async () => {
    // const inputPrompt = document.querySelector(
    //   "[data-chatgpt-prompt-input]"
    // ) as HTMLElement

    // inputPrompt.style.display = "flex"

    console.log("+++++++++++++++++ Magic +++++++++++++++++")

    // const response = await sendToBackground({
    //   name: `promptOpen`,
    //   body: {
    //     open: true
    //   }
    // })

    const response = sendToBackgroundViaRelay({
      open: true
    })

    console.log("+++++++++++++++++ Response +++++++++++++++++")

    console.log(response)
  }

  return (
    showMagicIcon && (
      <button
        onClick={() => showMagic()}
        type="button"
        data-chatgpt-magic-icon
        className="z-20 absolute bottom-4 right-4 size-[32px] flex flex-row justify-center items-center bg-white shadow-md rounded-full ">
        <img
          src={magicIcon}
          alt="Enter Prompt"
          height={13.8}
          width={15.47}
          className="w-[15.47px] h-[13.87px] grow-0"
        />
      </button>
    )
  )
}

export default MagicButton
