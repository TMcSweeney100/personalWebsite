import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profile } from "@/data/profile"

/**
 * "View CV" — opens the PDF in a new tab so the browser renders it inline.
 * Nothing is downloaded unless the reader chooses to.
 */
function CvLink({ arrow = false, ...buttonProps }) {
  return (
    <Button asChild variant="outline" {...buttonProps}>
      <a href={profile.links.cv} target="_blank" rel="noreferrer">
        View CV
        <span className="sr-only"> (PDF, opens in a new tab)</span>
        {arrow ? <ArrowUpRightIcon aria-hidden="true" className="size-[15px]" /> : null}
      </a>
    </Button>
  )
}

export { CvLink }
