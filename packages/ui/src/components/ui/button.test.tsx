import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"

import { Button } from "./button"

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-primary")
  })

  it("handles click events", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button", { name: /disabled/i })
    
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:opacity-50")
  })

  it("renders correctly as a child using asChild", () => {
    render(
      <Button asChild>
        <a href="/link">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/link")
    // Ensure the button classes are merged onto the child
    expect(link).toHaveClass("inline-flex")
  })
})
