import { render } from '@testing-library/react'
import { Home } from './index'

test('sum', () => {
    const { getByText } = render(<Home />)
    expect(getByText("Home")).toBeInTheDocument()
})