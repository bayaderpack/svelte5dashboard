import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { slug }, locals }) => {
	// throw new Error('test')
	return {
		lang: locals.paraglide.lang,
		slug,
	}
}
