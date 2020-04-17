import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from './app.po';
import { browser } from 'protractor'

defineSupportCode(({ Given, When, Then, Before , setDefaultTimeout}) => {

   setDefaultTimeout(60 * 1000000);

  let app: AppPage;

  Before(() => {
    app = new AppPage();
  });

  Given('Je suis sur le site de la todolist', function (callback) {
     app.navigateTo().then(function(){
      callback()
   });
  })

  When('J\'ajoute la tâche nommée {string} dans ma todolist', function (text: string,callback) {
     app.ajoutTache(text).then(function(){
      callback()
   });
  })

  When('Je change d\'état la première tâche dans ma todolist en réalisée', function (callback) {
     app.changementStatutPremiereTacheReal().then(function(){
      callback()
   });
  });

  When('Je change d\'état la première tâche dans ma todolist en non-réalisée',function(callback){
     app.changementStatutPremiereTacheNonReal().then(function(){
      callback()
   });
  });

  When('Je supprime la tâche de ma todolist',function(callback){
     app.suppressiontache().then(function(){
      callback()
   });
});

  Then('Je vois la tâche {string} dans ma liste',function(text:string,callback){
     app.verificationAjoutTache(text).then(function(){
      callback()
   });
});

  Then('Je vois la première tâche comme reéalisée dans ma liste',function(callback){
     app.verificationPremiereTacheExecutee().then(function(){
      callback()
   });
});

  Then('Je vois la première tâche comme non-reéalisée dans ma liste',function(callback){
     app.verificationPremiereTacheNonExecutee().then(function(){
      callback()
   });
});

  Then('Je ne vois aucune tâche dans ma liste',function(callback){
     app.verificationPlusDeTacheDansLaListe().then(function(){
      callback()
   });
});

});