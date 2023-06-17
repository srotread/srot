import { config, fields, singleton } from "@keystatic/core"

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "NeeshSamsi",
      name: "srot",
    },
  },
  singletons: {
    homepage: singleton({
      label: "Home Page",
      path: "src/data/pages/home",
      schema: {
        headline: fields.text({
          label: "Headline - Main section",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        subheadline: fields.text({
          label: "Sub headline - Main section",
          description: "The sub headline shown under the main headline.",
          validation: {
            length: { min: 1 },
          },
        }),
        backgroundImage: fields.image({
          label: "Background Image - Main section",
          description: "Background image for the Main Section.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/home",
          publicPath: "/images/home",
        }),

        storyDescription: fields.document({
          label: "Content - Story section",
          description: "Shows under Story Headline.",
          formatting: true,
        }),
        storyImage: fields.image({
          label: "Image - Story section",
          description: "Image that shows side by side with the Story section.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/home",
          publicPath: "/images/home",
        }),
      },
    }),
  },
})
