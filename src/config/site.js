export function constructMetadata({
  title = "KunJon Labs ",
  description = "At Kunjon Labs, we blend code, creativity, and innovation. From full-stack development to stunning mobile apps and mesmerizing graphics, we turn visions into reality. Join us on this digital journey!",
  image = "/og.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@kunjongroup",
    },
    icons,
    metadataBase: new URL("https://kunjon-labs.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
