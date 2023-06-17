import { config, fields, singleton, collection } from "@keystatic/core"

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
        backgroundImageAlt: fields.text({
          label: "Background Image Alternate Text - Main section",
          description:
            "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
          validation: {
            length: { min: 1 },
          },
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
        storyImageAlt: fields.text({
          label: "Image Alternate Text - Story section",
          description:
            "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),
  },

  collections: {
    projects: collection({
      label: "Projects",
      path: "src/data/projects/*",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Title of this Project.",
          },
          slug: {
            label: "Slug",
            description: "A unique url safe identifier for this project.",
          },
        }),
        description: fields.text({
          label: "Description",
          description:
            "Displayed in the Project Card.",
          validation: {
            length: { min: 1 },
          },
        }),
        image: fields.image({
          label: "Image",
          description: "Displayed on the Project Card & prominently on the Project's page.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/projects/",
          publicPath: "/images/projects/",
        }),
        imageAlt: fields.text({
          label: "Image Alternate Text",
          description:
            "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),
  },
})
