import { ThemeProvider } from "@material-tailwind/react";

export default function FAQWrap({ children }) {
  const customTheme = {
    accordion: {
      defaultProps: {
        icon: undefined,
        className: "",
        animate: {
          unmount: {},
          mount: {},
        },
        disabled: false,
      },
      styles: {
        base: {
          container: {
            display: "block",
            position: "relative",
            width: "w-full",
          },
          header: {
            initial: {
              display: "flex",
              justifyContent: "justify-between",
              alignItems: "items-center",
              width: "w-full",
              py: "py-2",
              borderWidth: "border-none",
              color: "text-white",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              textAlign: "text-left",
              fontWeight: "font-semibold",
              lineHeight: "leading-snug",
              userSelect: "select-none",
              hover: "",
              transition: "transition-colors",
            },
            active: { color: "text-white" },
            icon: {
              ml: "ml-4",
            },
          },
          body: {
            display: "block",
            width: "w-full",
            py: "py-1",
            color: "text-white",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-light",
            lineHeight: "leading-normal",
          },
        },
      },
    },
  };

  return <ThemeProvider value={customTheme}>{children}</ThemeProvider>;
}
