import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken'
import { i18n } from '$lib/i18n'



// Define outside the load function so the adapter can be cached
const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	default: async ({ request, cookies, locals }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		//Form valid send request to backend and try to login
		const responseRaw = await fetch('http://localhost:8080/api/v1/login', {
			method: 'post',
			credentials: 'include',
			body: JSON.stringify(form.data)
		});


		//Check if response is successful if fail return error
		if (!responseRaw.ok) {
			return fail(400);
		}

		//Split refresh and access cookie if all ok parse and setcookie 
		const cakes = responseRaw.headers.get('set-cookie')?.split(', ');
		if (Array.isArray(cakes) && cakes.length > 0) {
			const accessJwt: { [key: string]: any } = parse(cakes[0], {});
			const refreshJwt: { [key: string]: any } = parse(cakes[1], {});
			setAccessTokenCookie(cookies, accessJwt)
			setRefreshTokenCookie(cookies, refreshJwt)
			const email = parseJwt(accessJwt["accessJWT"]).email
			locals.userID = email
			redirect(302, i18n.resolveRoute("/"));
		} else {
			// Handle the case when cakes array is empty or does not have an element at index 0
			console.error('Server error');
		}

	}
}

function parseJwt (token: string) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

function parse(str: String, options: any) {
	if (typeof str !== 'string') {
		throw new TypeError('argument str must be a string');
	}

	var obj: any = {};
	var opt = options || {};
	var dec = opt.decode;

	var index = 0;
	while (index < str.length) {
		var eqIdx = str.indexOf('=', index);

		// no more cookie pairs
		if (eqIdx === -1) {
			break;
		}

		var endIdx = str.indexOf(';', index);

		if (endIdx === -1) {
			endIdx = str.length;
		} else if (endIdx < eqIdx) {
			// backtrack on prior semicolon
			index = str.lastIndexOf(';', eqIdx - 1) + 1;
			continue;
		}

		var key = str.slice(index, eqIdx).trim();

		// only assign once
		if (undefined === obj[key]) {
			var val = str.slice(eqIdx + 1, endIdx).trim();

			// quoted values
			if (val.charCodeAt(0) === 0x22) {
				val = val.slice(1, -1);
			}

			obj[key] = tryDecode(val, dec);
		}

		index = endIdx + 1;
	}

	return obj;
}
type DecodeFunction = (str: string) => any;
function tryDecode(str: string, decode: DecodeFunction) {
	try {
		return decode(str);
	} catch (e) {
		return str;
	}
}


//Set access cookies
function setAccessTokenCookie(cookies: any, accessToken: any) {
	const { exp } = jwt.decode(accessToken['accessJWT']) as JwtPayload;
	if(exp !== undefined) {
	cookies.set('accessJWT', accessToken['accessJWT'], {
		httpOnly: true,
		path: accessToken['Path'],
		secure: process.env.NODE_ENV === 'production',
		sameSite: accessToken['SameSite'],
		expires: new Date(exp * 1000)
	});
}
}
//Set refresh cookies
function setRefreshTokenCookie(cookies:any, refreshToken:any ) {
	const { exp } = jwt.decode(refreshToken['refreshJWT']) as JwtPayload;
	if(exp !== undefined) {
	cookies.set('refreshJWT', refreshToken['refreshJWT'], {
		httpOnly: true,
		path: refreshToken['Path'],
		secure: process.env.NODE_ENV === 'production',
		sameSite: refreshToken['SameSite'],
		expires: new Date(exp * 1000)
	});
}
}
