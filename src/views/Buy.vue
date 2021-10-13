<template>
	<Navbarw></Navbarw>
	<div class="Buy">
		<div class="container">
			<div class="tagline text-center">
				<h5 class="title">Your Dream Property in Ubud</h5>
				<h1 class="tag-title">Invest and Relax in Paredise</h1>
			</div>

			<div class="listing">
				<h3 class="title">For Sale</h3>

				<table id="listing" class="t-listing">
					<thead>
						<tr>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<!-- Listing 1 -->
						<tr v-for="listing in listingFilter" :key="listing.id">
							<!-- <td v-if="listing.kategori.nama_kategori == 'For Sale'"> -->
							<td>
								<div class="list-card">
									<div class="card">
										<div class="category">
											<h6 v-if="listing.listing_status == 'Freehold'">{{listing.listing_status}} / Hak Milik</h6>
											<h6 v-else>{{listing.listing_status}} / Hak Sewa</h6>
										</div>
										<figure>
											<div class="bg"></div>
											<!-- <img :src="imageUrl+listingImage" class="list-img"> -->
											<splide :options="options">
												<splide-slide v-for="(image, index) in formatImage(listing.images)" :key="index">
													<img :src="imageUrl+image" class="d-block w-100">
												</splide-slide>
											</splide>
											<!-- <div :id="listing.id" class="carousel slide" data-bs-ride="carousel">
												<div class="carousel-inner">
													<div class="carousel-item" v-for="(image, index) in formatImage(listing.images)" :key="index" :class="{'active': index == 0}">
														<img :src="imageUrl+image" class="d-block w-100">
													</div>
												</div>
												<button class="carousel-control-prev" type="button" :data-bs-target="'#'+listing.id" data-bs-slide="prev">
													<span class="carousel-control-prev-icon" aria-hidden="true"></span>
													<span class="visually-hidden">Previous</span>
												</button>
												<button class="carousel-control-next" type="button" :data-bs-target="'#'+listing.id" data-bs-slide="next">
													<span class="carousel-control-next-icon" aria-hidden="true"></span>
													<span class="visually-hidden">Next</span>
												</button>
											</div> -->
											<h6 class="price">Rp. {{formatPrice(listing.price)}}</h6>
										</figure>
										<div class="card-body">
											<router-link :to="'/buy/detail/'+listing.id">
												<h6 class="card-title">{{listing.title.substring(0,35)+'...'}}</h6>
												<!-- <p class="text_info">Leasehold 20 Years</p> -->
												<!-- <figure v-for="item in listingImage" :key="item.id">
													<img :src="imageUrl+item" alt="">
												</figure> -->
												
												<p class="loc">
													<svg xmlns="http://www.w3.org/2000/svg" width="8" height="10.667" viewBox="0 0 8 10.667">
														<path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M3.589,10.451C.562,6.063,0,5.613,0,4A4,4,0,0,1,8,4c0,1.613-.562,2.063-3.589,6.451a.5.5,0,0,1-.822,0ZM4,5.667A1.667,1.667,0,1,0,2.333,4,1.667,1.667,0,0,0,4,5.667Z" fill="#7a7a7a"/>
													</svg>
													{{listing.location}}
												</p>
												<div class="list-spec">
													<p class="item" v-if="listing.kategori.sub_kategori !== 'Land'">
														<svg xmlns="http://www.w3.org/2000/svg" width="19.727" height="14" viewBox="0 0 19.727 14">
															<path id="bed" d="M27.409,90.5h-.318V87.955a1.274,1.274,0,0,0-1.273-1.273V81.273A1.274,1.274,0,0,0,24.545,80H11.182a1.274,1.274,0,0,0-1.273,1.273v5.409a1.274,1.274,0,0,0-1.273,1.273V90.5H8.318A.318.318,0,0,0,8,90.818v1.273a.318.318,0,0,0,.318.318h.318v1.273A.318.318,0,0,0,8.955,94h.955a.318.318,0,0,0,.312-.256l.267-1.335H25.239l.267,1.335a.318.318,0,0,0,.312.256h.955a.318.318,0,0,0,.318-.318V92.409h.318a.318.318,0,0,0,.318-.318V90.818A.318.318,0,0,0,27.409,90.5ZM10.545,81.273a.637.637,0,0,1,.636-.636H24.545a.637.637,0,0,1,.636.636v5.409h-.636V85.409a1.274,1.274,0,0,0-1.273-1.273H19.455a1.274,1.274,0,0,0-1.273,1.273v1.273h-.636V85.409a1.274,1.274,0,0,0-1.273-1.273H12.455a1.274,1.274,0,0,0-1.273,1.273v1.273h-.636Zm13.364,4.136v1.273H18.818V85.409a.637.637,0,0,1,.636-.636h3.818a.637.637,0,0,1,.636.636Zm-7,0v1.273H11.818V85.409a.637.637,0,0,1,.636-.636h3.818A.637.637,0,0,1,16.909,85.409ZM9.273,87.955a.637.637,0,0,1,.636-.636H25.818a.637.637,0,0,1,.636.636V90.5H9.273Zm.375,5.409H9.273v-.955h.566Zm16.806,0h-.375l-.191-.955h.566Zm.636-1.591H8.636v-.636H27.091Z" transform="translate(-8 -80)" fill="#234836"/>
														</svg>
														{{listing.bedroom}}
													</p>
													<p class="item" v-if="listing.kategori.sub_kategori !== 'Land'">
														<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
															<g id="bathtub" transform="translate(-0.003)">
																<g id="Group_25" data-name="Group 25" transform="translate(2.252 2.474)">
																	<g id="Group_24" data-name="Group 24">
																	<path id="Path_110" data-name="Path 110" d="M81.152,88A1.152,1.152,0,1,0,82.3,89.152,1.152,1.152,0,0,0,81.152,88Zm0,1.728a.576.576,0,1,1,.576-.576A.576.576,0,0,1,81.152,89.728Z" transform="translate(-80 -88)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_27" data-name="Group 27" transform="translate(5.23 3.182)">
																	<g id="Group_26" data-name="Group 26">
																	<path id="Path_111" data-name="Path 111" d="M184.864,112a.864.864,0,1,0,.864.864A.864.864,0,0,0,184.864,112Zm0,1.152a.288.288,0,1,1,.288-.288A.288.288,0,0,1,184.864,113.152Z" transform="translate(-184 -112)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_29" data-name="Group 29" transform="translate(4.612 2.304)">
																	<g id="Group_28" data-name="Group 28">
																	<path id="Path_112" data-name="Path 112" d="M160.432,64a.432.432,0,1,0,.432.432A.432.432,0,0,0,160.432,64Zm0,.576a.144.144,0,1,1,.144-.144A.144.144,0,0,1,160.432,64.576Z" transform="translate(-160 -64)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_31" data-name="Group 31" transform="translate(0.003)">
																	<g id="Group_30" data-name="Group 30" transform="translate(0)">
																	<path id="Path_113" data-name="Path 113" d="M14,8.192a.581.581,0,0,0-.331-.436,1.529,1.529,0,0,0,.1-.523,1.167,1.167,0,0,0-.7-1.068v-5a1.167,1.167,0,0,0-2.333,0v.005A1.218,1.218,0,0,0,9.569,2.333a.233.233,0,0,0,.233.233h2.1a.233.233,0,0,0,.233-.233A1.19,1.19,0,0,0,11.2,1.212V1.167a.7.7,0,1,1,1.4,0v4.9a1.128,1.128,0,0,0-.309.043A1.982,1.982,0,0,0,8.58,5.833a1.623,1.623,0,0,0-.263.031,1.16,1.16,0,0,0-1.9-.389,1.978,1.978,0,0,0-2.953.18,1.632,1.632,0,0,0-1.907.887A1.16,1.16,0,0,0,.236,7.7v.119A.58.58,0,0,0,.493,8.857l.148,1.407a3.327,3.327,0,0,0,1.915,2.6l-.093.37a.619.619,0,0,0,1.115.493l.309-.464a4.464,4.464,0,0,0,.568.04H9.55a4.464,4.464,0,0,0,.568-.04l.31.464a.619.619,0,0,0,1.115-.495l-.093-.369a3.327,3.327,0,0,0,1.916-2.6l.148-1.407A.581.581,0,0,0,14,8.192Zm-2.741-6.46a.869.869,0,0,1,.368.368h-1.54A.869.869,0,0,1,11.255,1.732ZM1.4,7a.7.7,0,0,1,.221.04.233.233,0,0,0,.3-.146l0-.005a1.165,1.165,0,0,1,1.457-.77q.044.014.087.031a.233.233,0,0,0,.281-.09,1.513,1.513,0,0,1,2.491-.076.233.233,0,0,0,.391-.024.695.695,0,0,1,1.3.23.233.233,0,0,0,.311.183,1.16,1.16,0,0,1,.4-.073c.023,0,.047,0,.084,0a.238.238,0,0,0,.236-.156,1.515,1.515,0,0,1,2.934.316.233.233,0,0,0,.353.171.689.689,0,0,1,.36-.1.7.7,0,0,1,.7.7,1.013,1.013,0,0,1-.123.467H.7A.7.7,0,0,1,1.4,7ZM3.19,13.465a.152.152,0,0,1-.275-.121l.074-.3a4.088,4.088,0,0,0,.4.122Zm7.873.009h0a.148.148,0,0,1-.12.059.151.151,0,0,1-.126-.068l-.2-.3a4.14,4.14,0,0,0,.4-.122l.074.3A.15.15,0,0,1,11.063,13.474ZM12.9,10.216A3.19,3.19,0,0,1,9.55,12.833H4.456A3.19,3.19,0,0,1,1.1,10.216L.962,8.866H13.044ZM13.419,8.4H.586a.117.117,0,1,1,0-.233H13.419a.117.117,0,1,1,0,.233Z" transform="translate(-0.003)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_33" data-name="Group 33" transform="translate(9.492 2.969)">
																	<g id="Group_32" data-name="Group 32">
																	<path id="Path_114" data-name="Path 114" d="M328.288,104a.288.288,0,0,0-.288.288v.864a.288.288,0,1,0,.576,0v-.864A.288.288,0,0,0,328.288,104Z" transform="translate(-328 -104)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_35" data-name="Group 35" transform="translate(10.186 2.753)">
																	<g id="Group_34" data-name="Group 34">
																	<path id="Path_115" data-name="Path 115" d="M352.288,96a.288.288,0,0,0-.288.288v.576a.288.288,0,0,0,.576,0v-.576A.288.288,0,0,0,352.288,96Z" transform="translate(-352 -96)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_37" data-name="Group 37" transform="translate(10.881 2.969)">
																	<g id="Group_36" data-name="Group 36">
																	<path id="Path_116" data-name="Path 116" d="M376.288,104a.288.288,0,0,0-.288.288v.864a.288.288,0,1,0,.576,0v-.864A.288.288,0,0,0,376.288,104Z" transform="translate(-376 -104)" fill="#234836"/>
																	</g>
																</g>
																<g id="Group_39" data-name="Group 39" transform="translate(11.122 2.753)">
																	<g id="Group_38" data-name="Group 38">
																	<path id="Path_117" data-name="Path 117" d="M400.288,96a.288.288,0,0,0-.288.288v.576a.288.288,0,0,0,.576,0v-.576A.288.288,0,0,0,400.288,96Z" transform="translate(-400 -96)" fill="#234836"/>
																	</g>
																</g>
															</g>
														</svg>
														{{listing.bathroom}}
													</p>
													<p class="item">
														<svg id="region" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
															<g id="Group_22" data-name="Group 22">
																<path id="Path_107" data-name="Path 107" d="M13.767,0H.233A.233.233,0,0,0,0,.233V13.767A.233.233,0,0,0,.233,14H13.767A.233.233,0,0,0,14,13.767V.233A.233.233,0,0,0,13.767,0ZM.467.467h3.5c0,.7,0,2.768,0,2.8a3.286,3.286,0,0,1-3.5,3.492ZM4.412,3.733H8.633V8.4h-5.6v-2A3.637,3.637,0,0,0,4.412,3.733ZM7,12.833v.7H.467V7.225a4.725,4.725,0,0,0,2.1-.53V8.633a.233.233,0,0,0,.233.233H4.2v1.867a.233.233,0,0,0,.233.233H7.7V12.6H7.233A.233.233,0,0,0,7,12.833Zm6.533.7H7.467v-.467H11.03c.2,0,.4,0,.4-.233v-2.1a2.019,2.019,0,0,1,2.1-2.092Zm0-5.358a2.481,2.481,0,0,0-2.567,2.558V12.6h-2.8V10.733a.234.234,0,0,0-.069-.165.259.259,0,0,0-.166-.068H4.667V8.867h4.2A.233.233,0,0,0,9.1,8.633v-4.9h4.433Zm0-4.909H4.411c.022-.2.022-.617.022-1.517V.467h9.1Z" fill="#234836"/>
															</g>
														</svg>
														{{listing.land_size}} m <sup>2</sup>
													</p>
												</div>
												<h6 class="list-name">{{listing.kategori.sub_kategori}}</h6>
											</router-link>

										</div>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				
			</div>
		</div>
	</div>
	<Footer></Footer>
