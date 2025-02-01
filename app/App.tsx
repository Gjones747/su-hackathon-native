import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PropsWithChildren, useState } from "react";


export default function App () {
    return (
        <ThemedView>
            <ThemedText>
                Hello World
            </ThemedText>
        </ThemedView>
    )
}