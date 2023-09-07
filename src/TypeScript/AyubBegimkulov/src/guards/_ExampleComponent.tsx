// @ts-ignore
import React, { FC } from "react"

interface IExampleComponents {
  text?: string
}

export const ExampleComponents: FC<IExampleComponents> = ({ text }) => {
  if (typeof text === "undefined") return null

  return <>Some text: {text}</>
}
