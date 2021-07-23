import styled from "@emotion/styled"
import {css} from "@emotion/react"
import {glitch} from "../styles/animations"

const glitchArgs = {
	width: "1px",
	duration: 0.3,
}

export const Link = styled.a(
	(props) => css`
		color: ${props.theme.colors.foreground};
		text-decoration: none;
		padding: 0 0.5rem 0.25rem;
		border-bottom: ${glitchArgs.width} solid ${props.theme.colors.foreground};
		position: relative;

		&:visited {
			color: ${props.theme.colors.foreground};
		}

		/** Animation */
		&:before,
		&:after {
			content: "";
			position: absolute;
			bottom: -${glitchArgs.width};
			left: 0;
			right: 0;
			height: ${glitchArgs.width};
			visibility: hidden;
		}

		&:before {
			background-color: ${props.theme.colors.secondary};
			z-index: -1;
		}

		&:after {
			background-color: ${props.theme.colors.tertiary};
			z-index: -2;
		}

		&:hover {
			&:before,
			&:after {
				visibility: visible;
			}

			${glitch(glitchArgs)}
		}
	`,
)
