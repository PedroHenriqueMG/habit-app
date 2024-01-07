"use client";

import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      green: "text-neutral-900 font-display bg-[#45EDAD]",
      black: "text-red-500 font-display bg-neutral-800",
    },
  },
  defaultVariants: {
    color: "black",
  },
});
