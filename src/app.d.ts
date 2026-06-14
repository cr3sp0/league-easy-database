// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// TODO: Classi utili generalmente, ma potrebbero essere spostati se
	// più sensato logicamente.
	export type Champion = {
		Name: string
	}
	export type Rune = {
		Name: String
		Grade: Number
	}
	export type Item = {
		Name: String
		Cost: Number
	}
	export type Build = {
		Champion: Champion
		Runes: Rune
		Objects: Object
	}
}

export {};
