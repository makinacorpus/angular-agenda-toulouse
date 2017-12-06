*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library

*** Variables ***
${SERVER}         http://localhost:4200/ban
${BACKEND}        http://localhost:8000
${BROWSER}        Chrome
${DELAY}          0
${BACKEND_DELAY}  300milliseconds

*** Keywords ***
    # Import library  DebugLibrary
    # Debug
    # Import library  Dialogs
    # Pause execution

Lancer le navigateur
    Open Browser    ${SERVER}    ${BROWSER}
    Set Selenium Speed    ${DELAY}

Chercher une adresse
    Go to   ${SERVER}
    Input text  mat-input-0  '52 rue babinet toulouse'
    Click Element   css=input[type=submit]

