import {
    SUCCESSCODE
} from "@/constant/httpcode"
import {
    onMounted,
    ref,
} from "vue"
import {
    getVideoDetailApi,
    getVideoUrlApi
} from "@/api/course/video"
import {
    getRouterInfo
} from "@/utils/utils"
import {
    Tabs,
    Tab,
    Toast
} from 'vant';
import Poster from '@/components/Poster.vue'
export default {
    components: {
        [Tabs.name]: Tabs,
        [Tab.name]: Tab,
        [Toast.name]: Toast,
        Poster
    },
    setup() {
        onMounted(() => {
            autoFix()
            initData()

        })
        // 页面初始化值
        let courseId = ref('')
        let userId = ref('')
        let course = ref({})
        //宽高度自适应
        let width = ref(0)
        let height = ref(0)
        let scroll_height = ref(0)
        //播放器
        let player = ref(null)
        //视频播放链接地址
        let playUrl = ref('')
        let playing = ref(false)
        let lastPlayTimeShow = ref(false)
        let lastPlayTime = ref(0)
        let watchPerson = ref(0)
        //页面样式变化值
        let active = ref(0)
        let more = ref(false)
        let posterShow = ref(false)
        /**
         * 初始化数据
         */
        let initData = () => {
            const {
                id,
                uid
            } = getRouterInfo()
            courseId = id
            userId = uid;
            getVideoDetail(courseId)
        }
        /**
         * 宽高度自适应
         */
        let autoFix = () => {
            width.value = document.documentElement.clientWidth > 480 ? 480 : document.documentElement.clientWidth
            height.value = width.value * 9 / 16
            scroll_height.value = document.documentElement.clientHeight - 100 - height.value
        }
        /**
         * 获取视频详情
         */
        let getVideoDetail = async (id) => {
            let data = await getVideoDetailApi(id)
            if (data.code === SUCCESSCODE) {
                course.value = data.data
                getVideoUrl(data.data.fileUrl)
            }
        }
        /**
         * 获取视频防盗链
         */
        let getVideoUrl = async (url) => {
            let data = await getVideoUrlApi(url)
            if (data.code === SUCCESSCODE) {
                playUrl = data.data
                initPlay()
            }
        }
        /**
         * 初始化播放器
         */
        let initPlay = () => {
            let options = {
                "width": width.value,
                "height": height.value,
                bigPlayButton: false
            }
            player = TCPlayer('player-container-id', options)
            player.src(playUrl);
        }
        /**
         * 播放视频
         */
        let playVideo = () => {
            playing.value = true
            player.play()
        }

        /**
         * 去分享
         */
        let goShare = () => {
            posterShow.value = true
        }
        /**
         * 改变标题
         */
        let changeTitle = () => {
            course.value.name = 'aaaaaaaa'
        }
        return {
            player,
            courseId,
            userId,
            course,
            width,
            height,
            scroll_height,
            playing,
            lastPlayTimeShow,
            lastPlayTime,
            watchPerson,
            active,
            more,
            posterShow,
            playVideo,
            goShare,
            changeTitle
        }
    }
}