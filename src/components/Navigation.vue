<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link class="header" to="{name:'Home'}">FireBlogs</router-link>
          </div>
          <div class="nav-links">
              <ul>
                <router-link class="link" to="{name:'Home'}">Home</router-link>
                <router-link class="link" to="{name:'Home'}">Blogs</router-link>
                <router-link class="link" to="{name:'Home'}">Create Post</router-link>
                <router-link class="link" to="{name:'Home'}">Login/Register</router-link>
              </ul>
          </div>
      </nav>
      <menueIcon />
      <transition name="mobile-nav">
           <ul>
                <router-link class="link" to="{name:'Home'}">Home</router-link>
                <router-link class="link" to="{name:'Home'}">Blogs</router-link>
                <router-link class="link" to="{name:'Home'}">Create Post</router-link>
                <router-link class="link" to="{name:'Home'}">Login/Register</router-link>
              </ul>
      </transition>
  </header>
</template>

<script>
import menueIcon from '../assets/Icons/bars-regular.svg'
export default {
    name:'navigation',
    components:{
        menueIcon
    }
}
</script>

<style lang="scss" scoped>
    header{   
    background-color: #fff;
    padding: 0 25px;
   // box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    z-index: 99;
    }
    .link{
        font-weight: 500;
        padding:  0 8px;
        transition: 0.3s color ease;
        &:hover{
            color: #1eb8b8;
        }
    }
    nav{
        display: flex;
        padding: 25ox 0;
            .branding{
                display: flex;
                align-items: center;
                    .header{
                        font-weight: 600;
                        font-size: 24px;
                        color: #000;
                        text-decoration: none;
                    }
            }
    }
</style>