import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

describe("Dialog", () => {
  it("renders trigger and opens dialog on click", async () => {
    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">Open</DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByTestId("dialog-trigger")
    expect(trigger).toBeInTheDocument()

    // Dialog content should not be visible initially
    expect(screen.queryByTestId("dialog-content")).not.toBeInTheDocument()

    // Click to open
    await userEvent.click(trigger)

    expect(screen.getByTestId("dialog-content")).toBeInTheDocument()
    expect(screen.getByText("Are you sure?")).toBeInTheDocument()
  })
})
