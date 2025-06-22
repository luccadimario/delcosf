import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    motion,
    AnimatePresence,
    Transition,
    type VariantLabels,
    type TargetAndTransition,
} from "framer-motion";

function cn(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
}

export interface RotatingTextRef {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
}

export interface RotatingTextProps
    extends Omit<
        React.ComponentPropsWithoutRef<typeof motion.span>,
        "children" | "transition" | "initial" | "animate" | "exit"
    > {
    texts: string[];
    transition?: Transition;
    initial?: TargetAndTransition | VariantLabels;
    animate?: TargetAndTransition | VariantLabels;
    exit?: TargetAndTransition | VariantLabels;
    animatePresenceMode?: "sync" | "wait";
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    loop?: boolean;
    auto?: boolean;
    splitBy?: string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
    (
        {
            texts,
            transition = { type: "spring", damping: 25, stiffness: 300 },
            initial = { y: "100%", opacity: 0 },
            animate = { y: 0, opacity: 1 },
            exit = { y: "-120%", opacity: 0 },
            animatePresenceMode = "wait",
            animatePresenceInitial = false,
            rotationInterval = 2000,
            staggerDuration = 0,
            staggerFrom = "first",
            loop = true,
            auto = true,
            splitBy = "characters",
            onNext,
            mainClassName,
            splitLevelClassName,
            elementLevelClassName,
            ...rest
        },
        ref
    ) => {
        const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

        // For delayed width animation
        const [pendingIndex, setPendingIndex] = useState<number>(currentTextIndex);
        const [width, setWidth] = useState<number | undefined>(undefined);
        const measureRef = useRef<HTMLSpanElement>(null);

        // Split logic
        const splitIntoCharacters = (text: string): string[] => {
            if (typeof Intl !== "undefined" && Intl.Segmenter) {
                const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
                return Array.from(
                    segmenter.segment(text),
                    (segment) => segment.segment
                );
            }
            return Array.from(text);
        };

        // Use pendingIndex for measuring, currentTextIndex for animation
        const elementsForMeasure = useMemo(() => {
            const currentText: string = texts[pendingIndex];
            if (splitBy === "characters") {
                const words = currentText.split(" ");
                return words.map((word, i) => ({
                    characters: splitIntoCharacters(word),
                    needsSpace: i !== words.length - 1,
                }));
            }
            if (splitBy === "words") {
                return currentText.split(" ").map((word, i, arr) => ({
                    characters: [word],
                    needsSpace: i !== arr.length - 1,
                }));
            }
            if (splitBy === "lines") {
                return currentText.split("\n").map((line, i, arr) => ({
                    characters: [line],
                    needsSpace: i !== arr.length - 1,
                }));
            }
            return currentText.split(splitBy).map((part, i, arr) => ({
                characters: [part],
                needsSpace: i !== arr.length - 1,
            }));
        }, [texts, pendingIndex, splitBy]);

        const elementsForAnimation = useMemo(() => {
            const currentText: string = texts[currentTextIndex];
            if (splitBy === "characters") {
                const words = currentText.split(" ");
                return words.map((word, i) => ({
                    characters: splitIntoCharacters(word),
                    needsSpace: i !== words.length - 1,
                }));
            }
            if (splitBy === "words") {
                return currentText.split(" ").map((word, i, arr) => ({
                    characters: [word],
                    needsSpace: i !== arr.length - 1,
                }));
            }
            if (splitBy === "lines") {
                return currentText.split("\n").map((line, i, arr) => ({
                    characters: [line],
                    needsSpace: i !== arr.length - 1,
                }));
            }
            return currentText.split(splitBy).map((part, i, arr) => ({
                characters: [part],
                needsSpace: i !== arr.length - 1,
            }));
        }, [texts, currentTextIndex, splitBy]);

        // Delay width update after text changes
        useEffect(() => {
            if (pendingIndex !== currentTextIndex) {
                const timeout = setTimeout(() => {
                    setPendingIndex(currentTextIndex);
                }, rotationInterval / 4.5); // Adjust delay here!
                return () => clearTimeout(timeout);
            }
        }, [currentTextIndex, pendingIndex]);

        // Measure width whenever pendingIndex or relevant classes change
        useEffect(() => {
            if (measureRef.current) {
                setWidth(measureRef.current.offsetWidth);
            }
        }, [pendingIndex, texts, splitBy, mainClassName, splitLevelClassName, elementLevelClassName]);

        // Rotation logic
        const getStaggerDelay = useCallback(
            (index: number, totalChars: number): number => {
                const total = totalChars;
                if (staggerFrom === "first") return index * staggerDuration;
                if (staggerFrom === "last")
                    return (total - 1 - index) * staggerDuration;
                if (staggerFrom === "center") {
                    const center = Math.floor(total / 2);
                    return Math.abs(center - index) * staggerDuration;
                }
                if (staggerFrom === "random") {
                    const randomIndex = Math.floor(Math.random() * total);
                    return Math.abs(randomIndex - index) * staggerDuration;
                }
                if (typeof staggerFrom === "number") {
                    return Math.abs(staggerFrom - index) * staggerDuration;
                }
                return index * staggerDuration;
            },
            [staggerFrom, staggerDuration]
        );

        const handleIndexChange = useCallback(
            (newIndex: number) => {
                setCurrentTextIndex(newIndex);
                if (onNext) onNext(newIndex);
            },
            [onNext]
        );

        const next = useCallback(() => {
            const nextIndex =
                currentTextIndex === texts.length - 1
                    ? loop
                        ? 0
                        : currentTextIndex
                    : currentTextIndex + 1;
            if (nextIndex !== currentTextIndex) {
                handleIndexChange(nextIndex);
            }
        }, [currentTextIndex, texts.length, loop, handleIndexChange]);

        const previous = useCallback(() => {
            const prevIndex =
                currentTextIndex === 0
                    ? loop
                        ? texts.length - 1
                        : currentTextIndex
                    : currentTextIndex - 1;
            if (prevIndex !== currentTextIndex) {
                handleIndexChange(prevIndex);
            }
        }, [currentTextIndex, texts.length, loop, handleIndexChange]);

        const jumpTo = useCallback(
            (index: number) => {
                const validIndex = Math.max(0, Math.min(index, texts.length - 1));
                if (validIndex !== currentTextIndex) {
                    handleIndexChange(validIndex);
                }
            },
            [texts.length, currentTextIndex, handleIndexChange]
        );

        const reset = useCallback(() => {
            if (currentTextIndex !== 0) {
                handleIndexChange(0);
            }
        }, [currentTextIndex, handleIndexChange]);

        useImperativeHandle(
            ref,
            () => ({
                next,
                previous,
                jumpTo,
                reset,
            }),
            [next, previous, jumpTo, reset]
        );

        useEffect(() => {
            if (!auto) return;
            const intervalId = setInterval(next, rotationInterval);
            return () => clearInterval(intervalId);
        }, [next, rotationInterval, auto]);

        return (
            <>
                {/* Ghost for measuring width of new text (with delayed update) */}
                    <span
                        ref={measureRef}
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            visibility: "hidden",
                            pointerEvents: "none",
                            height: 0,
                            overflow: "hidden",
                            whiteSpace: "pre",
                        }}
                        className={cn(mainClassName)}
                    >
                    {elementsForMeasure.map((wordObj, wordIndex, array) => (
                        <span key={wordIndex} className={cn("inline-flex", splitLevelClassName)}>
                            {wordObj.characters.map((char, charIndex) => (
                                <span
                                    key={charIndex}
                                    className={cn("inline-block", elementLevelClassName)}
                                >
                                    {char}
                                </span>
                            ))}
                            {wordObj.needsSpace && (
                                <span className="whitespace-pre"> </span>
                            )}
                        </span>
                    ))}
                </span>
                    {/* Animated, visible text */}
                    <motion.span
                        className={cn(
                            "inline-flex whitespace-pre-wrap relative",
                            mainClassName
                        )}
                        {...rest}
                        animate={width !== undefined ? { width } : undefined}
                        style={{
                            width: width !== undefined ? width : "auto",
                            overflow: "hidden",
                            display: "inline-flex",
                            position: "relative",
                            ...rest.style,
                        }}
                        transition={{
                            ...transition,
                            layout: { duration: 0.5, ease: "easeInOut" }
                        }}
                    >
                        <span className="sr-only">{texts[currentTextIndex]}</span>
                        <AnimatePresence
                            mode={animatePresenceMode}
                            initial={animatePresenceInitial}
                        >
                            <motion.div
                                key={currentTextIndex}
                                className={cn(
                                    splitBy === "lines"
                                        ? "flex flex-col"
                                        : "flex"
                                )}
                                aria-hidden="true"
                                style={{ width: "100%" }}
                            >
                                {elementsForAnimation.map((wordObj, wordIndex, array) => {
                                    const previousCharsCount = array
                                        .slice(0, wordIndex)
                                        .reduce((sum, word) => sum + word.characters.length, 0);
                                    return (
                                        <span
                                            key={wordIndex}
                                            className={cn("inline-flex", splitLevelClassName)}
                                        >
                                        {wordObj.characters.map((char, charIndex) => (
                                            <motion.span
                                                key={charIndex}
                                                initial={initial}
                                                animate={animate}
                                                exit={exit}
                                                transition={{
                                                    ...transition,
                                                    delay: getStaggerDelay(
                                                        previousCharsCount + charIndex,
                                                        array.reduce(
                                                            (sum, word) => sum + word.characters.length,
                                                            0
                                                        )
                                                    ),
                                                }}
                                                className={cn("inline-block", elementLevelClassName)}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                            {wordObj.needsSpace && (
                                                <span className="whitespace-pre"> </span>
                                            )}
                                    </span>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </motion.span>
            </>
        );
    }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
