export async function getApi (URL) {

    try {
        const response = await fetch(
            `https://api.github.com/${URL}`
        );
        const responseJson = await response.json();
        return responseJson
    }   catch (err) {
        console.error(err);
    }

}