import type { PlasmoGetInlineAnchor } from "plasmo"
import magicIcon from "raw:~/assets/magic.png"
import React from "react"

export const MagicButton = () => {
  const showMagic = () => {
    console.log("+++++++++++++++++Magic+++++++++++++++++")
  }

  return (
    <button
      onClick={() => showMagic()}
      type="button"
      className="size-[32px] flex flex-row justify-center items-center bg-white shadow-md rounded-full ">
      <img
        src={magicIcon}
        alt="Enter Prompt"
        height={13.8}
        width={15.47}
        className="w-[15.47px] h-[13.87px] grow-0"
      />
    </button>
  )
}
