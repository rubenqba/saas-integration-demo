import React from "react";
import { Image } from "@nextui-org/react";

type ProviderImageProps = {
  provider: string;
};

export default function ProviderImage({
  provider,
}: Readonly<ProviderImageProps>) {
  return (
    <Image
      alt={provider}
      height={"auto"}
      radius="sm"
      src={`/${provider}.svg`}
      width={40}
    />
  );
}
