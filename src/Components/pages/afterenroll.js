import React from "react";
import Image1 from "../../assets/images/logo-icon.png";
import author3 from "../../assets/images/author/author-03.jpg";
import author6 from "../../assets/images/author/author-06.jpg";
import author7 from "../../assets/images/author/author-07.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Advertise from "../advertise";
import "../../Styles/plugins/icofont.min.css";
import "../../Styles/plugins/animate.min.css";
import "../../Styles/plugins/swiper-bundle.min.css";
import "../../Styles/plugins/magnific-popup.css";
import "../../Styles/plugins/nice-select.css";
import "../../Styles/plugins/apexcharts.css";
import "../../Styles/plugins/jqvmap.min.css";
import "../../Styles/Contact.css";
import AdminHeader from "../AdminHeader";
function Afterenroll() {
return (
<>
<div>
<AdminHeader />
</div>
{/* <!-- Courses Enroll Start --> */}
<div class="section">
{/* <!-- Courses Enroll Wrapper Start --> */}
<div class="courses-enroll-wrapper">
{/* <!-- Courses Video Player Start --> */}
<div class="courses-video-player">
{/* <!-- Courses Video Container Start --> */}
<div class="vidcontainer">
<video id="myvid"></video>
<div class="video-play-bar">
<div class="topControl">
<div class="progress">
<span class="bufferBar"></span>
<span class="timeBar"></span>
</div>
<div class="time">
<span class="current"></span> /
<span class="duration"></span>
</div>
</div>
<div class="controllers">
<div class="controllers-left">
<button class="prevvid disabled" title="Previous video"><i
class="icofont-ui-previous"></i></button>
<button class="btnPlay" title="Play/Pause video"></button>
<button class="nextvid" title="Next video"><i class="icofont-ui-next"></i></button>
<button class="sound sound2" title="Mute/Unmute sound"></button>
<div class="volume" title="Set volume">
<span class="volumeBar"></span>
</div>
</div>
<div class="controllers-right">
<button class="btnspeed" title="Video speed"><i class="fa fa-gear"></i></button>
<ul class="speedcnt">
<li class="spdx50">1.5</li>
<li class="spdx25">1.25</li>
<li class="spdx1 selected">Normal</li>
<li class="spdx050">0.5</li>
</ul>
<button class="btnFS" title="full screen"></button>
</div>
</div>
</div>
<div class="bigplay" title="play the video">
<i class="fa fa-play"></i>
</div>
<div class="loading">
<div class="spinner-border spinner">
<span class="visually-hidden">Loading...</span>
</div>
</div>
</div>
{/* <!-- Courses Video Container End --> */}
{/* <!-- Courses Enroll Content Start --> */}
<div class="courses-enroll-content">
{/* <!-- Courses Enroll Title Start --> */}
<div class="courses-enroll-title">
<h2 class="title">Finance & Investment Series: Learn to Budget and Calculate Your Net Worth.
</h2>
<p><i class="icofont-eye-alt"></i> <span>8,350</span> Students are watching</p>
</div>
{/* <!-- Courses Enroll Title End --> */}
{/* <!-- Courses Enroll Tab Start --> */}
<div class="courses-enroll-tab">
<div class="enroll-tab-menu">
<ul class="nav">
<li><button class="active" data-bs-toggle="tab"
data-bs-target="#tab1">Overview</button></li>
<li><button data-bs-toggle="tab" data-bs-target="#tab2">Description</button></li>
<li><button data-bs-toggle="tab" data-bs-target="#tab3">Certificates</button></li>
<li><button data-bs-toggle="tab" data-bs-target="#tab4">Instructor</button></li>
</ul>
</div>
<div class="enroll-share">
<a href="#"><i class="icofont-share-alt"></i> Share</a>
</div>
</div>
{/* <!-- Courses Enroll Tab End --> */}
{/* <!-- Courses Enroll Tab Content Start --> */}
<div class="courses-enroll-tab-content">
<div class="tab-content">
<div class="tab-pane fade show active" id="tab1">
{/* <!-- Overview Start --> */}
<div class="overview">
<div class="row">
<div class="col-lg-4">
<div class="enroll-tab-title">
<h3 class="title">Course Details</h3>
</div>
</div>
<div class="col-lg-8">
<div class="enroll-tab-content">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been industry's standard dummy text
ever since the 1500s when andom unknown printer took a galley of
type scrambled it to make a type specimen book. It has survived
not’s only and five centuries, but also the lea into electronic
typesetting, remaining priting essentially unchanged. It was
popularsed in the 1960 with containing Lorem Ipsum passages
desktop publishing software.</p>
<table class="table">
<tbody>
<tr>
<th>Instructor <span>:</span></th>
<td>Pamela Foster</td>
</tr>
<tr>
<th>Duration <span>:</span></th>
<td>08 hr 15 mins</td>
</tr>
<tr>
<th>Lectures <span>:</span></th>
<td>2,16</td>
</tr>
<tr>
<th>Level <span>:</span></th>
<td>Secondary</td>
</tr>
<tr>
<th>Language <span>:</span></th>
<td>English</td>
</tr>
<tr>
<th>Caption’s <span>:</span></th>
<td>Yes</td>
</tr>
</tbody>
</table>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been industry's standard dummy text
ever since the 1500s when andom unknown printer took a galley of
type scrambled it to make a type specimen book.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been industry's standard dummy text
ever since the 1500s when andom unknown printer took a galley of
type scrambled it to make a type specimen book.</p>
</div>
</div>
</div>
</div>
{/* <!-- Overview End --> */}
</div>
<div class="tab-pane fade" id="tab2">
{/* <!-- Description Start --> */}
<div class="description">
<div class="row">
<div class="col-lg-4">
<div class="enroll-tab-title">
<h3 class="title">Description</h3>
</div>
</div>
<div class="col-lg-8">
<div class="enroll-tab-content">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been industry's standard dummy text
ever since the 1500s when andom unknown printer took a galley of
type scrambled it to make a type specimen book. It has survived
not’s only and five centuries, but also the lea into electronic
typesetting, remaining priting essentially unchanged. It was
popularsed in the 1960 with containing Lorem Ipsum passages
desktop publishing software.</p>
<p class="text">“Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has industry's standard
dummy text ever since the 1500s when andom unknown printer took
a galley scrambled it to make a type specimen book.”</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been industry's standard dummy text
ever since the 1500s when andom unknown printer took a galley of
type scrambled it to make a type specimen book. It has survived
not’s only and five centuries, but also the lea into electronic
typesetting, remaining priting essentially unchanged. It was
popularsed in the 1960 with containing Lorem Ipsum passages
desktop publishing software.</p>
</div>
</div>
</div>
</div>
{/* <!-- Description End --> */}
</div>
<div class="tab-pane fade" id="tab3">
{/* <!-- Certificates Start --> */}
<div class="certificates">
<div class="row">
<div class="col-lg-4">
<div class="enroll-tab-title">
<h3 class="title">EduLe Certificates</h3>
</div>
</div>
<div class="col-lg-8">
<div class="enroll-tab-content">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been industry's standard dummy text
ever since the 1500s when andom unknown printer took a galley of
type scrambled it to make a type specimen book. It has survived
not’s only and five centuries, but also the lea into electronic
typesetting, remaining priting essentially unchanged. It was
popularsed in the 1960 with containing Lorem Ipsum passages
desktop publishing software.</p>
</div>
</div>
</div>
</div>
{/* <!-- Certificates End --> */}
</div>
<div class="tab-pane fade" id="tab4">
{/* <!-- Instructor Start --> */}
<div class="instructor">
<div class="row">
<div class="col-lg-4">
<div class="enroll-tab-title">
<h3 class="title">Instructor</h3>
</div>
</div>
<div class="col-lg-8">
<div class="enroll-tab-content">
{/* <!-- Single Instructor Start --> */}
<div class="single-instructor">
<div class="review-author">
<div class="author-thumb">
<img src="assets/images/author/author-06.jpg"
alt="Author"/>
</div>
<div class="author-content">
<h4 class="name">Sara Alexander</h4>
<span class="designation">Product Designer, USA</span>
<span class="rating-star">
<span class="rating-bar" style={{width: '80%'}}></span>
</span>
</div>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been industry's
standard dummy text ever since the 1500s when andom unknown
printer took a galley of type scrambled it to make a type
specimen book.</p>
</div>
{/* <!-- Single Instructor End --> */}
{/* <!-- Single Instructor Start --> */}
<div class="single-instructor">
<div class="review-author">
<div class="author-thumb">
<img src="assets/images/author/author-07.jpg"
alt="Author"/>
</div>
<div class="author-content">
<h4 class="name">Karol Bachman</h4>
<span class="designation">Product Designer, USA</span>
<span class="rating-star">
<span class="rating-bar" style={{width: '80%'}}></span>
</span>
</div>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been industry's
standard dummy text ever since the 1500s when andom unknown
printer took a galley of type scrambled it to make a type
specimen book.</p>
</div>
{/* <!-- Single Instructor End --> */}
{/* <!-- Single Instructor Start --> */}
<div class="single-instructor">
<div class="review-author">
<div class="author-thumb">
<img src="assets/images/author/author-03.jpg"
alt="Author"/>
</div>
<div class="author-content">
<h4 class="name">Gertude Culbertson</h4>
<span class="designation">Product Designer, USA</span>
<span class="rating-star">
<span class="rating-bar" style={{width: '80%'}}></span>
</span>
</div>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been industry's
standard dummy text ever since the 1500s when andom unknown
printer took a galley of type scrambled it to make a type
specimen book.</p>
</div>
{/* <!-- Single Instructor End --> */}
</div>
</div>
</div>
</div>
{/* <!-- Instructor End --> */}
</div>
</div>
</div>
{/* <!-- Courses Enroll Tab Content End --> */}
</div>
{/* <!-- Courses Enroll Content End --> */}
</div>
{/* <!-- Courses Video Player End --> */}
{/* <!-- Courses Video Playlist Start --> */}
<div class="courses-video-playlist">
<div class="playlist-title">
<h3 class="title">Course Content</h3>
<span>80 Lessons (8h 15m)</span>
</div>
{/* <!-- Video Playlist Start  --> */}
<div class="video-playlist">
<div class="accordion" id="videoPlaylist">
{/* <!-- Accordion Items Start  --> */}
<div class="accordion-item">
<button class="collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#collapseOne">
<p>Lesson-01: Mindful Growth & the Creative Journey, Find Your Spark & Map Your
Future</p>
<span class="total-duration">01 hour 48 minutes</span>
</button>
<div id="collapseOne" class="accordion-collapse collapse"
data-bs-parent="#videoPlaylist">
<nav class="vids">
<a class="link active"
href="https://player.vimeo.com/external/215175080.hd.mp4?s=5b17787857fd95646e67ad0f666ea69388cb703c&amp;profile_id=119">
<p>01. The Complete Medicine Masterclass</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="https://player.vimeo.com/external/207590826.hd.mp4?s=6a918d074abf8f3add7858018855524d384f6934&amp;profile_id=119">
<p>02. Standard dummy text ever since the</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="https://player.vimeo.com/external/207590786.hd.mp4?s=bcd80c5d2f6bf1bbad3b1a670ef93861e72f9683&amp;profile_id=119">
<p>03. Printer took a galley of type and scrambled</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="https://player.vimeo.com/external/207590615.hd.mp4?s=c4bce1872859889c86b688c26c60ed2b5734de28&amp;profile_id=119">
<p>04. It to make a type specimen book & break</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4">
<p>05. Survived not only five centuries also the leap</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test7_voiceclip_mp4_480x360.mp4">
<p>06. Into typesettingremaining essentially</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test8_voiceclip_mp4_480x320.mp4">
<p>07. Unchanged. It was popularised in the 1960s</p>
<span class="total-duration">08 minutes</span>
</a>
<a class="link"
href="http://download.wavetlan.com/SVV/Media/HTTP/MP4/ConvertedFiles/Media-Convert/Unsupported/dw11222.mp4">
<p>08. The release of Letraset sheets containing</p>
<span class="total-duration">08 minutes</span>
</a>
</nav>
</div>
</div>
{/* <!-- Accordion Items End  --> */}
</div>
</div>
{/* <!-- Video Playlist End  --> */}
</div>
{/* <!-- Courses Video Playlist End --> */}
</div>
{/* <!-- Courses Enroll Wrapper End --> */}
</div>
{/* <!-- Courses Enroll End --> */}
<div>
<Advertise />
</div>
<div>
<Footer />
</div>
</>
);
}
export default Afterenroll;
