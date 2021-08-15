<template>
    <Navbarw></Navbarw>
    <div class="contact">
        <div class="container">
            <h1 class="title text-center">Contact</h1>

            <h6 class="c-title">Message Us On Whatsapp</h6>
            <a class="desc" href="#">081 237 154 472</a>

            <p class="info">Our teams are always available to assist your needs during operational hours.</p>
            
            <h6 class="c-title">E-mail</h6>
            <a class="desc" href="#">ubudreamproperty@gmail.com</a>

            <p class="info">Our teams are always available to assist your needs during operational hours.</p>

        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Navbarw from '../components/Navbarw.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Contact',
	components: {
		Navbarw,
		Footer
	}
}
</script>

<style>
    .contact{
		margin-top: 130px;
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
</style>