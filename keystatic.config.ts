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
    config: singleton({
      label: "Site Settings",
      path: "src/data/config",
      schema: {
        logo: fields.image({
          label: "Logo",
          description:
            "The Srot Logo file. This will be displayed in the Navigation Menu so choose a Horizontal or Square file.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/config",
          publicPath: "/images/config",
        }),
        url: fields.text({
          label: "Site URL",
          description: "This will be used to construct metadata for the site.",
          validation: {
            length: { min: 1 },
          },
        }),
        twitter: fields.text({
          label: "Twitter Username",
          description:
            "This is not necessary but it will be shown if the site is shared on Twitter.",
        }),
        siteTitle: fields.text({
          label: "Site Title",
          description:
            "This will be appended to the metadata title specified on each page (For example if Page title is 'Home' & this one is 'Srot', the title will be 'Home | Srot').",
          validation: {
            length: { min: 1 },
          },
        }),
        address: fields.text({
          label: "Address - Footer",
          description: "The Regd. Address in the Footer.",
          validation: {
            length: { min: 1 },
          },
        }),
        email: fields.text({
          label: "Email - Footer",
          description: "The email address in the Footer.",
          validation: {
            length: { min: 1 },
          },
        }),
        numbers: fields.text({
          label: "Phone numbers - Footer",
          description: "The phone numbers in the Footer",
          validation: {
            length: { min: 1 },
          },
        }),
        instagram: fields.url({
          label: "Instagram URL",
          // description: "",
          validation: {
            isRequired: true,
          },
        }),
        facebook: fields.url({
          label: "Facebook URL",
          // description: "",
          validation: {
            isRequired: true,
          },
        }),
      },
    }),

    homepage: singleton({
      label: "Home Page",
      path: "src/data/pages/home",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
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
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline - Main section",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        description: fields.array(
          fields.text({
            label: "Paragraph",
            description: "Paragraph of the description.",
            validation: {
              length: { min: 1 },
            },
          }),
          {
            label: "Description paragraphs",
            description: "Shows under Story Headline & Srot means Source.",
            itemLabel: (props) => props.value,
          }
        ),
        image: fields.image({
          label: "Image - Main section",
          description:
            "Image that shows side by side with the Headline & description.",
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

    projectspage: singleton({
      label: "Projects Page",
      path: "src/data/pages/projects",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        subheadline: fields.text({
          label: "Sub headline",
          description: "The sub headline shown under the main headline.",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),

    workshopspage: singleton({
      label: "Workshops Page",
      path: "src/data/pages/workshops",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        subheadline: fields.text({
          label: "Sub headline",
          description: "The sub headline shown under the main headline.",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),

    centrespage: singleton({
      label: "Centres Page",
      path: "src/data/pages/centres",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        subheadline: fields.text({
          label: "Sub headline",
          description: "The sub headline shown under the main headline.",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),

    mediapage: singleton({
      label: "Media Page",
      path: "src/data/pages/media",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        gallerySections: fields.array(
          fields.object({
            title: fields.text({
              label: "Section Title",
              validation: {
                length: { min: 1 },
              },
            }),
            description: fields.text({
              label: "Section Description",
              description:
                "This is optional. Displayed in a paragraph under the Section headline.",
            }),
            images: fields.array(
              fields.object({
                image: fields.image({
                  label: "Image",
                  validation: {
                    isRequired: true,
                  },
                  directory: "/public/images/media/",
                  publicPath: "/images/media/",
                }),
                imageAlt: fields.text({
                  label: "Image Alternate Text",
                  description:
                    "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
                  validation: {
                    length: { min: 1 },
                  },
                }),
                caption: fields.text({
                  label: "Image Caption",
                  description: "This is optional. Displayed under the image",
                }),
              }),
              {
                label: "Section Images",
                itemLabel: (props) => props.fields.imageAlt.value,
              }
            ),
          }),
          {
            label: "Gallery Sections",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),

    teampage: singleton({
      label: "Team Page",
      path: "src/data/pages/team",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        teamSections: fields.array(
          fields.object({
            designation: fields.text({
              label: "Designation / Section Title",
              validation: {
                length: { min: 1 },
              },
            }),
            description: fields.text({
              label: "Section Description",
              description:
                "This is optional. Shows under the Section description.",
            }),
            members: fields.array(
              fields.object({
                image: fields.image({
                  label: "Image",
                  description: "Displayed on the Team Member's Card.",
                  validation: {
                    isRequired: true,
                  },
                  directory: "/public/images/team/",
                  publicPath: "/images/team/",
                }),
                imageAlt: fields.text({
                  label: "Image Alternate Text",
                  description:
                    "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
                  validation: {
                    length: { min: 1 },
                  },
                }),
                name: fields.text({
                  label: "Member's Name",
                  validation: {
                    length: { min: 1 },
                  },
                }),
                title: fields.text({
                  label: "Member's Title",
                  validation: {
                    length: { min: 1 },
                  },
                }),
                description: fields.text({
                  label: "Description",
                  description: "",
                  multiline: true,
                  validation: {
                    length: { min: 1 },
                  },
                }),
              }),
              {
                label: "Team Members",
                itemLabel: (props) => props.fields.name.value,
              }
            ),
          }),
          {
            label: "Team Sections",
            itemLabel: (props) => props.fields.designation.value,
          }
        ),
      },
    }),

    workpage: singleton({
      label: "Work with Us Page",
      path: "src/data/pages/work",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        subheadline: fields.text({
          label: "Subheadline",
          description: "Displayed under the main underlined headline.",
          validation: {
            length: { min: 1 },
          },
        }),
        image: fields.image({
          label: "Image",
          description: "Displayed side by side to the main content.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/work/",
          publicPath: "/images/work/",
        }),
        imageAlt: fields.text({
          label: "Image Alternate Text",
          description:
            "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
          validation: {
            length: { min: 1 },
          },
        }),
        involvedHeadline: fields.text({
          label: "Headline - Involvements Section",
          validation: {
            length: { min: 1 },
          },
        }),
        involvements: fields.array(
          fields.object({
            title: fields.text({
              label: "Title",
              validation: {
                length: { min: 1 },
              },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: "Involvements",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        testimonialsHeadline: fields.text({
          label: "Headline - Testimonials Section",
          validation: {
            length: { min: 1 },
          },
        }),
      },
    }),

    contactpage: singleton({
      label: "Contact Page",
      path: "src/data/pages/contact",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        image: fields.image({
          label: "Image",
          description: "Displayed side by side to the main content.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/contact/",
          publicPath: "/images/contact/",
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

    supportpage: singleton({
      label: "Support Page",
      path: "src/data/pages/support",
      schema: {
        metaTitle: fields.text({
          label: "Metadata Title",
          description:
            "This is the metadata title of the site. It will be prepended to the Site Title in Site Settings. It will be displayed when this page is shared, in the browser tab and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        metaDescription: fields.text({
          label: "Metadata Description",
          description:
            "This is the metadata description of the site. It will be displayed when this site is shared and used by search engines to rank this page.",
          validation: {
            length: { min: 1 },
          },
        }),
        headline: fields.text({
          label: "Headline",
          description:
            "The main underlined headline shown in the main section.",
          validation: {
            length: { min: 1 },
          },
        }),
        image: fields.image({
          label: "Image",
          description: "Displayed side by side to the main content.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/support/",
          publicPath: "/images/support/",
        }),
        imageAlt: fields.text({
          label: "Image Alternate Text",
          description:
            "This is read out to visually impaired users and displayed in a situation where the image was unable to load for any reason.",
          validation: {
            length: { min: 1 },
          },
        }),
        statistics: fields.array(
          fields.object({
            cta: fields.text({
              label: "Call to Action",
              description: "For example: Join, Help run, Nurture",
              validation: { length: { min: 1 } },
            }),
            number: fields.integer({
              label: "Number",
              validation: { isRequired: true, min: 0, max: 999999999999 },
            }),
            noun: fields.text({
              label: "Noun",
              description: "For example: Join, Help run, Nurture",
              validation: { length: { min: 1 } },
            }),
          }),
          {
            label: "Statistics",
            description:
              "For example: Join 30 Supporters, Nurture 30 Local Students",
            itemLabel: (props) => props.fields.noun.value,
          }
        ),
        content: fields.text({
          label: "Content Paragraph shown under the statistics.",
          validation: { length: { min: 1 } },
        }),
        cta: fields.text({
          label: "Call to Action - Donation Button.",
          description:
            "Defaults to 'Donate now'. Feel free to experiment and see what works best for you.",
        }),
        donationUrl: fields.url({
          label: "Donation Button URL",
          validation: { isRequired: true },
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

    centres: collection({
      label: "Centres",
      path: "src/data/centres/*",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            description: "Name of this Centres.",
          },
          slug: {
            label: "Slug",
            description: "A unique url safe identifier for this centre.",
          },
        }),
        description: fields.text({
          label: "Description",
          description: "Displayed in the Centre Cards.",
          validation: {
            length: { min: 1 },
          },
        }),
        image: fields.image({
          label: "Image",
          description:
            "Displayed in the Centre Card & prominently on the Centre's page.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/centres/",
          publicPath: "/images/centres/",
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

    testimonials: collection({
      label: "Testimonials",
      path: "src/data/testimonials/*",
      slugField: "name",
      schema: {
        quote: fields.text({
          label: "Quote",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        name: fields.text({
          label: "Name",
          validation: { length: { min: 1 } },
        }),
        title: fields.text({
          label: "Title / Designation",
          validation: { length: { min: 1 } },
        }),
        image: fields.image({
          label: "Image",
          description: "Profile picture of the person.",
          validation: {
            isRequired: true,
          },
          directory: "/public/images/testimonials/",
          publicPath: "/images/testimonials/",
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
