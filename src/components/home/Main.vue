<template>
  <div class="main">
    <div  class="container-fluid">
        <b-media right-align vertical-align="center">
          <template v-slot:aside>
            <img src="@/assets/img/home/main/Layer2.png" alt="Media Aside">
          </template>
          <h5 class="mt-0 mb-1">About Us</h5>
          <h4>DDG International:</h4>
          <h4>Venture Into Potential</h4>
          <p>DDG International Berhad (DDG), is a joint collaboration between
            Asia International Trust Berhad, a well-established Trustee in the ASEAN region
            and Chiong & Partner, one of Malaysia’s leading trust advocates and
            award-winning legal firm.
          </p>
          <p>Establish on 5th of July 2021, DDG is headquartered in Butterworth,
            Penang and has footprint across Malaysia, Singapore and China.
            At DDG, we pride ourselves on delivering results to our clients -
            with over RM300M private trusts have been set, both offshore and onshore,
            for the past 4 years. With innovate ideas and cutting-edge solutions,
            DDG helps make financial progress towards a foreseeable financial future
            for clients with varied and bespoke portfolios.
          </p>
          <p>Founded and led by Herman Tan, a Penang-born entrepreneur, he brings
            more than 20 years of financial services experience, with more than
            half of that business roles throughout ASEAN region. With Herman’s
            financial leadership support - backed by a pool of legal advisors and
            corporate consultants, DDG maintains its impeccable standing to provide
            innovative, comprehensive, and professional estate planning and trust
            management solutions to its clients.
          </p>
          <h4>DDG Academy:</h4>
          <h4>Your Career, Our Passion</h4>
          <p>At DDG, we strongly believe that education should be part of the service
            we offer to clients and therefore DDG Academy is founded, and it is made
            up of a group of legal advisors and trust experts and educators that work
            together to “improve the career” of all our DDG advisors and young people.
            A common mission is shared - that is to nurture successful trust specialists
            who are knowledgeable, confident and can think and act independently.
          </p>
          <p>At the heart of DDG Academy is the belief that the work that we do must
            transform the career chances of our advisors. DDG believes that the best
            way to transform career chances is to actively shape the minds, attitudes
            and habits of young people through the DDG education framework that
            enables them to become the leaders of tomorrow.
          </p>
        </b-media>
    </div>
  </div>
</template>

<script>
export default {
name: "Main"
}
</script>

<style lang="scss" scoped>
  .container-fluid {
    background-image: url('~@/assets/img/home/main/Layer1.png');
    background-size: cover;
    color: #7b655d;
    font-family: "Times New Roman";
    h5 {
      font-size: 5.143125rem;
      font-weight: bold;
      margin: 0;
      @media screen and (max-width: 1200px) {
        font-size: 2.5rem;
      }
    }
    .media {
      padding-top: 19.9375rem;
      padding-left: 17.3125rem;
      padding-bottom: 22.3125rem;
      @media screen and (max-width: 1200px) {
        padding-top: 10rem;
        padding-left: 9rem;
        padding-bottom: 11rem;
      }
      @media screen and (max-width: 768px) {
        padding-top: 10rem;
        padding-left: 5rem;
        padding-bottom: 11rem;
      }
    }
    h4 {
      font-size: 2.295rem;
      margin: 0;
      @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
      }
      &:nth-of-type(2n) {
        margin-bottom: 3rem;
        @media screen and (max-width: 1200px) {
          margin-bottom: 1.5rem;
        }
      }
      &:nth-of-type(2n+1) {
        margin-top: 4.5625rem;
        @media screen and (max-width: 1200px) {
          margin-bottom: 0;
        }
      }
      &:nth-of-type(1) {
        margin-top: 2rem;
        @media screen and (max-width: 1200px) {
          margin-top: 1rem;

        }
      }
    }
    p {
      font-size: 1.875rem;
      @media screen and (max-width: 1200px) {
        font-size: 0.9rem;
      }
    }
    img {
      padding-right: 12.5rem;
      padding-left: 6.25rem;
      padding-top: 31.25rem;
      @media screen and (max-width: 1200px) {
        width: 300px;
        padding-right: 6rem;
        padding-left: 3rem;
        padding-top: 15rem;
      }
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
</style>