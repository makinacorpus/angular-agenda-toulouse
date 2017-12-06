*** Settings ***
Documentation     A test suite with basic tests
Resource          ressources.robot

*** Test Cases ***

Scénario nominal
    Lancer le navigateur
    ## INIT PROJET
    Chercher une adresse
