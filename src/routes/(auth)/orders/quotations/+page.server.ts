export const load = async ({fetch}) => {
	// const form = await superValidate(zod(schema));

	// Always return { form } in load functions

    const raw = await fetch("http://localhost:8080/api/admin")
    const data = await raw.json()
	const rawquotation = await fetch("http://localhost:8080/api/quotation?status=2&page=0&per-page=500")
    const dataquotation = await rawquotation.json()
	return { data,dataquotation };
};