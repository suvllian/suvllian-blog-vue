<template>
	<div class="camrea-container">
    <ul class="text-center camera-nav">
			<li class="camera-nav-item">
				<router-link to="/camera/index" class="camera-nav-album"><i class="fa fa-file-image-o" />ALBUM</router-link>
			</li>
			<li class="camera-nav-item">
			  <router-link to="/camera/travel" class="camera-nav-travel"><i class="fa fa-globe" />TRAVEL</router-link>
			</li>
			<!-- <li class="camera-nav-item">
		    <router-link to="/camera/catrgory" class="camera-nav-category"><i class="fa fa-file" />CATEGORY</router-link>
			</li> -->
		</ul>
		<router-view></router-view>
	</div>
</template>