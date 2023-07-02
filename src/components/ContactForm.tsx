"use client"

import { useState } from "react"

import { z } from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormspark } from "@formspark/use-formspark"

import Button from "@/components/Button"
// import Caret from "@/components/Icons/Caret"
// import { Listbox } from "@headlessui/react"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string(),
  email: z
    .string()
    .email("Please enter valid email.")
    .min(1, "Email is required."),
  // topic: z.string().min(1),
  message: z.string().min(1, "Your message is required."),
})

type FormSchemaType = z.infer<typeof formSchema>

const ContactForm = ({
  message,
  email,
}: {
  message: string
  email: string
}) => {
  const [sent, setSent] = useState(true)
  const [status, setStatus] = useState<{ success: boolean; message: string }>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) })

  const [submit, submitting] = useFormspark({
    formId: "BEy3X43h",
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      await submit({
        ...data,
        _email: {
          subject: `Contact Form Submission - ${data.firstName} ${data.lastName}`,
          from: data.email,
        },
      })

      reset()

      setSent(true)
      setStatus({ success: true, message })

      setTimeout(() => {
        setSent(false)
      }, 5000)
    } catch (error) {
      setStatus({
        success: false,
        message: `Something went wrong. Please try again later. Or reach out at ${email}`,
      })
    }
  }

  return (
    <form
      className="grid grid-cols-2 gap-x-4 gap-y-8 pt-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Avaneesh"
          className="inline-block w-full rounded border border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="mt-1 text-base text-red-400 transition-all 3xl:text-lg">
            {errors.firstName?.message}
          </p>
        )}
      </div>
      <div>
        <label
          className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
          htmlFor="lastName"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Samsi"
          className="inline-block w-full rounded border  border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
          {...register("lastName")}
        />
      </div>

      <div className="col-span-2">
        <label
          className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
          htmlFor="email"
        >
          Enter your email
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="inline-block w-full rounded border border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-base text-red-400 transition-all 3xl:text-lg">
            {errors.email?.message}
          </p>
        )}
      </div>

      {/* <div className="col-span-2">
          <label
            className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
            htmlFor="topic"
          >
            How can we help you?
          </label>

          <Listbox value="">
            <Listbox.Button className="hover:bg-dark-off flex w-full items-center justify-between rounded border border-dark px-4 py-2 text-left text-lg 3xl:text-xl">
              <span>{options[0].name}</span>
              <span className="w-8 rotate-90 transition-all open:-rotate-90 xl:w-10">
                <Caret />
              </span>
            </Listbox.Button>
            <Listbox.Options className="mt-4 rounded border-l border-r border-t border-dark opacity-100 transition-opacity open:opacity-100">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className="selected:bg-accent/50 cursor-pointer border-b border-dark px-4 py-2 text-left text-xl text-dark transition-all hover:bg-accent/25"
                  value={option}
                >
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div> */}

      <div className="col-span-2">
        <label
          className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
          htmlFor="message"
        >
          Your message
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Enter your message here"
          className="inline-block w-full rounded border border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-base text-red-400 transition-all 3xl:text-lg">
            {errors.message?.message}
          </p>
        )}
      </div>

      <div className="text-xl lg:text-2xl">
        <Button
          text="Get in touch"
          theme="Light"
          type="Primary"
          loading={submitting}
          disabled={submitting}
        />
      </div>

      {sent && !submitting && (
        <p className="text-base lg:text-lg 2xl:text-xl">{status?.message}</p>
      )}
    </form>
  )
}

export default ContactForm
