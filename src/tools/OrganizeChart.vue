<template>
  <div class="OrganizeChart from_content">
  
    <div class="row mb-4">
     <div class="col-md-6">
      
       <div>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="start_date"
        type="text"
    
        placeholder="From Date"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="start_date"
          button-only
          right
   
          locale="en-US"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  </div>
     </div>
      <div class="col-md-6">
        
     <div>
    <b-input-group class="mb-3">
      <b-form-input
        id="example-input"
        v-model="end_date"
        type="text"
    
        placeholder="To Date"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="end_date"
          button-only
          right
   
          locale="en-US"
          aria-controls="example-input"
          @context="onContext1"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  </div>

      </div>
      <div class="col-md-6">
      

      <div class="block">
      <div id="app" class="slect-boxdiv">
    <select v-model="product_id" >
           <option value="">All Products</option>
           <option  v-for="item in year" :value="item.product_id">{{item.product_name}}</option>
       </select>
         </div>
         </div>
       </div>
      <div class="col-md-2">
        <van-button @click="search"  round block type="info"  class="btn-search">
        Search
      </van-button>
       </div>
       </div>
    <div class="OrganizeChart_info">
       <!-- <div class="">
   <div id="app" class="slect-boxdiv">
     <select  >
         <option value="0">Please select Date</option>
    
     </select>
</div>
<div id="app" class="slect-boxdiv">
     <select >
         <option disabled value="">Please select Date</option>
       
     </select>
</div>
 </div> -->
   
      <!-- <van-cell-group title="" class="first">
        <van-cell center>
          <template #title>
            <span class="custom-title">ME</span>
          </template>
          <template #default>
            <div class="fcb"><span>Status:</span><span>{{me.status=='1'?'Active':'inactive'}}</span></div>
            <div class="fcb"><span>Rank:</span><span>{{me.level}}</span></div>
            <div class="fcb"><span>Total Personal Sales:</span><span>MYR {{me.total_personal_sales | NumFormat}}</span></div>
            <div class="fcb"><span>Total Organizational Sales:</span><span>MYR {{me.total_organziataional_sales | NumFormat}}</span></div>
          </template>
        </van-cell >
      </van-cell-group> -->
      <!-- <van-cell-group title="" v-for="(item,index) in down_line" :key="index" >
        <van-cell center  v-for="i in item" :key="i.code" border>
          <template #title>
            <span class="custom-title">{{i.name}}</span>
          </template>
          <template #default>
            <div class="fcb"><span>Rank:</span><span>{{i.grade}}</span></div>
            <div class="fcb"><span>Personal Sales:</span><span>MYR {{i.personal_sales | NumFormat}}</span></div>
            <div class="fcb"><span>Organizational Sales:</span><span>MYR {{i.grade_advisor_sales | NumFormat}}</span></div>
          </template>
          <template #right-icon>
            <div class="right-icon">
              <van-icon name="arrow" class="arrow" @click="$router.push('/OrganizeChartDetail2?code='+i.code)"/>
              <van-icon name="arrow" class="arrow" @click="$router.push('/OrganizeChartDetail?code='+i.code)"/>
            </div>
          </template>
        </van-cell>

      </van-cell-group> -->

   <template>
    <div class="outBox">
    <div>
          <span class="custom-title"> - </span><span class="custom-title">ME</span> <span class="custom-title">{{me.level}}</span>
    </div>
     <div>
   <span class="custom-title">Personal Sales: {{Number(me.total_personal_sales).toLocaleString()}}</span> <span class="custom-title"> | Organizational Sales: {{Number(me.total_organziataional_sales).toLocaleString()}}</span>
    </div>
        </div>
