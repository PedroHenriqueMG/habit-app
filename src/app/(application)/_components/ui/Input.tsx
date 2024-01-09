"use client";

import { extendVariants, Input } from "@nextui-org/react";

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      dark: {
        inputWrapper: [
          "bg-neutral-800",
          "data-[hover=true]:bg-neutral-800",
          "data-[focus=true]:border-neutral-800",
        ],
        input: [
          "text-white bg-neutral-800 data-[hover=true]:bg-neutral-800",
          "focus:text-white data-[focus=true]:border-neutral-800",
          "font-sans",
        ],
      },
    },
  },
  defaultVariants: {
    color: "dark",
  },
});
