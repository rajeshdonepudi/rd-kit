import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Checkbox } from "./checkbox"

describe("Checkbox", () => {
  it("renders correctly", () => {
    render(<Checkbox data-testid="checkbox" />)
    expect(screen.getByTestId("checkbox")).toBeInTheDocument()
  })

  it("can be checked", async () => {
    render(<Checkbox data-testid="checkbox" />)
    const checkbox = screen.getByTestId("checkbox")
    
    expect(checkbox).not.toBeChecked()
    
    await userEvent.click(checkbox)
    
    expect(checkbox).toBeChecked()
  })

  it("can be disabled", () => {
    render(<Checkbox data-testid="checkbox" disabled />)
    const checkbox = screen.getByTestId("checkbox")
    
    expect(checkbox).toBeDisabled()
  })
})
