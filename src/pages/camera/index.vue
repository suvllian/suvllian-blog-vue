<template>
	<div class="camrea-container">
    <h1 class="crumb-nav text-center">
      <div class="crumb-nav-items">
        <router-link to="/">一颗松</router-link>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/blog">博客</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
      <font>» 关于</font>
    </h1>
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