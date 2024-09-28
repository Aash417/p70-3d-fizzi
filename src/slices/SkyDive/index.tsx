"use client";

import { Bounded } from "@/components/Bounded";
import Scene from "@/slices/SkyDive/Scene";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";

export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
   return (
      <Bounded
         data-slice-type={slice.slice_type}
         data-slice-variation={slice.variation}
         className="skydive h-screen"
      >
         <h2 className="sr-only">{slice.primary.sentence}</h2>
         <View className="h-screen w-screen">
            <Scene
               sentence={slice.primary.sentence}
               flavor={slice.primary.flavor}
            />
         </View>
      </Bounded>
   );
};

export default SkyDive;
