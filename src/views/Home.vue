<template>
	<Navbar></Navbar>
	<div class="home">
		<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="../assets/img/slide1.jpg" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
					<img src="../assets/img/slide2.jpg" class="d-block w-100" alt="...">
				</div>
				<div class="carousel-item">
					<img src="../assets/img/slide3.jpg" class="d-block w-100" alt="...">
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
		<!-- <div class="img-header">
			<img src="../assets/img/bg-header.jpg" class="overlay-img" alt="...">
		</div> -->

		<div class="about" id="about">
			<div class="container">
				<div class="row row-about">
					<div class="col-lg-6">
						<h1 class="title">{{about.judul}}</h1>
						<p class="desc" v-html="about.deskripsi">
						</p>
					</div>
					<div class="col-lg-6">
						<figure>
							<img :src="imageAbout+about.image" class="about-img" alt="">
						</figure>
					</div>
					
				</div>
			</div>
		</div>

		<!-- <div class="container">
			<hr>
		</div> -->
		
		<!-- <div class="tagline text-center">
			<h5 class="title">Your Dream Property in Ubud</h5>
			<h1 class="tag-title">Invest and Relax in Paredise</h1>
		</div> -->

		<div class="banner">
			<figure class="desktop">
				<img src="../assets/img/banner_new.svg" class="banner_d" alt="">
			</figure>
			<figure class="mobile">
				<img src="../assets/img/banner_m_new.svg" class="banner_m" alt="">
			</figure>
		</div>

	</div>
	<Footer></Footer>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
	name: 'Home',
	components: {
		Navbar,
		Footer
	},
	setup(){
		const about = ref([])

		onMounted(() => {
			window.scrollTo(0,0)
			
			axios.get('getAbout')
			.then((result) => {
				console.log("About : ", result.data[0])
				about.value = result.data[0]
			}).catch((err) => {
				console.log(err.response)
			})
		})

		return{
			about,
		}
	}
}
</script>

<style scoped>
	.home .carousel .carousel-inner .carousel-item{
		height: 500px;
		vertical-align: middle;
	}
	.home .carousel .carousel-inner .carousel-item img{
		background-position-y: center;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.home .img-header{
		width: 100%;
		height: 500px;
		background: rgba(0, 0, 0, 0.5);
	}
	.home .img-header .overlay-img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
		z-index: -1;
		background-position: center;
		/* transform: translateY(-50%); */
		/* background-size: cover; */
	}

	.home .about{
		margin: 50px 0;
	}
	.home .about .row-about{
		align-items: center;
	}
	.home .about .title{
		text-transform: uppercase;
		margin-bottom: 20px;
		margin-top: 50px;
	}
	.home .about figure{
		width: 80%;
		display: block;
		margin: 0 auto;
	}
	.home .about figure img{
		width: 100%;
	}

	.home hr{
		height: 1px;
		background: var(--grey);
	}

	.home .tagline{
		padding: 50px;
	}
	.home .tagline .title{
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 30px;
	}
	.home .tagline .tag-title{
		font-family: 'Bellarina', sans-serif;
		font-weight: 400;
		font-size: 40pt;
	}

	.home .banner figure .banner_d{
		width: 100%;
	}
	
	@media (max-width: 767.98px){
		.home .about{
			margin: 10px 0 50px;
		}
		.home .banner figure .banner_m{
			width: 100%;
		}
		.home .carousel .carousel-inner .carousel-item{
			height: 400px;
			width: 100%;
		}
		.home .carousel .carousel-inner .carousel-item img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.home .tagline{
            padding: 20px;
        }
        .home .tagline .tag-title{
            font-weight: 400;
            font-size: 30pt;
        }
	}
</style>