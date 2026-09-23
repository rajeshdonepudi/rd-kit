import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect } from "vitest"

import { Input } from "./input"

describe("Input", () => {
  it("renders correctly", () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText(/enter text/i)
    expect(input).toBeInTheDocument()
  })

  it("handles user input", async () => {
    const user = userEvent.setup()
    render(<Input aria-label="test-input" />)
    
    const input = screen.getByLabelText("test-input")
    await user.type(input, "Hello")
    
    expect(input).toHaveValue("Hello")
  })

  it("renders with a prefix and suffix", () => {
    render(
      <Input
        prefix={<span data-testid="prefix">$</span>}
        suffix={<span data-testid="suffix">.00</span>}
      />
    )
    
    expect(screen.getByTestId("prefix")).toBeInTheDocument()
    expect(screen.getByTestId("suffix")).toBeInTheDocument()
  })

  it("sets aria-invalid when isInvalid is true", () => {
    render(<Input aria-label="invalid-input" isInvalid />)
    const input = screen.getByLabelText("invalid-input")
    
    expect(input).toHaveAttribute("aria-invalid", "true")
    // Note: DOM output might look slightly different based on screen size/Tailwind setup, but testing attribute is solid
  })

  it("disables the input properly", () => {
    render(<Input aria-label="disabled-input" disabled />)
    const input = screen.getByLabelText("disabled-input")
    
    expect(input).toBeDisabled()
  })
})
