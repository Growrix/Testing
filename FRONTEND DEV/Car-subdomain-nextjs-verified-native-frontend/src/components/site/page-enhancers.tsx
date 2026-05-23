import Script from "next/script";
import type { SliderVariant } from "@/data/native-content";
import { SwiperBoot } from "@/components/site/swiper-boot";

type PageEnhancersProps = {
  scripts: string[];
  sliderVariant: SliderVariant;
};

export function PageEnhancers({ scripts, sliderVariant }: PageEnhancersProps) {
  return (
    <>
      {scripts.map((scriptSrc) => (
        <Script key={scriptSrc} src={scriptSrc} strategy="afterInteractive" />
      ))}
      <SwiperBoot variant={sliderVariant} />
    </>
  );
}