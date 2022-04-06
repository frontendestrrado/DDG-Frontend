<template>
  <div>
    <div  class="container-fluid">
      <h5>Why Choose Us</h5>
      <b-container fluid="true">
        <b-row class="text-center">
          <b-col>
            <div>
              <div><img src="@/assets/img/home/footer/Curves1.png" alt=""></div>
              <p>One-stop solution on</p>
              <p>estate, and trust advisory</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <div><img src="@/assets/img/home/footer/Curves2.png" alt=""></div>
              <p>Customized solutions</p>
              <p>for your family</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <div><img src="@/assets/img/home/footer/Curves3.png" alt=""></div>
              <p>Advice from qualified</p>
              <p>legal advisors</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <div><img src="@/assets/img/home/footer/Curves4.png" alt=""></div>
              <p>Support from</p>
              <p> well-trained professional team</p>
            </div>
          </b-col>
          <b-col>
            <div>
              <div><img src="@/assets/img/home/footer/Curves5.png" alt=""></div>
              <p>Backed by</p>
              <p>seamless trust application</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style lang="scss" scoped>
  .container-fluid {
    background-color: #af998f;
    color: white;
    p {
      margin: 0;
    }
    h5 {
      font-family: "Times New Roman";
      font-size: 2.446875rem;
      font-weight: bold;
      text-align: center;
      padding-top: 6.5625rem;
      @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
        padding-top: 3.2rem;
      }
    }
    .row {
      margin-top: 3.75rem;
      font-size: 1.125rem;
      @media screen and (max-width: 1350px) {
        margin-top: 1.8rem;
        font-size: 0.8rem;
      }
      p:nth-of-type(2n+1) {
        margin-top: 0.9375rem;
        @media screen and (max-width: 1350px) {
          margin-top: 0.7rem;
        }
      }
      padding-bottom: 7.5rem;
      @media screen and (max-width: 1350px) {
        padding-bottom: 5rem;
      }

      .col {
        @media screen and (max-width: 1350px) {
          & img {
            width: 6.25rem;
            height: 5.625rem;
          }
        }
        @media screen and (max-width: 576px) {
           margin-top: 0.625rem;
        }
      }
    }
    .container-true {
      width: 75%;
      margin: auto;
    }
  }
</style>