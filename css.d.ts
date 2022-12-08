import type * as CSS from 'csstype'

declare module 'csstype' {
	interface Properties {
		// Spacer props
		'--width': CSS.Property.Width
		'--height': CSS.Property.Height
	}
}
