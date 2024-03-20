"use client"

import { useEffect } from "react"

const DonateButton = () => {
  useEffect(() => {
    const Script = document.createElement("script")
    //id should be same as given to form element
    const Form = document.getElementById("donateForm")
    Script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js",
    )
    Script.setAttribute("data-payment_button_id", "pl_J5o4CjtynlT5JH")
    Form!.appendChild(Script)
  }, [])

  return <form id="donateForm" data-umami-event="Razorpay Donate Button" />
}

export default DonateButton
