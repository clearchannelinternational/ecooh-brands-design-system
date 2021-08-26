// import "../src/styles/app.scss"
import "../src/ecooh-system/ecooh-system.scss"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}