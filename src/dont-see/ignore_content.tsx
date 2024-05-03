import cssText from "data-text:~style.css"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetOverlayAnchor
} from "plasmo"
import React, { useEffect, useState } from "react"

import { CountButton } from "~features/CountButton"
import { MagicButton } from "~features/MagicButton"
import { PromptInput } from "~features/PromptInput"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector<HTMLElement>("body")

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("div.msg-form__contenteditable")

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [showMagicIcon, setShowMagicIcon] = useState<boolean>(false)

  useEffect(() => {
    const inputField = document.querySelector("div.msg-form__contenteditable")

    inputField.addEventListener("focusin", () => {
      setShowMagicIcon(true)
    })
    inputField.addEventListener("focusout", () => {
      setShowMagicIcon(false)
    })
  }, [])

  return (
    <>
      {showMagicIcon && (
        <div className="z-20 absolute bottom-4 right-4">
          <MagicButton />
        </div>
      )}

      <div className="fixed inset-0 z-[45] flex justify-center items-center bg-[rgba(13,13,18,0.2)] ">
        <PromptInput />
      </div>
      {/* <div className="z-50 flex fixed top-32 right-8">
        <CountButton />
      </div> */}
    </>
  )
}

export default PlasmoOverlay
