import { getImgSrc } from "@/utils/baseUtils";

export const indexSEOMeta = {
    title: 'Josh個人網站-首頁',
    ogTitle: 'Josh個人網站-首頁',
    description: '歡迎來到我的網站',
    ogDescription: '歡迎來到我的網站',
    ogImage: getOgImgPath('/index/rocket.png'),
    ogImageWidth: 500,
    ogImageHeight: 500
}

export const profileSEOMeta = {
    title: 'Josh個人網站-作品集',
    ogTitle: 'Josh個人網站-作品集',
    description: '我的作品集',
    ogDescription: '我的作品集',
    ogImage: getOgImgPath('/index/cool.png'),
    ogImageWidth: 500,
    ogImageHeight: 500
}

function getOgImgPath(imgPath: string) {
    const protocol = useRequestURL().protocol;
    const host = useRequestURL().host;
    return protocol  + "//" + host + imgPath
}