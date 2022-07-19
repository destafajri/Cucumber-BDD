$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featureFile/payment.feature");
formatter.feature({
  "name": "Payment Test(DESTA)",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User berada di page Checkout",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.defition.user_berada_di_page_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Melakukan checkout",
  "keyword": "When "
});
formatter.match({
  "location": "definition.defition.melakukan_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User berada di page payment \"Payment Process\"",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_berada_di_page_payment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi kartu kredit 1234657891234567",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_kartu_kredit(long)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi expired month 12",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_expired_month(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi expired year cc 2028",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_expired_year_cc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi CVVcode 123",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_CVVcode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User melaukukan payment",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_melaukukan_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mendapatkan validasi \"Payment successfull!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.defition.user_mendapatkan_validasi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "inValid Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User berada di page Checkout",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.defition.user_berada_di_page_Checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Melakukan checkout",
  "keyword": "When "
});
formatter.match({
  "location": "definition.defition.melakukan_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User berada di page payment \"Payment Process\"",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_berada_di_page_payment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi kartu kredit 123456789",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_kartu_kredit(long)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi expired month 12",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_expired_month(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi expired year cc 2022",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_expired_year_cc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mengisi CVVcode 123",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_mengisi_CVVcode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User melaukukan payment",
  "keyword": "And "
});
formatter.match({
  "location": "definition.defition.user_melaukukan_payment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User mendapatkan notifikasi alert \"Check card number is 16 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.defition.user_mendapatkan_notifikasi_alert(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});