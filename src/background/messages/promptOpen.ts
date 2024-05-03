import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  // Process the data received from the sending content script
  const data = req.body

  console.log("Background me hu")

  const processedData = { ...data, msg: "Ye raha msg" }

  res.send(processedData)
}

export default handler
