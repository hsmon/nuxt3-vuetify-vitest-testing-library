import { describe, it, expect } from 'vitest'
import { fireEvent } from '@testing-library/vue'
import customRender from '@/customRender'
import Button from './index.vue'

const props = {
  label: "Test Text"
}

describe('Button', () => {
  it('should render correctly', () => {
    const { getByRole } = customRender(Button, {
      props
    })

    expect(getByRole('button')).toBeTruthy()
  })

  it('should emit click event', () => {
    const { getByText } = customRender(Button, {
      props
    })

    fireEvent.click(getByText(props.label))
  })
})