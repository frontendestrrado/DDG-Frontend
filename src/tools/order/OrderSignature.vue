<template>
    <div>
       <div></div> 
      <CustomerApplication></CustomerApplication>
      <KYC></KYC>
      <LetterOfWishes></LetterOfWishes>
      <PDPAMemo></PDPAMemo>
      <DocumentChecklist></DocumentChecklist>
    </div>
</template>
<script>
import CustomerApplication from "@/tools/order/CustomerApplication";
import KYC from "@/tools/order/KYC";
import LetterOfWishes from "@/tools/order/LetterOfWishes";
import PDPAMemo from "@/tools/order/PDPAMemo";
import DocumentChecklist from "@/tools/order/DocumentChecklist";
export default {
    components:{
        CustomerApplication,KYC,LetterOfWishes,PDPAMemo,DocumentChecklist
    }
}
</script>
<style scoped>

</style>