</template>

<script>
import Navbarw from '../components/Navbarw.vue'
import Footer from '../components/Footer.vue'

import {onMounted, nextTick, ref, computed} from 'vue'
import 'jquery/dist/jquery.min.js'
import axios from 'axios'
import { useRouter } from 'vue-router'

//Datatable Modules
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"
import $ from 'jquery'

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
	name: 'Buy',
	components: {
		Navbarw,
		Footer,
		Splide,
		SplideSlide,
	},
	data() {
		return {
			options: {
				rewind : true,
				perPage: 1,
				width: 350,
				autoplay: false,
				pagination: false,
				// type: 'loop',
				// gap    : '1rem',
			},
		};
    },
	setup(){
		const listings = ref([])
		// const swiper = ref([])
		const listingImage = ref([])
		const router = useRouter()

		onMounted(() => {
			axios.get('getListing')
			.then((result) => {
                console.log('Listings: ',result.data)
				listings.value = result.data
				getHistory()
			}).catch((err) => {
				console.log(err.response)
			})
		})

		const listingFilter = computed(() => {
			return listings.value.filter(item => item.kategori.nama_kategori == 'For Sale')
		})

		function onSwiper(swiper) {
			console.log(swiper)
		}
		function onSlideChange() {
			console.log('slide change')
		}

		// onMounted(() => {
		// 	getHistory()
		// })
		// const onSwiper = (swiper) => {
		// 	console.log(swiper);
		// };
		// const onSlideChange = () => {
		// 	console.log('slide change');
		// };

		function getHistory(){
			nextTick(() => {
				$('#listing').DataTable({
					'ordering': false,
					"lengthMenu": [9, 27, 54]
				})
			})
		}

		function formatPrice(value){
            let val = (value/1)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
		function formatImage(value){
            return JSON.parse(value)
        }

		return{
			getHistory,
			listings,
			router,
			formatPrice,
			listingImage,
			formatImage,
			onSwiper,
			onSlideChange,
			listingFilter
			// swiper
		}
	}
}
</script>

