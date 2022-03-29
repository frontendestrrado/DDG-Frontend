<template>
  <div class="main" @click="autoMenu">
    <header style="height: auto;" >
      <Top></Top>
    </header>
    <main>
      <router-view />
    </main>
    <b-modal ref="my-modal" title="Disclaimer of Liability and Endorsement" hide-footer centered>
      <template #modal-header="{ close }">
        <h5 class="dialog-title">Disclaimer of Liability and Endorsement</h5>
      </template>
      <p class="first-p">While the DDG International Berhad (DDG) strives to make the information on this website as well as its downloadable promotional materials including, without limitation, journal advertisements, sales visual aids, prints, direct mail as timely and accurate as possible, DDG makes no claims, promises, or guarantees about the accuracy, completeness, or adequacy of the contents of this site and its promotional materials, and expressly disclaims liability for errors and omissions in the contents of this site and the promotional materials carried by DDG Advisors (with valid DDG ID). No warranty of any kind, implied, expressed, or statutory, including but not limited to the warranties of non-infringement of third party rights, title, merchantability, fitness for a particular purpose or freedom from computer virus, is given with respect to the contents of this website or its links to other Internet resources.
      </p>
      <br>
      <p class="first-p">Reference in this site to any specific commercial product, process, or service, or the use of any trade, firm or corporation name is for the information and convenience of the public, and does not constitute endorsement, recommendation, or favouring by DDG International Berhad. </p>
      <br>
      <p style="text-align:center">The DDG Management</p>
      <p style="text-align:center">16 December 2021</p>
      <b-button class="mt-5"  block @click="hideModal" variant="success">Agree</b-button>
    </b-modal>
  </div>
</template>

<script>
import Top from '@/components/Header.vue'
import EventHub from '@/util/EventHub'
export default {
  components: {
    Top,
  },
  name: 'Home',
  data () {
    return {
      pageContent: [],
      // show: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    //    console.log('********************************************')
    // console.log(sessionStorage.currentPage)
    // console.log('from:'+from.path, from.name);
    // console.log('to:'+to.path, to.name);
    var titleArr = sessionStorage.historyTitle ? JSON.parse(sessionStorage.historyTitle) : [];
    if (from.path != to.path) {
      // console.log('dddddddddddddddddddddddd');
      if (JSON.parse(sessionStorage.currentPage).tabbar == from.path) {
        titleArr.pop();
        this.$store.commit('changePage', { tabbar: to.path, title: titleArr[titleArr.length - 1] });
        sessionStorage.setItem('historyTitle', JSON.stringify(titleArr));
      } else {
        if (!!JSON.parse(sessionStorage.currentPage).title) {
          titleArr.push(JSON.parse(sessionStorage.currentPage).title);
          sessionStorage.setItem('historyTitle', JSON.stringify(titleArr));
        }
      }
    }
    // console.log('********************************************')
    next();
  },
  mounted () {
    //判斷模態框是否出現過
		if (sessionStorage.isNotice) {
			// this.show = false
      this.hideModal()
		} else {
			// this.show = true
      this.showModal()
		}
    var that = this;
    window.addEventListener('resize', () => {
      let val = document.body.clientWidth >= 768 ? true : false;
      that.$store.commit('setIsPC', val);
      document.body.style.overflow = '';
    })
  },
  methods: {
   /* closeDialog () {
      sessionStorage.setItem('isNotice',true)
    },*/
    //顯示模態框
    showModal() {
      this.$refs['my-modal'].show()
    },
    //隱藏模態框
    hideModal() {
      this.$refs['my-modal'].hide()
      sessionStorage.setItem('isNotice',true)
    },
    autoMenu() {
      EventHub.$emit('hiddenMenu')
    }
  },
}
</script>

<style lang="scss" scoped>
.dialog-title {
  margin: auto;
}
.first-p {
  text-indent: 30px;
  @media screen and (max-width: 768px) {
    text-indent: 20px;
  }
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
main {
  background-color: #fff;
  min-height: calc(100vh - 80px);
}
.btn {
  //color: #444;
  //background: #cfc3b5;
  padding: 10px;
  margin-top: 20px;
  // text-align: left;
}
.ContactUsTitle {
  font-size: 28px;
  color: #222;
  font-family: "Calibri";
}
.ContactUs div {
  margin-bottom: 10px;
}
/deep/ .van-dialog {
    font-size: 16px;
    width: 70%;
    padding: 10px;
    .van-dialog__footer{
       width: 12rem;
       position: relative;
       left: 50%;
       transform:translateX(-50%) ;
      .van-dialog__confirm{
        font-size: 1.5rem;
        color:#fff;
        background-color: #7C655D;
        border-radius: 10px;
        height: 3rem;
        width: 12rem;
      }

    }
}
@media screen and (max-width: 768px) {
  main {
    min-height: calc(100vh - 60px);
  }
  .ContactUs {
    font-size: 2rem;
    line-height: 12px;
  }
  .ContactUsTitle {
    font-size: 20px;
    font-family:"Calibri";
  }
}
@media screen and (max-width: 1025px){
  /deep/ .van-dialog {
    font-size: 16px;
    width: 100%;
    padding: 10px;
    .van-dialog__footer{
       width: 15rem;
       position: relative;
       left: 50%;
       transform:translateX(-50%) ;
      .van-dialog__confirm{
        font-size: 1.5rem;
        color:#fff;
        background-color: #7C655D;
        border-radius: 10px;
        height: 6rem;
        width: 15rem;
      }

    }
}
}
</style>
