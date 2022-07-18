$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featureFiles/regis.feature");
formatter.feature({
  "name": "Register Aplikasi GTPL Bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register dengan email valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman register",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_sedang_berada_di_halaman_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan email \"yanwarsolah@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol submit",
  "keyword": "And "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_menekan_tombol_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User akan melihat kredensial yang diberikan \"Access details to demo site.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_akan_melihat_kredensial_yang_diberikan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register dengan email invalid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman register",
  "keyword": "Given "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_sedang_berada_di_halaman_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan email \"yanwarsolah.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol submit",
  "keyword": "And "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_menekan_tombol_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User akan melihat pesan validasi \"Email ID is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definition.RegistTestDefinition.user_akan_melihat_pesan_validasi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});