<template>
    <Navbarw></Navbarw>
    <div class="detail">
        <div class="container">
            <div class="tagline text-center">
				<h5 class="title">Your Dream Property in Ubud</h5>
				<h1 class="tag-title">Invest and Relax in Paredise</h1>
			</div>

            <div class="content-detail">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <div class="title">
                            <h3 class="title-list">
                                {{listing.title}}
                            </h3>
                            <h3 class="title-list">
                                Rp. {{formatPrice(listing.price)}}
                            </h3>
                        </div>

                        <p class="loc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10.667" viewBox="0 0 8 10.667">
								<path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M3.589,10.451C.562,6.063,0,5.613,0,4A4,4,0,0,1,8,4c0,1.613-.562,2.063-3.589,6.451a.5.5,0,0,1-.822,0ZM4,5.667A1.667,1.667,0,1,0,2.333,4,1.667,1.667,0,0,0,4,5.667Z" fill="#7a7a7a"/>
							</svg>
                            {{listing.location}}
                        </p>

                        <div class="status">
                            <div class="item" v-if="listing.listing_status == 'Freehold'">
                                {{listing.listing_status}} / Hak Milik
                            </div>
                            <div class="item" v-else>
                                {{listing.listing_status}} / Hak Sewa
                            </div>
                        </div>
                        
                        <div class="card">
                            <div id="carouselDetail" class="carousel slide" data-bs-ride="carousel">
                                <!-- <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselDetail" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselDetail" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselDetail" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div> -->
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="(image, index) in listingImage" :key="index" :class="{'active': index == 0}">
                                        <img :src="imageUrl+image" class="d-block w-100">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselDetail" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselDetail" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <hr>

                        <div class="spec">
                            <div class="list_spec">
                                <h5>{{listing.code}}</h5>
                                <p>Code</p>
                            </div>
                            <div class="list_spec">
                                <h5 v-if="listing.listing_status == 'Freehold'">{{listing.listing_status}} / Hak Milik</h5>
                                <h5 v-else>{{listing.listing_status}} / Hak Sewa</h5>
                                <p>Status</p>
                            </div>
                            <div class="list_spec" v-if="listing.bedroom !== null">
                                <h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.727" height="14" viewBox="0 0 19.727 14">
										<path id="bed" d="M27.409,90.5h-.318V87.955a1.274,1.274,0,0,0-1.273-1.273V81.273A1.274,1.274,0,0,0,24.545,80H11.182a1.274,1.274,0,0,0-1.273,1.273v5.409a1.274,1.274,0,0,0-1.273,1.273V90.5H8.318A.318.318,0,0,0,8,90.818v1.273a.318.318,0,0,0,.318.318h.318v1.273A.318.318,0,0,0,8.955,94h.955a.318.318,0,0,0,.312-.256l.267-1.335H25.239l.267,1.335a.318.318,0,0,0,.312.256h.955a.318.318,0,0,0,.318-.318V92.409h.318a.318.318,0,0,0,.318-.318V90.818A.318.318,0,0,0,27.409,90.5ZM10.545,81.273a.637.637,0,0,1,.636-.636H24.545a.637.637,0,0,1,.636.636v5.409h-.636V85.409a1.274,1.274,0,0,0-1.273-1.273H19.455a1.274,1.274,0,0,0-1.273,1.273v1.273h-.636V85.409a1.274,1.274,0,0,0-1.273-1.273H12.455a1.274,1.274,0,0,0-1.273,1.273v1.273h-.636Zm13.364,4.136v1.273H18.818V85.409a.637.637,0,0,1,.636-.636h3.818a.637.637,0,0,1,.636.636Zm-7,0v1.273H11.818V85.409a.637.637,0,0,1,.636-.636h3.818A.637.637,0,0,1,16.909,85.409ZM9.273,87.955a.637.637,0,0,1,.636-.636H25.818a.637.637,0,0,1,.636.636V90.5H9.273Zm.375,5.409H9.273v-.955h.566Zm16.806,0h-.375l-.191-.955h.566Zm.636-1.591H8.636v-.636H27.091Z" transform="translate(-8 -80)" fill="#234836"/>
									</svg>
                                    {{listing.bedroom}}
                                </h5>
                                <p>Bedrooms</p>
                            </div>
                            <div class="list_spec" v-if="listing.bathroom !== null">
                                <h5>
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
                                </h5>
                                <p>Bathrooms</p>
                            </div>
                            <div class="list_spec land">
                                <h5>
                                    <svg id="region" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
										<g id="Group_22" data-name="Group 22">
											<path id="Path_107" data-name="Path 107" d="M13.767,0H.233A.233.233,0,0,0,0,.233V13.767A.233.233,0,0,0,.233,14H13.767A.233.233,0,0,0,14,13.767V.233A.233.233,0,0,0,13.767,0ZM.467.467h3.5c0,.7,0,2.768,0,2.8a3.286,3.286,0,0,1-3.5,3.492ZM4.412,3.733H8.633V8.4h-5.6v-2A3.637,3.637,0,0,0,4.412,3.733ZM7,12.833v.7H.467V7.225a4.725,4.725,0,0,0,2.1-.53V8.633a.233.233,0,0,0,.233.233H4.2v1.867a.233.233,0,0,0,.233.233H7.7V12.6H7.233A.233.233,0,0,0,7,12.833Zm6.533.7H7.467v-.467H11.03c.2,0,.4,0,.4-.233v-2.1a2.019,2.019,0,0,1,2.1-2.092Zm0-5.358a2.481,2.481,0,0,0-2.567,2.558V12.6h-2.8V10.733a.234.234,0,0,0-.069-.165.259.259,0,0,0-.166-.068H4.667V8.867h4.2A.233.233,0,0,0,9.1,8.633v-4.9h4.433Zm0-4.909H4.411c.022-.2.022-.617.022-1.517V.467h9.1Z" fill="#234836"/>
										</g>
									</svg>
                                    {{listing.land_size}}
                                </h5>
                                <p>m<sup>2</sup></p>
                            </div>
                        </div>

                        <!-- <hr> -->
                        
                        <div class="content_info">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="desc_title">
                                        <h6>Descriptions</h6>
                                    </div>
                                    <div class="description">
                                        <p class="desc" v-html="listing.description"></p>
                                    </div>

                                    <div class="description">
                                        <div class="desc_title">
                                            <h6>Property Detail</h6>
                                        </div>
                                        <div class="p_detail" v-if="listing.location !== null">
                                            <p class="p_title">Location</p>
                                            <p class="p_text">{{listing.location}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.view !== null">
                                            <p class="p_title">View</p>
                                            <p class="p_text">{{listing.view}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.floor !== null">
                                            <p class="p_title">Floor</p>
                                            <p class="p_text">{{listing.floor}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.bedroom !== null">
                                            <p class="p_title">Bedrooms</p>
                                            <p class="p_text">{{listing.bedroom}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.bathroom !== null">
                                            <p class="p_title">Bathrooms</p>
                                            <p class="p_text">{{listing.bathroom}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.kitchen !== null">
                                            <p class="p_title">Kitchen</p>
                                            <p class="p_text">{{listing.kitchen}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.dining_room !== null">
                                            <p class="p_title">Dining Room</p>
                                            <p class="p_text">{{listing.dining_room}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.living_room !== null">
                                            <p class="p_title">Living Room</p>
                                            <p class="p_text">{{listing.living_room}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.pool !== null">
                                            <p class="p_title">Pool</p>
                                            <p class="p_text">{{listing.pool}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.aircon !== null">
                                            <p class="p_title">Air Con</p>
                                            <p class="p_text">{{listing.aircon}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.internet !== null">
                                            <p class="p_title">Internet</p>
                                            <p class="p_text">{{listing.internet}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.road_access !== null">
                                            <p class="p_title">Road Access</p>
                                            <p class="p_text">{{listing.road_access}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.parking !== null">
                                            <p class="p_title">Car Parking</p>
                                            <p class="p_text">{{listing.parking}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.electricity !== null">
                                            <p class="p_title">Electricity</p>
                                            <p class="p_text">{{listing.electricity}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.water_resource !== null">
                                            <p class="p_title">Water Resources</p>
                                            <p class="p_text">{{listing.water_resource}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.garden !== null">
                                            <p class="p_title">Garden</p>
                                            <p class="p_text">{{listing.garden}}</p>
                                        </div>
                                        <div class="p_detail" v-if="listing.land_size !== null">
                                            <p class="p_title">Land Size</p>
                                            <p class="p_text">{{listing.land_size}} m<sup>2</sup></p>
                                        </div>
                                        <div class="p_detail" v-if="listing.distance !== null">
                                            <p class="p_title">Distance To Ubud Center</p>
                                            <p class="p_text">{{listing.distance}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="contact-btn">
                                        <a href="#" class="btn btn__primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                            </svg>
                                            Contact Agent Via Whatsapp
                                        </a>
                                        <a href="#" class="btn btn__secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                            </svg>
                                            Enquire Via Email
                                        </a>
                                    </div>
                                </div>
                            </div>
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: 'Detail',
	components: {
		Navbarw,
		Footer
	},
    setup(){
        const listing = ref([])
        const listingImage = ref([])
        const route = useRoute()

        onMounted(() => {
            axios.get(`getListing/${route.params.id}`)
            .then(result => {
                console.log('Detail Listing:', result.data.listing)
                listing.value = result.data.listing
                listingImage.value = JSON.parse(result.data.listing.images)
                console.log('Listings Images: ', listingImage.value)
            }).catch((err) => {
                console.log(err.response)
            })
        })

        function formatPrice(value){
            let val = (value/1)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }

        return {
            listing,
            route,
            formatPrice,
            listingImage
        }
    }
}
</script>

<style>
</style>