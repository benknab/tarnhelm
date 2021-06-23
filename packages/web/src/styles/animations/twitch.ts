import {css, keyframes} from "styled-components"
import type {FlattenSimpleInterpolation} from "styled-components"

export const twitchKeyframes = keyframes`
	1% {
		transform: rotateX(10deg) skewX(60deg);
	}
	2% {
		transform: rotateX(0deg) skewX(0deg);
	}
`

export type TwitchAnimationProperties = {
	duration: number
	delay: number
}

export type TwitchArgs = TwitchAnimationProperties

export function twitchSnippet({
	duration,
	delay,
}: TwitchArgs): FlattenSimpleInterpolation {
	return css`
		${twitchKeyframes} ${duration}s ${delay}s infinite
	`
}

export function twitch(args: TwitchArgs): FlattenSimpleInterpolation {
	return css`
		animation: ${twitchSnippet(args)};
	`
}
