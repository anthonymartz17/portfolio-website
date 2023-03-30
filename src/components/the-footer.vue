<script>
export default {
	data() {
		return {
			mediaContacts: [
				{
					icon: "fa-regular fa-envelope",
					name: "E-mail",
					url: "",
					link_name: "antonio.fr.martinezc@hotmail.com",
				},
				{
					icon: "fa-brands fa-linkedin-in",
					name: "LinkedIn",
					url: "",
					link_name: "linkedin.com/in/antoniomartinez17",
				},
				{
					icon: "fa-brands fa-github",
					name: "Github",
					url: "",
					link_name: "@anthonymartz17",
				},
				{
					icon: "fa-brands fa-instagram",
					name: "Instagram",
					url: "",
					link_name: "@martz_code",
				},
			],
			navLinks: [
				{ icon: "fa-solid fa-house", name: "Home", active: true },
				{
					icon: "fa-solid fa-hands-holding-circle",
					name: "Work",
					active: false,
				},
				{ icon: "fa-regular fa-lightbulb", name: "Skills" },
				{ icon: "fa-regular fa-address-card", name: "About" },
				{ icon: "fa-brands fa-blogger", name: "Blogs" },
				{ icon: "fa-solid fa-handshake", name: "Hire Me", accent: true },
			],
			year: new Date().getFullYear(),
		};
	},
};
</script>
<template>
	<div class="the-footer">
    <h2 class="sections-title-global">
			Other
			</h2>
		<ul class="contact-links">
			<li v-for="media in mediaContacts" :key="media.name">
				<a :href="media.url">
					<font-awesome-icon :icon="media.icon" class="icon" />
					<p>{{ media.link_name }}</p>
				</a>
			</li>
		</ul>
		<div class="bottom-links">
			<div class="footer-nav">
				<ul>
					<li v-for="link in navLinks" :key="link.name">
						{{ link.name }}
					</li>
				</ul>
			</div>
			<div class="copyRight">
				<p>Designed and built by</p>
				<p>Antonio Martinez</p>
				<small>© {{ year }}</small>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.the-footer {
	background: $bg-2;
	padding: 1.5em;
	padding-bottom: 3em;
	color: $white;
  padding-top: 7em;
}
.contact-links {

	margin: 0;
	padding: 0;
	text-indent: 0;
	list-style-type: 0;
  margin-bottom: 6em;
	
	li {
		margin-bottom: 1.5em;
		list-style: none;
	}
	a {
		text-decoration: none;
		color: $white;
		display: flex;
		align-items: center;
		gap: 1em;
		font: $font-thin-text-mb;
	}
}
.bottom-links {
	border-top: 1px solid rgba($white, 0.3);
	padding-block: 1em;
}
.footer-nav {
	font: $font-small-mb;

	ul {
		margin: 0;
		padding: 0;
		text-indent: 0;
		list-style-type: 0;
		display: flex;
		justify-content: space-between;
		margin-bottom: 3em;
	}
	li {
		list-style: none;
		color: $white;
	}
}
.copyRight {
	font: $font-small-mb;
	text-align: center;
}
</style>
