export function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function getInnerWidth() {
    return window.innerWidth
}

export function getImgSrc(staticPath:string) {
    return new URL(staticPath,import.meta.url).href
}

export function getI18nTranlate(translateId: string) {
    return useNuxtApp().$i18n.t(translateId)
}