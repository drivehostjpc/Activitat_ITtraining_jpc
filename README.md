# Activitat_ITtraining_jpc

En aquest repositori ***```Activitat_ITtraining_jpc```*** la branca principal (***```master```***) no fa res.

Analitzarem el contingut del fitxer ```index.html```.

## Dins de l'apartat contingut entre les etiquetes ***```<head>```*** i ***```</head>```***.

Dins de l'apartat ***```<head>```***, apareix el titol de la pàgina, fem servir la imatge <img src="./images/favicon.png" alt="favicon" style="height: 16px;"/> ***```favicon.png```*** que hi ha dins de la carpeta ***```images```***, com a icona de la web. I també es fa referència al fitxer d'estils ***```estils.css```*** que hi ha dins de la carpeta ***```css```***.

```html
<html lang="ca">
  <head>
    <meta charset="utf-8">
    <title>ITtraining</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.png" />
    <link rel="stylesheet" type="text/css" href="css/estils.css" />
  </head>
```

## Dins de l'apartat contingut entre les etiquetes ***```<body>```*** i ***```</body>```***.

Dins de l'apartat ***```<header>```***, apareix el titol de la pàgina, que apareixerà fix durant tota l'execució de la pàgina web.

```html
  <body>
    <header>
      <span class="vermell">IT</span>
      <span class="groc">training</span>&nbsp;
      <span class="verd">SQL</span>
    </header>
```
A continuació apareixen els elements ```HTML``` de caire semàntic, com són ***```<main>```***, ***```<article>```*** i ***```<form>```***.

``` html
    <main>
      <article>
        <form>
```

I és dins del següent element ***```<section>```***, que la pàgina funcionarà com una single-page application (SPA), és a dir que la pàgina tindrà tants elements ***```<section>```*** com preguntes tingui el questionari. I dels diferetnts elements ***```<section>```*** tots estarán ocults, llevat d'aquell que correspon a la pregunta a on es troba l'usuari.

Per fer que els elements siguin visibles o no, tenim definides dues classes.

```css
.elementOcult {
  display: none;
}

.elementVisible {
  display: flex;
}
```

La classe ```elementOcult``` que té l'atribut ```display``` a ```none``` per aconseguir que l'element no aparegui, i la classe ```elementVisible``` que té l'atribut ```display``` a ```flex``` per aconseguir que l'element aparegui.

Per defecte, tots els elements ***```<section>```*** tindrán la classe ```elementOcult``` per tal de que no siguin visibles, llevat de l'element ***```<section>```*** que fa refència a la primera pergunta, que apareixeran amb la classe ```elementVisible``` per tal de que sigui l'únic visible.