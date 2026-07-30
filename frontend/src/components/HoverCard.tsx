// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";
import React from "react";

export function HoverCardUI({element}: {element: React.JSX.Element}) {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={element} />
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
          {element}
      </HoverCardContent>
    </HoverCard>
  )
}
