const fetch = require('node-fetch');

class MjmlService {
    static ping = async () => {
        // const MJML_IP = 'http://' + process.env.MJML_IP as RequestInfo
        const MJML_IP = 'http://' + process.env.MJML_IP + ':3000' as RequestInfo
        try {
            const responseFromService = await fetch(MJML_IP).then((r: Response) => r.json())
            return responseFromService
        }
        catch (error) {
            console.error(error)
            return error
        }
    }
}



export default MjmlService