<van-cell-group title="" v-for="(item,index) in down_line" :key="index" >

        <van-cell class="outBox1" :style="{ border: '1px solid '+i.color_code}" center  v-for="i in item" :key="i.code">

    <div>
          <span class="custom-title" @click="changeActTab(i.code,i.grade_advisor_list_count)" ><b>- </b></span><span class="custom-title"><b>{{i.name}}</b></span> <span class="custom-title">({{i.grade}})</span>
    </div>
     <div>
   <span class="custom-title" @click="$router.push('/OrganizeChartDetail2?code='+i.code)">Personal Sales: <b>{{Number(i.personal_sales).toLocaleString()}}</b></span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+i.code)"> | Organizational Sales: <b>{{Number(i.grade_advisor_sales).toLocaleString()}}</b></span>
    </div>


<van-cell-group  title="" v-for="(item1,index1) in  i.grade_advisor_list" :key="index1" >
   
        <van-cell class="outBox1" :id="'qaz' + j.introducer+j.index" :style="{ border: '1px solid '+j.color_code , display: 'none'}" center  v-for="j in item1" :key="j.code">
          
    <div>
          <span class="custom-title" @click="changeActTab(j.code,j.grade_advisor_list_count)"> - </span><span class="custom-title">{{j.name}}</span> <span class="custom-title">({{j.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+j.code)">Personal Sales: {{Number(j.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+j.code)"> | Organizational Sales: {{Number(j.grade_advisor_sales).toLocaleString()}}</span>
    </div>


<van-cell-group title="" v-for="(item2,index2) in  j.grade_advisor_list" :key="index2" >
        <van-cell class="outBox1" :id="'qaz' + k.introducer+k.index" :style="{ border: '1px solid '+k.color_code , display: 'none'}" center  v-for="k in item2" :key="k.code">
      
    <div>
          <span class="custom-title"  @click="changeActTab(k.code,k.grade_advisor_list_count)"> - </span><span class="custom-title">{{k.name}}</span> <span class="custom-title">({{k.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+k.code)">Personal Sales: {{Number(k.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+k.code)"> | Organizational Sales: {{Number(k.grade_advisor_sales).toLocaleString()}}</span>
    </div>


<van-cell-group title="" v-for="(item3,index3) in  k.grade_advisor_list" :key="index3" >
        <van-cell class="outBox1" :id="'qaz' + l.introducer+l.index" :style="{ border: '1px solid '+l.color_code , display: 'none'}" center  v-for="l in item3" :key="l.code">
    <div>
          <span class="custom-title" @click="changeActTab(l.code,l.grade_advisor_list_count)"> - </span><span class="custom-title">{{l.name}}</span> <span class="custom-title">({{l.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+l.code)">Personal Sales: {{Number(l.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+l.code)"> | Organizational Sales: {{Number(l.grade_advisor_sales).toLocaleString()}}</span>
    </div>


<van-cell-group title="" v-for="(item4,index4) in  l.grade_advisor_list" :key="index4" >
        <van-cell class="outBox1" :id="'qaz' + m.introducer+m.index" :style="{ border: '1px solid '+m.color_code , display: 'none'}" center  v-for="m in item4" :key="m.code">
    <div>
          <span class="custom-title" @click="changeActTab(m.code,m.grade_advisor_list_count)"> - </span><span class="custom-title">{{m.name}}</span> <span class="custom-title">({{m.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+m.code)">Personal Sales: {{Number(m.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+m.code)"> | Organizational Sales: {{Number(m.grade_advisor_sales).toLocaleString()}}</span>
    </div>



<van-cell-group title="" v-for="(item5,index5) in  m.grade_advisor_list" :key="index5" >
        <van-cell class="outBox1" :id="'qaz' + n.introducer+n.index" :style="{ border: '1px solid '+n.color_code , display: 'none'}" center  v-for="n in item5" :key="n.code">
    <div>
          <span class="custom-title" @click="changeActTab(n.code,n.grade_advisor_list_count)"> - </span><span class="custom-title">{{n.name}}</span> <span class="custom-title">({{n.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+n.code)">Personal Sales: {{Number(n.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+n.code)"> | Organizational Sales: {{Number(n.grade_advisor_sales).toLocaleString()}}</span>
    </div>


<van-cell-group title="" v-for="(item6,index6) in  n.grade_advisor_list" :key="index6" >
        <van-cell class="outBox1" :id="'qaz' + o.introducer+o.index" :style="{ border: '1px solid '+o.color_code , display: 'none'}" center  v-for="o in item6" :key="o.code">
    <div>
          <span class="custom-title" @click="changeActTab(o.code,o.grade_advisor_list_count)"> - </span><span class="custom-title">{{o.name}}</span> <span class="custom-title">({{o.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+o.code)">Personal Sales: {{Number(o.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+o.code)"> | Organizational Sales: {{Number(o.grade_advisor_sales).toLocaleString()}}</span>
    </div>



<van-cell-group title="" v-for="(item7,index7) in  o.grade_advisor_list" :key="index7" >
        <van-cell class="outBox1" :id="'qaz' + p.introducer+p.index" :style="{ border: '1px solid '+p.color_code , display: 'none'}" center  v-for="p in item7" :key="p.code">
    <div>
          <span class="custom-title"  @click="changeActTab(p.code,p.grade_advisor_list_count)"> - </span><span class="custom-title">{{p.name}}</span> <span class="custom-title">({{p.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+p.code)">Personal Sales: {{Number(p.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+p.code)"> | Organizational Sales: {{Number(p.grade_advisor_sales).toLocaleString()}}</span>
    </div>



<van-cell-group title="" v-for="(item8,index8) in  p.grade_advisor_list" :key="index8" >
        <van-cell class="outBox1" :id="'qaz' + q.introducer+q.index" :style="{ border: '1px solid '+q.color_code , display: 'none'}" center  v-for="q in item8" :key="q.code">
    <div>
          <span class="custom-title" @click="changeActTab(q.code,q.grade_advisor_list_count)"> - </span><span class="custom-title">{{q.name}}</span> <span class="custom-title">({{q.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+q.code)">Personal Sales: {{Number(q.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+q.code)"> | Organizational Sales: {{Number(q.grade_advisor_sales).toLocaleString()}}</span>
    </div>


<van-cell-group title="" v-for="(item9,index9) in  q.grade_advisor_list" :key="index9" >
        <van-cell class="outBox1" :id="'qaz' + r.introducer+r.index" :style="{ border: '1px solid '+r.color_code , display: 'none'}" center  v-for="r in item9" :key="r.code">
    <div>
          <span class="custom-title" @click="changeActTab(r.code,r.grade_advisor_list_count)"> - </span><span class="custom-title">{{r.name}}</span> <span class="custom-title">({{r.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+r.code)">Personal Sales: {{Number(r.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+r.code)"> | Organizational Sales: {{Number(r.grade_advisor_sales).toLocaleString()}}</span>
    </div>


<van-cell-group title="" v-for="(item10,index10) in  r.grade_advisor_list" :key="index10" >
        <van-cell class="outBox1" :id="'qaz' + s.introducer+s.index" :style="{ border: '1px solid '+s.color_code , display: 'none'}" center  v-for="s in item10" :key="s.code">
    <div>
          <span class="custom-title"> - </span><span class="custom-title">{{s.name}}</span> <span class="custom-title">({{s.grade}})</span>
    </div>
     <div>
   <span class="custom-title"  @click="$router.push('/OrganizeChartDetail2?code='+s.code)">Personal Sales: {{Number(s.personal_sales).toLocaleString()}}</span> <span class="custom-title" @click="$router.push('/OrganizeChartDetail?code='+s.code)"> | Organizational Sales: {{Number(s.grade_advisor_sales).toLocaleString()}}</span>
    </div>


        </van-cell>
       </van-cell-group>

        </van-cell>
       </van-cell-group>

        </van-cell>
       </van-cell-group>

       
        </van-cell>
       </van-cell-group>


        </van-cell>
       </van-cell-group>



        </van-cell>
       </van-cell-group>


        </van-cell>
       </van-cell-group>

        </van-cell>
       </van-cell-group>

        </van-cell>
       </van-cell-group>



        </van-cell>
       </van-cell-group>



          </van-cell>

      </van-cell-group>
          </template>


    </div>
   <!-- <h1>Loading...</h1> -->
  </div>
</template>

<script>
import  {organizeChartApi, organizeChartApi1} from "../api/organize-chart";
import {productList} from "@/api/tools";
export default {
  data() {
    return {
      product_id:'',
      year: [],
        formatted: '',
        selected: '',
         formatted1: '',
        selected1: '',
         start_date: '',
            end_date: '',
			me: {},
		  down_line: [],
      start_date:"",
      end_date:""
		};
  },
  mounted() {
    this.getChildren();
    this.productList();
  },
  filters: {
    NumFormat(value) {
      if(!value) return '0'
      value = value.toFixed(2)
      let intPart = Math.trunc(value)// 获取整数部分
      return intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
      }
  },
  methods: {
    productList() {
      productList()
        .then((res) => {
          console.log(".......productList.........",res)
           this.year = res.product;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    //获取组织图
     onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      },
      onContext1(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted1 = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected1 = ctx.selectedYMD
      },
      search() {
    organizeChartApi1({
          start_date: this.start_date,
           end_date: this.end_date,
           product_id:this.product_id
      })
        .then((res) => {

        console.log("....sss......",res)
        this.me = res.me
        this.down_line = res.first_level_advisor
        
      })
      },
        changeActTab(id,length) {
console.log(".....id.....id....id....","qaz"+id)
console.log(".....length.....length....length....",length)
//document.getElementById("qaz"+id).style.display = "block";
for (let i = 0; i < length; i++) {
  if(document.getElementById("qaz"+id+i).style.display === "block"){
document.getElementById("qaz"+id+i).style.display = "none";
  }
  else{
document.getElementById("qaz"+id+i).style.display = "block";
  }

console.log(".....length.....length....length....","qaz"+id+i)
}

        },
    getChildren() {
      organizeChartApi().then(res => {
        console.log("aaaaaaaaa",res)
        this.me = res.me
        this.down_line = res.first_level_advisor
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.OrganizeChart_info {
  .first .van-cell--center:first-of-type {
   border-bottom: 5px solid black;
  }
}
</style>
<style scoped>
h1 {
  font-size: 50px;
}
/deep/ .van-cell__title {
  width: 30%;
  flex: none;
  text-align: left;
}
/deep/ .van-cell__value {
  color: #323233;
}
/deep/ [class*=van-hairline]::after{
  border :0 solid #fff !important;
  content: none;
}
.OrganizeChart {
  /* width: 100%; */
}
.outBox{
      text-align: left;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    line-height: 30px;
        margin-bottom: 15px;

}
.outBox1{
    text-align: left;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    line-height: 30px;
    margin-bottom: 15px;
    width: 98%;
    float: right;
}

.OrganizeChart_title {
  font-weight: 500;
  text-align: left;
  background-color: #ffc80b;
  line-height: 35px;
  text-indent: 20px;
}
.OrganizeChart_info .ad_icon {
  width: 20vw;
  height: 20vw; /*background-color: #CBCDCE;*/
  margin: 20px auto 10px;
  border-radius: 10px;
}
.inputBox {
  width: 90%;
  margin: 30px auto;
}
.van-cell__title {
  width: 50%;
}
.search{
  background: #7b655d;
    border: 1px solid #7b655d;
        margin-top: 12px;
}
.right-icon {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
}
.right-icon i {
  margin-top: 10px;
  cursor: pointer;
}
.slect-boxdiv select{
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.btn-search{
  background-color: #6c757d;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #6c757d;
  height: 35px;
}
</style>

