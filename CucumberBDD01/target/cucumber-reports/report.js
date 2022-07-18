$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featureFiles/login.feature");
formatter.feature({
  "name": "Login Apps GTPL Bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_sedang_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan userID \"mngr422858\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_memasukan_userID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan password \"tatUper\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_memasukan_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_menekan_tombol_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User harus berada di halaman \"Welcome To Manager\u0027s Page of GTPL Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_harus_berada_di_halaman(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid user",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_sedang_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan userID \"xxxxxxxxx\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_memasukan_userID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan password \"yyyyyyy\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_memasukan_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_menekan_tombol_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User harus mendapatkan notifikasi \"User is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginDef.user_harus_mendapatkan_notifikasi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});