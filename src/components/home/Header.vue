<template>
  <div>
    <div class="top">
<!--      <div  class="container-fluid">
        <b-navbar toggleable="true" type="light" >
          <b-navbar-brand to="/Home">
            <img src="@/assets/img/home/header/DDG Logo Gold Effect.png" alt="DDG Logo Gold Effect" width="200" height="100">
          </b-navbar-brand>
          <div>
            <a class="login" @click="jump()" href="#" v-if="!token"> Sign Up / Sign In</a>
            <a class="login" @click="delToken" href="#" v-else>Sign Out</a>
            <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
          </div>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/Home">
                Home
              </b-nav-item>
              <b-nav-item to="/Aspirations">
                Aspirations
              </b-nav-item>
              <b-nav-item>
                Products
              </b-nav-item>
              <b-nav-item>
                Our Services
              </b-nav-item>
              <b-nav-item>
                AI Generation Trust
              </b-nav-item>
              <b-nav-item>
                DDG Leadership
              </b-nav-item>
              <b-nav-item to="/Login" v-if="!token">
                Advisor' login
              </b-nav-item>
              <b-nav-item to="/Advisors" v-else>
                Advisors
              </b-nav-item>
              <b-nav-item>
                Contact Us
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>-->
      <b-container fluid class="header-introduce">
        <b-row>
          <b-col></b-col>
          <b-col class="introduce">
            <div>Welcome to</div>
            <div>DDG International</div>
            <div>Berhad</div>
            <b-button>Contact Us</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer">
      <h5>Safeguard Your Wealth</h5>
      <h5>Protect Your Family</h5>
      <p>Here at DDG, we can help preserve your wealth while offering you greater</p>
      <p>flexibility over the management and distribution of your assets.</p>
    </div>
  </div>


</template>

<script>
export default {
name: "Header",
}
</script>
<style>

</style>
<style lang="scss" scoped>
//html:16px
.top {
  padding-bottom: 21.1875rem;
  @media screen and (max-width: 1200px) {
    padding-bottom: 5.1875rem;
  }
  background: url("~@/assets/img/home/header/familycopy.png");
  background-size: cover;
  .navbar-brand {
    img {
      margin-left: 1.25rem;
      @media screen and (max-width: 1200px) {
        width: 6.25rem;
        height: 3.125rem;
        margin-left: 0;
      }
    }
  }
  .login {
    font-size: 1.5rem;
    font-family: "Times New Roman";
    font-weight: 600;
    color: #7b655d !important;
    margin-right: 3rem;
    @media screen and (max-width: 1200px) {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }
  .ml-auto {
    li {
      text-align: end;
    }
    font-size: 3rem;
    font-family: Calibri;
    font-weight: 600;
    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }
    a {
      color: #7b655d !important;
      &:hover {
        color: #bd9e85 !important;
      }
      span {
        color: #7b655d !important;
      }
    }

  }
  .header-introduce {
    font-size: 5.5625rem;
    font-weight: bold;
    font-family: Times New Roman;
    color: #7b655d;
    margin-top: 20.9375rem;
    @media screen and (max-width: 1200px) {
     font-size: 2rem;
      text-align: end;
      margin-top: 5.9375rem;
    }
    .btn-secondary {
      background-color: #7b655d !important;
      font-size: 2rem;
      border-radius: 1rem;
      font-weight: bold;
      font-family: Times New Roman;
      @media screen and (max-width: 1200px) {
        width: 5rem;
        height: 1.5rem;
        font-size: 0.5rem;
        line-height: 0.5rem;
        border-radius: 0.5rem;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .introduce {
      text-align: end;
      margin-right: 10rem;
      @media screen and (max-width: 1200px) {
        margin-right: 4rem;
      }
    }
    .call {
      margin-bottom: 20.9375rem;
    }
  }
}
.footer {
  background-color: #bd9e85;
  color: white;
  text-indent: 8.5rem;
  @media screen and (max-width: 1200px) {
    text-indent: 4.2rem;
    height: 15rem;
  }
  @media screen and (max-width: 576px) {
    height: 20rem;
  }
  @media screen and (max-width: 320px) {
    height: 25rem;
  }
  @media screen and (max-width: 220px) {
    height: 30rem;
  }
  @media screen and (max-width: 172px) {
    height: 35rem;
  }
  h5 {
    font-size: 3.9375rem;
    font-weight: bold;
    font-family: Times New Roman;
    margin: 0;
    @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }
    &:first-of-type {
      padding-top: 4.375rem;
      @media screen and (max-width: 1200px) {
        padding-top: 2.1rem;
      }
    }
  }
  p {
    font-size: 2.225rem;
    font-family: Calibri;
    margin: 0;
    @media screen and (max-width: 1200px) {
      font-size: 1.1rem;
    }
  }
  p:first-of-type {
    margin-top: 1rem;
  }
  p:last-of-type {
    padding-bottom: 4rem;
    @media screen and (max-width: 1200px) {
      padding-bottom: 2rem;
    }
  }
}
</style>
