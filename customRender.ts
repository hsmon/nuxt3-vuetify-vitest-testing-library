import { render } from '@testing-library/vue'
import {createVuetify} from 'vuetify'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
})

const renderWithVuetify: typeof render = (component, options) => {
  const root = document.createElement('div')
  root.setAttribute('data-app', 'true')

  return render(
    component,
    {
      container: document.body.appendChild(root),
      global: {
        plugins: [vuetify],
      },
      ...options,
    },
  )
}

export default renderWithVuetify