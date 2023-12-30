export const useDeviceStore = defineStore('deviceStore', () => {
    const breakpoints = useBreakpoints({
        tablet: 768,
        laptop: 1024,
        desktop: 1280,
    })
    const isMobile = breakpoints.smallerOrEqual('tablet')

    return {isMobile}
})

export const useDarkStore = defineStore('darkStore',()=>{
    const isDark = useDark({
        valueDark: 'dark',
        valueLight: 'light',
    })
    const toggleDark = useToggle(isDark)

    return {isDark,toggleDark}
})

export const useI18nStore = defineStore('i18Store',()=>{
    const languageOptions = [
        {value: 'en',label: 'english'},
        {value: 'zh-tw',label: 'chineseTradition'},
    ]
    const { locale,setLocale } = useI18n()
    const localePath = useLocalePath()

    return {locale,setLocale,localePath,languageOptions}
})

type tgMenuType = "settings"|"navigator"|""
export const useHeaderStore = defineStore('headerStore',()=>{
    const isShowMenu = ref(false)
    const triggerMenu = ref<tgMenuType>('')
    
    function toggleShowMenu(isToggle:'toggle'|'isShow',isShow?:boolean) {
        if(isToggle === 'toggle') {
            isShowMenu.value = !isShowMenu.value
        } else{
            isShowMenu.value = isShow!
        }
    }

    function setTriggerMenu(newTrigger: tgMenuType) {
        triggerMenu.value = newTrigger
    }

    return { isShowMenu,toggleShowMenu,triggerMenu,setTriggerMenu }
})