<style>
	.Buy{
		margin-top: 130px;
	}

	.Buy .tagline{
		padding: 50px;
	}
	.Buy .tagline .title{
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 30px;
	}
	.Buy .tagline .tag-title{
		font-family: 'Bellarina', sans-serif;
		font-weight: 400;
		font-size: 40pt;
	}

	.Buy .listing{
		margin: 30px 0;
	}
	.Buy .listing .title{
		color: var(--darkGrey);
		text-transform: uppercase;
	}

	.Buy .listing .inner{
		padding: 0 20px;
	}
	.Buy table.t-listing{
		width: 100% !important;
	}
	.dataTable thead tr th.sorting{
		display: none !important;
	}
	.dataTables_paginate .pagination .page-item.active .page-link{
		background: var(--primaryColor);
		border: 1px solid var(--primaryColor);
	}
	.Buy table.t-listing tbody tr{
		float: left;
		width: 33%;
		padding: 10px;
	}
	.Buy .listing .list-card{
		text-decoration: none;
	}
	.Buy .listing .card{
		border-radius: 0;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		margin-bottom: 30px;
		position: relative;
		height: 360px;
	}
	.Buy .listing .card .category{
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 5;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 5px;
		color: white;
		text-align: center;
		width: 40%;
		padding: 0;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	}
	.Buy .listing .card .category h6{
		text-transform: uppercase;
		margin: 3px 1px 2px;
		font-weight: 400;
		font-size: 6pt;
	}
	.Buy .listing .card figure{
		border-radius: 0;
		width: 100%;
		height: 200px;
		margin-bottom: 0;
		clip-path: inset(0 0 0 0);
		position: relative;
		z-index: 2;
		vertical-align: middle;
	}
	.Buy .listing .card figure .splide{
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s;
		position: relative;
		z-index: 1;
	}
	/* .Buy .listing .card figure .carousel{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	} */
	.Buy .listing .card figure .bg{
		width: 100%;
		height: 40%;
		position: absolute;
		z-index: 2;
		background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
		bottom: 0;
		left: 0;
	}
	.Buy .listing .card figure .price{
		color: white;
		font-weight: 600;
		position: absolute;
		bottom: 0;
		left: 20px;
		z-index: 3;
	}
	.Buy .listing .card figure .list-img:hover{
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.1);
	}

	.Buy .listing .card .card-body a{
		text-decoration: none;
	}
	.Buy .listing .card .card-body .card-title{
		color: var(--primaryColor);
		text-transform: capitalize;
		font-size: 11pt;
		margin-bottom: 0;
	}
	.Buy .listing .card .card-body .text_info{
		color: #7a7a7a;
		font-size: 9pt;
		font-weight: 700;
		margin-bottom: 3px;
		margin-top: 3px;
	}
	
	.Buy .listing .card .card-body .card-title:hover{
		color: var(--darkGrey);
	}
	.Buy .listing .card .card-body .loc{
		color: #7a7a7a;
		text-transform: uppercase;
		font-size: 6pt;
		display: flex;
		align-items: center;
		margin-top: 10px;
	}
	.Buy .listing .card .card-body .list-spec{
		display: flex;
		align-items: center;
	}
	.Buy .listing .card .card-body .list-spec .item{
		color: #7a7a7a;
		font-size: 10pt;
		margin-right: 10px;
	}
	.Buy .listing .card .card-body .list-spec .item svg{
		height: 18px;
		width: auto;
		margin-right: 3px;
	}
	.Buy .listing .card .card-body .loc svg{
		margin-right: 5px;
	}

	.Buy .listing .card .card-footer{
		border-top: none;
		background: white;
		padding: 0;
		margin: 0;
	}
	.Buy .listing .card .card-body .list-name{
		font-weight: 600;
		color: var(--primaryColor);
		/* padding: 0 15px; */
		text-transform: uppercase;
		font-size: 11pt;
	}
</style>
