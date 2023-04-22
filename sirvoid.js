
const axios = require("axios");
const errmsg = "Do you need help? You can get help by visiting https://github.com/SirGorStudio/void.nsfw/issues"
async function hentai() {
return await axios.get('https://nekobot.xyz/api/image?type=hentai').then(async a => await a.data.message).catch(err => console.error(errmsg + err))//eror verdirmek icindi o 
} 
async function pussy() {
return await axios.get('https://nekobot.xyz/api/image?type=pussy').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function anal() {
return await axios.get('https://nekobot.xyz/api/image?type=anal').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function hanal() {
return await axios.get('https://nekobot.xyz/api/image?type=hanal').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function thigh() {
return await axios.get('https://nekobot.xyz/api/image?type=thigh').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function boobs() {
return await axios.get('https://nekobot.xyz/api/image?type=boobs').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function ass() {
return await axios.get('https://nekobot.xyz/api/image?type=ass').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function kanna() {
return await axios.get('https://nekobot.xyz/api/image?type=kanna').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function four() {
return await axios.get('https://nekobot.xyz/api/image?type=4k').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
} 
async function hthigh() {
return await axios.get('https://nekobot.xyz/api/image?type=hthigh').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
} 
async function tentacle() {
return await axios.get('https://nekobot.xyz/api/image?type=tentacle').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function hboobs() {
return await axios.get('https://nekobot.xyz/api/image?type=hboobs').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function holo() {
return await axios.get('https://nekobot.xyz/api/image?type=holo').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function hass() {
return await axios.get('https://nekobot.xyz/api/image?type=hass').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function pgif() {
return await axios.get('https://nekobot.xyz/api/image?type=pgif').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function yaoi() {
return await axios.get('https://nekobot.xyz/api/image?type=yaoi').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function neko() {
return await axios.get('https://nekobot.xyz/api/image?type=neko').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function hneko() {
return await axios.get('https://nekobot.xyz/api/image?type=hneko').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function hkitsune() {
return await axios.get('https://nekobot.xyz/api/image?type=hkitsune').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
} 
async function kemonomimi() {
return await axios.get('https://nekobot.xyz/api/image?type=kemonomimi').then(async a => await a.data.message).catch(err => console.error(errmsg + err))
}
async function ping() {
let old = Date.now()
let hm = await require('axios').get('https://nekobot.xyz/api/image?type=hentai')
return await Date.now() - old
}
module.exports = {hentai,ass,pussy,anal,kanna,four,hanal,boobs,thigh,tentacle,hboobs,holo,hass,pgif,hthigh, yaoi, hneko, neko, hkitsune, kemonomimi, ping}