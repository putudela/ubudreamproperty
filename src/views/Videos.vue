<template>
    <Navbarw></Navbarw>
    <div class="videos">
        <div class="container">
            <h3 class="title">Our Videos</h3>

            <div class="row">
                <div class="col-lg-4" v-for="video in videos" :key="video.id">
                    <div class="card">
                        <div class="card-header">
                            <video :src="'https://drive.google.com/uc?export=view&id='+video.link+'#t=0.7'" preload="metadata" controls>
                            </video>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">{{video.judul}}</h3>
                            <p class="card-text" v-html="video.deskripsi ? video.deskripsi : '-'"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbarw from '../components/Navbarw.vue'
import Footer from '../components/Footer.vue'

import axios from 'axios'
import { ref, onMounted } from "vue";

export default {
    name: 'videos',
    components: {
        Navbarw,
        Footer
    },
    setup(){
        const videos = ref([])

        onMounted(() => {
            window.scrollTo(0,0)

			axios.get('getVideos')
			.then((result) => {
                console.log('Videos: ',result.data)
				videos.value = result.data
			}).catch((err) => {
				console.log(err.response)
			})
        })

        return{
            videos
        }
    }
}
</script>

<style scoped>
.videos{
    margin-top: 160px;
}
.video .title{
    margin-bottom: 30px;
}
.videos .card .card-header{
    background: white;
    padding: 0;
    margin: 0;
}
.videos .card .card-header video{
    width: 100%;
    height: auto;
}
</style>