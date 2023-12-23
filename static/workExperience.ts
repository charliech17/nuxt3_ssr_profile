import colors from "@/assets/css/global-style/color.module.scss"

export const workExpData = [
    {
        startTime: '2023/09/10',
        status: 'stillWorking',
        colorActive: colors.$primary,
        learningList: "codingBarLearning",
        illustrateIcon: getImgSrc("/index/teacher.png"),
        company: {
            nameId: "companyCodingBar",
            img: getImgSrc("/index/cdBar.png"),
            role: "codingBarRole"
        }
    },
    {
        startTime: '2022/02/15',
        status: 'stillWorking', 
        colorActive: colors.$primary, 
        learningList: "pollexWorkLearning", 
        illustrateIcon: getImgSrc("/index/web-development.png"),
        company: { 
            nameId: "companyPollex", 
            img: getImgSrc("/index/pollex.png"), 
            role: "pollexRole" 
        }
    },
    { 
        startTime: '2020/09/10', 
        status: '', 
        colorActive: '', 
        learningList: 'chruchLearning', 
        illustrateIcon: getImgSrc("/index/tree-of-life.png"),
        company: { 
            nameId: "chruchChanghua", 
            img: "", 
            role: "chruchRole" 
        } 
    },
]