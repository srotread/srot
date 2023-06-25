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
          description:
            "Shows under Story Headline. Please use only paragraphs of text.",
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
        projectsHeadline: fields.text({
          label: "Headline - Projects section",
          description: "Main underlined heading for the Projects section.",
          validation: {
            length: { min: 1 },
          },
        }),
        projectsSubheadline: fields.text({
          label: "Subheadline - Projects section",
          description: "Shown under the Main underlined heading.",
          validation: {
            length: { min: 1 },
          },
        }),
        workshopsHeadline: fields.text({
          label: "Headline - Workshops section",
          description: "Main underlined heading for the Workshops section.",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),

    storypage: singleton({
      label: "Story Page",
      path: "src/data/pages/story",
      schema: {
        headline: fields.text({
          label: "Headline - Main section",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        description: fields.array(fields.text({
          label: "Paragraph",
          description:
            "Paragraph of the description.",
          validation: {
            length: { min: 1 },
          },
        }), {
            label: "Description paragraphs",
            description:
              "Shows under Story Headline & Srot means Source.",
            itemLabel: (props) => props.value,
          }),
        image: fields.image({
          label: "Image - Main section",
          description: "Image that shows side by side with the Headline & description.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/story",
          publicPath: "/images/story",
        }),
        imageAlt: fields.text({
          label: "Image Alternate Text - Main section",
          description:
            "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
          validation: {
            length: { min: 1 },
          },
        }),
        contentSections: fields.array(
          fields.object({
            title: fields.text({
              label: "Section Title",
              description: "Underlined title.",
              validation: {
                length: { min: 1 },
              },
            }),
            content: fields.document({
              label: "Content",
              description:
                "Shows under the Section Title. Feel free to use paragraphs & lists.",
              formatting: true,
            }),
            image: fields.image({
              label: "Image",
              description: "Image that shows side by side with the Content.",
              validation: {
                isRequired: true,
              },
              directory: "/public/images/story",
              publicPath: "/images/story",
            }),
            imageAlt: fields.text({
              label: "Image Alternate Text",
              description:
                "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
              validation: {
                length: { min: 1 },
              },
            }),
          }),
          {
            label: "Content Sections",
            description:
              "Sections of Content comprising of side by side colums of a Title, Content & an Image.",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
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
          description: "Displayed in the Project Card.",
          validation: {
            length: { min: 1 },
          },
        }),
        image: fields.image({
          label: "Image",
          description:
            "Displayed on the Project Card & prominently on the Project's page.",
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
    workshops: collection({
      label: "Workshops",
      path: "src/data/workshops/*",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Title of this Workshop.",
          },
          slug: {
            label: "Slug",
            description: "A unique url safe identifier for this workshop.",
          },
        }),
        description: fields.text({
          label: "Description",
          description: "Displayed in the Workshop Card.",
          validation: {
            length: { min: 1 },
          },
        }),
        active: fields.checkbox({
          label: "Active",
          description:
            "Active workshops display and Enroll button, Inactive workshops display a Learn more button.",
        }),
        image: fields.image({
          label: "Image",
          description:
            "Displayed on the Workshop Card & prominently on the Workshop's page.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/workshops/",
          publicPath: "/images/workshops/",
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
