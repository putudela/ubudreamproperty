<template>
    <Navbarw></Navbarw>
    <div class="contact">
        <div class="container">
            <h1 class="title text-center">Contact</h1>

            <!-- <div class="gambar">
                <div class="container">
                    <figure>
                        <img src="../assets/img/slide1.jpg" alt="">
                    </figure>
                </div>
            </div> -->

            <div class="row">
                <div class="col-lg-6">
                    <div v-if="sukses" class="alert alert-success" role="alert">
                        <strong>Success!</strong> Your message has been send!.
                    </div>
                    <form @submit.prevent="store()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name<span>*</span></label>
                            <input type="text" class="form-control" id="name" v-model="hubKami.nama" required>
                            
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email<span>*</span></label>
                            <input type="email" class="form-control" id="email" v-model="hubKami.email" required>
                        </div>
                        <div class="mb-3">
                            <label for="hp" class="form-label">No. Telepon<span>*</span></label>
                            <input type="number" class="form-control" id="hp" v-model="hubKami.phone_number" required>
                            
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Subject<span>*</span></label>
                            <input type="text" class="form-control" id="subject" v-model="hubKami.subject" required>
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Interested in<span>*</span></label>
                            <select class="form-select" aria-label="Default select example" v-model="hubKami.interest" required>
                                <option value="Villa For Sale Freehold">Villa For Sale Freehold</option>
                                <option value="Villa For Sale Leasehold">Villa For Sale Leasehold</option>
                                <option value="Land For Sale Freehold">Land For Sale Freehold</option>
                                <option value="Land For Sale Leasehold">Land For Sale Leasehold</option>
                                <option value="Villa Rental">Villa Rental</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="pesan" class="form-label">Message<span>*</span></label>
                            <textarea class="form-control" id="pesan" rows="4" v-model="hubKami.message" required></textarea>
                        </div>
                        <div class="d-grid gap-2 col-4">
                            <button type="submit" class="btn btn__primary d-flex align-items-center justify-content-center" :disabled="loading">
                                <div v-if="loading" class="spinner-border text-light me-2" :disabled="loading"></div>
                                <span v-if="!loading">
                                    Send
                                </span>
                            </button>
                            
                        </div>
                    </form>
                </div>
                <div class="col-lg-6">
                    <h6 class="c-title">Message Us On Whatsapp</h6>
                    <a class="desc" href="https://wa.me/+6281237154472" target="_blank">081 237 154 472</a>
        
                    <p class="info">Our teams are always available to assist your needs during operational hours.</p>
                    
                    <h6 class="c-title">E-mail</h6>
                    <a class="desc" href="mailto:ubudreamproperty@gmail.com" target="_blank">ubudreamproperty@gmail.com</a>
        
                    <p class="info">Our teams are always available to assist your needs during operational hours.</p>
                </div>
            </div>

        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbarw from '../components/Navbarw.vue'
import Footer from '../components/Footer.vue'

import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// import emailjs from 'emailjs-com'

export default {
    name: 'Contact',
	components: {
		Navbarw,
		Footer
	},
    setup(){

        onMounted(() => {
            window.scrollTo(0,0)
        })
        const hubKami = reactive ({
			nama: '',
			email: '',
			phone_number: '',
			subject: '',
			interest: '',
			message: '',
		});

		const sukses = ref(false);
		const loading = ref(false);

		const validation = ref([]);

		const router = useRouter();

        function store() {
			axios.post(
				'Contact',
				hubKami
			)
			.then(() => {
				loading.value = true
				setTimeout(() => {
					loading.value = false
				}, 1000)

				this.hubKami.nama = ''
				this.hubKami.email = ''
				this.hubKami.phone_number = ''
				this.hubKami.subject = ''
				this.hubKami.interest = ''
				this.hubKami.message = ''

				sukses.value = true
				setTimeout(() => {
					sukses.value = false
				}, 4000)

				// router.push({
				// 	path: '/contact'
				// });
				// alert('Pesan Anda Berhasil Terkirim'),
				// location.reload()
			}).catch((err) => {
                console.log(err.response)
				validation.value = err.response.data
			});
		}

        return {
			hubKami,
			validation,
			router,
			store,
			sukses,
			loading,
		}
    }
}
</script>

<style>
    .contact{
		margin-top: 130px;
	}
    .contact .gambar figure{
        width: 100%;
        height: 300px;
    }
    .contact .gambar figure img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .contact .title{
        color: var(--grey);
        text-transform: uppercase;
        padding: 50px 0;
    }

    .contact .c-title{
        color: var(--grey);
    }
    .contact .desc{
        color: var(--grey);
        text-decoration: none;
    }
    .contact .desc:hover{
        color: var(--secondaryColor);
        text-decoration: none;
    }
    .contact .info{
        color: var(--grey);
        margin: 30px 0 50px;
    }
    .contact form label{
        font-size: 10pt;
        margin: 0;
    }
    .contact form label span{
        color: red;
    }
    .contact form .form-control{
        border-radius: 0;
        box-shadow: none;
    }
    .contact form .form-select{
        border-radius: 0;
        box-shadow: none;
    }
    .contact form .form-control:focus{
        border: 1px solid var(--primaryColor);
    }
    .contact form .form-select:focus{
        border: 1px solid var(--primaryColor);
    }
    .contact form .btn__primary{
        background: var(--primaryColor);
        color: white;
        text-transform: uppercase;
        border-radius: 0;
        padding: 15px;
        width: 100%;
        font-size: 9pt;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
</style>