"use client";

import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      green: "text-neutral-900 rounded-md font-display bg-[#45EDAD]",
      black: "text-red-500 rounded-md font-display bg-neutral-800",
      neutral: "text-white rounded-md font-display bg-neutral-800",
    },
    size: {
      sm: "px-4 py-2",
      md: "px-6 py-2",
      lg: "px-10 py-4",
    },
  },
  defaultVariants: {
    color: "black",
    size: "sm",
  },
});