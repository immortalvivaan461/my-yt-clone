// written by Vivaan
import kalank from './images/kalank.jpg'
import avtar from './images/avtar.png'
import { Link } from 'react-router-dom'
import {GoHomeFill} from 'react-icons/go'
import Header from './Header'
import videosJson from './useful-data-main/videos.json'
import {BiSolidVideos,BiSolidShoppingBag,BiPlusCircle} from 'react-icons/bi'
import {MdSubscriptions,MdVideoLibrary,MdPodcasts} from 'react-icons/md'
import {FaClockRotateLeft,FaRegNewspaper} from 'react-icons/fa6'
import {RiVideoLine} from 'react-icons/ri'
function VideoGrid(props){
    let myVideo = props.myVideo;
    return (
        <div class="thumbnail">
            <div class="video">
            <Link to={`/video?id=${myVideo.id}`}><img class="thumbnail-home" src={myVideo.thumbnail.url} /></Link>
            </div>
            <div class="video-title">
                <div>
                        <img src={avtar} height={'30px'} width={'30px'}></img>
                    
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">
                        {myVideo.title}
                    </h4>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.channelName}
                    </p>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.views} views . {myVideo.uploadedAt} ago</p>
                </div>
            </div>
        </div>
    );
}

function Home(){
    // let videos = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,]

    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill/> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <BiSolidVideos /> <span class="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <MdSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr className='breakline' />
                    <button class="yt-side-button-1"><b>You  > </b></button>
                    <button class="yt-side-button">
                        <FaClockRotateLeft /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <RiVideoLine /> <span class="side-button-label">Your Videos</span>
                    </button>
                    <hr className='breakline'/>
                    <button class="yt-side-button-2"><b>Subscriptions ></b></button>
                    <button class="yt-side-button">
                        <img className='ch-logo' src='https://yt3.ggpht.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s88-c-k-c0x00ffffff-no-rj' alt='logo' /> <span class="side-button-label">Zee Music</span>
                    </button>
                    <button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">T-series</span>
                    </button>
                    <button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s88-c-k-c0x00ffffff-no-rj' alt='logo'/><span class="side-button-label">CarryMinati</span>
                    </button>
                    <button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/OTaArmKlppBK0-gnyflLP5J3TQuqDKcVdQnF1hCBIjKYManjcXUYlSmbb6Fw0yqPWOMZ6NIW=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">Arijit Singh</span>
                    </button>
                    <button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/Y3Xd5a92Olf_5x5igDk8MzzqyKChkP3jKoV6-Iux8e7zChGDMSsrLIt95T8GZd--0FTqQE9KfQ=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">Armaan Malik</span>
                    </button><button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/w5--rYE3ImfRC_sOTt9YAm0YnBBVtg4SLnamo0t2Ww_sVlMjhz623EQKLn44zurd_kArHfGkskM=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">HoneySingh</span>
                    </button><button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/s93Qxv4MTrqWYRMPh603e0rjOeyLgI2j3SmJ0GZbl_mV1oiVdFTLdpCBz8VjT9YAnHNED2H1Aw=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">KanikaKapoor</span>
                    </button>
                    <button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">DhurvRathee</span>
                    </button><button class="yt-side-button">
                    <img className='ch-logo' src='https://yt3.ggpht.com/ytc/APkrFKYuSw_UwxtuE0lTvA2--cixKCKbsKKQXxqmTRVwsQ=s88-c-k-c0x00ffffff-no-rj' alt='logo' />  <span class="side-button-label">IndianHacker</span>
                    </button>

                </div>
                <div class="main-right">
                    {videosJson.map((video) => {
                        return <VideoGrid myVideo={video}/>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home;