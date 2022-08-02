export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62e97b083858765781af3d8a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-n6mhhiys",
                  apiId: "abfd4bee-e02d-4045-bbe0-443f9b3c0ff0",
                },
                {
                  buildHookId: "62e97b09fb4383525e4df6f2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-36kfs8zr",
                  apiId: "40243b53-b868-4ee3-914b-fb8a9d223fc4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mikaelhorn/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-36kfs8zr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
