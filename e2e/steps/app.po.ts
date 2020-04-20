import { browser, by, element, until, Key, ExpectedConditions as EC } from 'protractor';
import $ = require('jquery');
import expect = require('expect')
import { protractor } from 'protractor/built/ptor';
import { setDefinitionFunctionWrapper } from 'cucumber';

export class AppPage {

  public async navigateTo() {
    var defer = protractor.promise.defer();

    //browser.driver.get('http://angular.io/').then(function () {
    browser.driver.get('http://qa.appvizer.net/').then(function () {
      browser.wait(EC.visibilityOf(element(by.css('.header h1'))), 6000, "titre").then(function (visibility) {
        defer.fulfill(visibility)
      })
    })
    return defer.promise;
  }

  public async ajoutTache(text: string) {
    var defer = protractor.promise.defer();
    element(by.css('.new-todo'))
      .sendKeys(text).then(function () {
        element(by.css('.new-todo'))
          .sendKeys(Key.ENTER).then(function () {
            defer.fulfill(true);
          })
      })
    return defer.promise
  }

  public async verificationAjoutTache(text: string) {
    var defer = protractor.promise.defer();
    browser.wait(EC.visibilityOf(element(by.css('.todo-list label'))), 6000, "label").then(function () {
      element(by.css('.todo-list label')).getText().then(function (texte) {
        expect(text).toEqual(texte);
        defer.fulfill(true);

      })
    })
    return defer.promise

  }

  public async changementStatutPremiereTacheReal() {
    var defer = protractor.promise.defer();
    browser.wait(EC.visibilityOf(element(by.css('.toggle'))), 6000, "bouton status").then(function () {
      element(by.css('.toggle')).click()
      defer.fulfill(true)

    })
    return defer.promise

  }

  public async changementStatutPremiereTacheNonReal() {
    var defer = protractor.promise.defer();
    browser.wait(EC.visibilityOf(element(by.css('.toggle'))), 6000, "bouton status").then(function () {
      element(by.css('.toggle')).click()
      defer.fulfill(true)

    })
    return defer.promise

  }

  public async verificationPremiereTacheExecutee() {
    var defer = protractor.promise.defer();
    browser.wait(EC.visibilityOf(element(by.css('.completed label'))), 6000, "etat1").then(function (visibility) {
      expect(visibility).toEqual(true)
      defer.fulfill(true)

    })
    return defer.promise

  }

  public async verificationPremiereTacheNonExecutee() {
    var defer = protractor.promise.defer();
    browser.wait(EC.visibilityOf(element(by.css('.todo-list label'))), 6000, "etat2").then(function (visibility) {
      expect(visibility).toEqual(true)
      defer.fulfill(true)

    })
    return defer.promise

  }
  public async suppressiontache() {
    var defer = protractor.promise.defer();
  browser.wait(EC.visibilityOf(element(by.css('.todo-list label'))), 6000, "destroy1").then(function () {
    browser.actions().mouseMove(element(by.css('.todo-list label'))).click().perform().then(function () {
      browser.wait(EC.visibilityOf(element(by.css('.destroy'))), 6000, "destroy2").then(function () {
        element(by.css('.destroy')).click()
        defer.fulfill(true)

      })
    })
  })
    return defer.promise
  }

  public async verificationPlusDeTacheDansLaListe() {
    var defer = protractor.promise.defer();
    browser.wait(EC.invisibilityOf(element(by.css('.completed label'))), 6000, "label completed").then(function (visibility) {
      browser.wait(EC.invisibilityOf(element(by.css('.todo-list label'))), 6000, "label").then(function (visibility2) {
        expect(visibility && visibility2).toEqual(true)
        defer.fulfill(true)

      })
    })
    return defer.promise

  }




}
