// product_category

export const load = async ({fetch}) => {
	// const form = await superValidate(zod(schema));

	// Always return { form } in load functions

    const raw = await fetch("http://localhost:8080/api/product/product-taxonomy?q=product_suitability")
    const data = await raw.json()
	return { data };
};