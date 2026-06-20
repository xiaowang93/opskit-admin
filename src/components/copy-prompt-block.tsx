"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type CopyPromptBlockProps = {
  content: string;
};

type CopyState = "idle" | "success" | "error";

export function CopyPromptBlock({ content }: CopyPromptBlockProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    try {
      await navigator.clipboard.writeText(content);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }

    resetTimerRef.current = setTimeout(() => {
      setCopyState("idle");
    }, 1800);
  }

  const buttonLabel =
    copyState === "success"
      ? "已复制"
      : copyState === "error"
        ? "复制失败"
        : "复制 Prompt";

  return (
    <div className="relative max-w-full rounded-lg border bg-muted/40">
      <div className="absolute right-4 top-4 z-10">
        <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
          {buttonLabel}
        </Button>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 pt-14 text-xs leading-6 text-foreground">
        <code>{content}</code>
      </pre>
    </div>
  );
}
