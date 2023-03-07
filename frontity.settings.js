const settings = {
  name: "headless-wp-theme",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "React Portofolio"
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Hem", "/"],
            ["Projekt", "/projects/"],
            ["Kontakt", "/kontakt/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://frontityproject.local/wp-json",
          "postTypes" : [
            {
              type: "projects",
              endpoint : "projects",
              archive : "/projects"
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
