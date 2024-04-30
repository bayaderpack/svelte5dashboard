export async function load({ cookies }) {
    const accessJWT = cookies.get('accessJWT');
    const refreshJWT = cookies.get('refreshJWT');
    // console.log(accessToken)
    return { accessJWT, refreshJWT };
}