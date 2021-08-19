import axios from "axios";


export async function get(query, count) {
    const infoURL = `https://swapi.dev/api/${query}/${count}/`

    return await axios.get(infoURL).then((res) => {
        return res.data
    }).catch(e => {
        return (e.message)
    })
}

export async function getImg(query, count) {

    query = query === 'people' ? 'characters' : query
    const img = `https://starwars-visualguide.com/assets/img/${query}/${count}.jpg`
    const errorImg = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'

    return await axios.get(img, {responseType: 'arraybuffer'})
        .then(res => Buffer.from(res.data, 'binary').toString('base64'))
        .catch(() => {
            return axios.get(errorImg, {responseType: 'arraybuffer'})
                .then(res => Buffer.from(res.data, 'binary').toString('base64'))
        })

}