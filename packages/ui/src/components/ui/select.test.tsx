import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

describe("Select", () => {
  it("renders trigger correctly", () => {
    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectContent>
      </Select>
    )
    
    expect(screen.getByTestId("select-trigger")).toBeInTheDocument()
    expect(screen.getByText("Theme")).toBeInTheDocument()
  })
})
