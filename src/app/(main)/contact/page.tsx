"use client"

import type { FC } from "react"
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikValues,
} from "formik"
import * as Yup from "yup"
import ImageWithBorder from "@/components/ImageWithBorder"
import Button from "@/components/Button"
import Caret from "@/components/Icons/Caret"
import { Listbox } from "@headlessui/react"

const options = [
  { id: 1, name: "I just want to get in touch" },
  { id: 2, name: "I want to Volunteer" },
  { id: 3, name: "I am looking to Intern with you" },
  { id: 4, name: "I want to work with you" },
]

const contactSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string(),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  topic: Yup.string(),
  message: Yup.string().required("Message is required."),
})

const Contact: FC = () => {
  return (
    <>
      <main className="flex items-start justify-between gap-8 bg-light px-col-outer py-16 text-dark lg:py-36 lg:pl-col-inner lg:pr-col-inner xl:pr-0">
        <div>
          <h1 className="text-4xl font-bold underline decoration-accent md:text-5xl 2xl:text-6xl 3xl:text-7xl">
            Contact Us
          </h1>

          <div className="xl:w-[60ch]">
            <div className="relative mt-10 block aspect-[4/3] 2xl:hidden">
              <ImageWithBorder
                src="/hero.png"
                alt="Story page hero img"
                sizes=""
              />
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                topic: "",
                message: "",
              }}
              validationSchema={contactSchema}
              onSubmit={(
                values,
                { setSubmitting, setValues }: FormikHelpers<FormikValues>
              ) => {
                console.log(values)

                setSubmitting(false)
              }}
            >
              {({ values, handleChange, isSubmitting }) => (
                <Form className="grid grid-cols-2 gap-x-4 gap-y-8 pt-16">
                  <div>
                    <label
                      className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Avaneesh"
                      className="inline-block w-full rounded border border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="mt-1 text-base text-red-400 transition-all 3xl:text-lg"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Samsi"
                      className="inline-block w-full rounded border  border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
                      htmlFor="email"
                    >
                      Enter your email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="inline-block w-full rounded border border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-1 text-base text-red-400 transition-all 3xl:text-lg"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
                      htmlFor="topic"
                    >
                      How can we help you?
                    </label>

                    <Listbox
                      value={values.topic}
                      onChange={handleChange}
                      name="topic"
                    >
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
                  </div>

                  <div className="col-span-2">
                    <label
                      className="mb-4 inline-block w-full text-xl lg:text-2xl 2xl:text-3xl"
                      htmlFor="message"
                    >
                      Your message
                    </label>

                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows={6}
                      placeholder="Enter your message here"
                      className="inline-block w-full rounded border border-dark text-lg focus-within:outline-accent focus:border-transparent focus:ring-0 3xl:text-xl"
                    ></Field>
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="mt-1 text-base text-red-400 transition-all 3xl:text-lg"
                    />
                  </div>
                  <div className="text-xl lg:text-2xl">
                    <Button
                      text="Get in touch"
                      theme="Light"
                      type="Primary"
                      disabled={isSubmitting}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="relative mr-2 hidden aspect-[4/3] w-1/2 2xl:block">
          <ImageWithBorder src="/hero.png" alt="Test" sizes="" />
        </div>
      </main>
    </>
  )
}

export default Contact
