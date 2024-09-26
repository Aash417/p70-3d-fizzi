"use client";

import { SodaCan, SodaCanProps } from "@/components/SodaCan";
import { Float } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type floatingCanProps = {
   flavor?: SodaCanProps["flavor"];
   floatSpeed?: number;
   floatIntensity?: number;
   floatingRange?: [number, number];
   rotationIntensity?: number;
   children?: ReactNode;
};

const FloatingCan = forwardRef<Group, floatingCanProps>(
   (
      {
         flavor = "blackCherry",
         floatSpeed = 1.5,
         floatIntensity = 1,
         floatingRange = [-0.1, 0.1],
         rotationIntensity = 1,
         children,
         ...props
      },
      ref,
   ) => {
      return (
         <group ref={ref}>
            <Float
               speed={floatSpeed}
               rotationIntensity={rotationIntensity}
               floatIntensity={floatIntensity}
               floatingRange={floatingRange}
            >
               {children}
               <SodaCan flavor={flavor} />
            </Float>
         </group>
      );
   },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
