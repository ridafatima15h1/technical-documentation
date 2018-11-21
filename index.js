/*------------------------------------------*/
/*//////#ADJUSTING_DESIGNING_ELEMENTS///////*/
/*------------------------------------------*/

body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: whitesmoke;
}

#container {
    margin: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 230px 1fr;
    grid-template-rows: 200px 1fr;
    grid-column-gap: 4px;
}

#navbar {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    display: grid;
    grid-template-rows: 70px 1fr;
    grid-template-columns: 230px;
    position: fixed;
    z-index: 1;
    height: 100vh;
    width: 230px;
    border-right: solid;
    grid-row-gap: 1px;
}

#main-doc {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    padding-left: 3em;
    padding-right: 3em;
    padding-bottom: 3em;
    border-left: 8px solid;
    border-left-color: cadetblue;
    border-top: 8px solid;
    border-top-style: double;
    border-top-color: cadetblue;
}

#navbar-links {
    display: grid;
    grid-template-rows: repeat(20, 50px);
    grid-template-columns: 230px;
    grid-row: 2 / 23;
    overflow-y: auto;
    overflow-x: hidden;
    border-top: 5px solid;
    border-bottom: 5px solid;
}

a {
    text-decoration: none;
    color: black;
    padding-left: 4px;
    font-size: 1.2em;
    line-height: 1.6;
    word-spacing: 6px;
    letter-spacing: 0.8px;
}

#nav-header {
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid;
    border-color: whitesmoke;
    border-style: double;
    background-color: cadetblue;
    color: whitesmoke;
}

#link-1 {
    grid-row: 1 / 2;
}

#link-2 {
    grid-row: 2 / 3;
}

#link-3 {
    grid-row: 3 / 4;
}

#link-4 {
    grid-row: 4 / 5;
}

#link-5 {
    grid-row: 5 / 6;
}

#link-6 {
    grid-row: 6 / 7;
}

#link-7 {
    grid-row: 7 / 8;
}

#link-8 {
    grid-row: 8 / 9;
}

#link-9 {
    grid-row: 9 / 10;
}

#link-10 {
    grid-row: 10 / 11;
}

#link-11 {
    grid-row: 11 / 12;
}

#link-12 {
    grid-row: 12 / 13;
}

#link-13 {
    grid-row: 13 / 14;
}

#link-14 {
    grid-row: 14 / 15;
}

#link-15 {
    grid-row: 15 / 16;
}

#link-16 {
    grid-row: 16 / 17;
}

#link-17 {
    grid-row: 17 / 18;
}

#link-18 {
    grid-row: 18 / 19;
}

#link-19 {
    grid-row: 19 / 20;
}

#link-20 {
    grid-row: 20 / 21;
}

#link-1,
#link-2,
#link-3,
#link-4,
#link-5,
#link-6,
#link-7,
#link-8,
#link-9,
#link-10,
#link-11,
#link-12,
#link-13,
#link-14,
#link-15,
#link-16,
#link-17,
#link-18,
#link-19,
#link-20 {
    border-bottom: 1px solid;
    display: flex;
    align-items: center;
}

h1 {
    font-size: 1.8em;
}

h2 {
    font-size: 3em;
    color: cadetblue;
}

h3 {
    font-size: 1.5em;
}

p,
ul {
    font-size: 18px;
    line-height: 1.6;
    word-spacing: 6px;
    letter-spacing: 0.8px;
}

.embed {
    max-width: 500px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    border: 8px solid;
    border-color: cadetblue;
    padding: 1px;
}

section {
    display: none;
}

#introduction {
    display: block;
}

.nav-link:hover {
    text-decoration: underline;
    background-color: cadetblue;
    font-weight: bold;
}

.nav-select {
    text-decoration: underline;
    font-weight: bold;
    background-color: cadetblue;
}

pre {
    white-space: pre-line;
    border: 0.5px solid;
    background-color: lightgrey;
    border-color: whitesmoke;
    padding: 8px;
    margin: 2em;
    line-height: 1.4;
    letter-spacing: 0.5px;
    word-spacing: 5px;
}

code {
    border: 0.5px solid;
    border-color: whitesmoke;
    background-color: lightgrey;
    padding-left: 1px;
    padding-right: 1px;
    font-size: 16px;
}

pre > code {
    border: none;
}

section {
    padding-top: 1vh;
}

#header-small,
#hamburger-btn,
#blur,
#hamburger-menue,
#cross,
#cross-link,
#menu-select {
    display: none;
}

/*********#EXAMPLES*********/

#grid-example-1 {
    background: LightGray;
    border: 5px solid;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    font-size: 4em;
    line-height: 2em;
    text-align: center;
    vertical-align: middle;
    width: fit-content;
    height: auto;
    margin: auto;
}

.item-1 {
    background: LightSkyBlue;
}

.item-2 {
    background: LightSalmon;
}

.item-3 {
    background: PaleTurquoise;
}

.item-4 {
    background: LightPink;
}

.item-5 {
    background: PaleGreen;
}

/**************************************/


/*----------------------------------------------------*/
/*///////////////////#MEDIA_QUERIES///////////////////*/
/*----------------------------------------------------*/


@media only screen and (min-width: 650px) {
    #grid-example-1 {
        grid-template-columns: 120px 120px 120px;
        grid-template-rows: 120px 120px 120px;
    }
}

@media only screen and (max-width: 400px) {
    #grid-example-1 {
        grid-template-columns: 70px 70px 70px;
        grid-template-rows: 70px 70px 70px;
        font-size: 3em;
        line-height: 1.5em;
    }
}

@media only screen and (max-width: 750px) {

    #container {
        grid-template-rows: 10vh 40px 1fr 10vh;
        grid-template-columns: 10vw 1fr 10vw;
    }

    h2 {
        font-size: 2.5em;
    }

    #navbar {
        display: none;
    }

    #header-small {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 5px solid;
        border-color: whitesmoke;
        border-style: double;
        background-color: cadetblue;
        color: whitesmoke;
        position: fixed;
        width: 100%;
        height: 10vh;
        margin: 0;
    }

    #main-doc {
        grid-column: 1 / 4;
        grid-row: 3 / 5;
        padding: 10px;
        border-left: none;
        border-bottom: 5px solid;
        border-bottom-color: cadetblue;
        border-top: none;
        margin-top: 0px;
        padding-top: 0px;
    }

    section {
        grid-column: 1 / 4;
        grid-row: 3 / 5;
        padding-top: 15vh;
    }

    #hamburger-btn {
        color: cadetblue;
        background-color: whitesmoke;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 5px;
        padding-right: 5px;
        padding-top: 5px;
        padding-left: 10px;
        position: fixed;
        top: 11vh;
        width: 100%;
        height: 2em;
        border-bottom: 5px solid;
        border-bottom-color: cadetblue;
    }

    #blur {
        grid-row: 1 / 5;
        grid-column: 1 / 4;
        z-index: 1;
        background-color: cadetblue;
        opacity: 0.5;
    }

    #navbar {
        border-right: none;
        grid-row-gap: 0px;
        position: fixed;
        z-index: 3;
        height: 90vh;
        width: 80vw;
        /* centers both horizontally and vertically */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        /****/
        background-color: whitesmoke;
        border: 8px solid;
        border-style: double;
        border-color: cadetblue;
        display: none;
        grid-template-columns: 1fr;
        grid-template-rows: 70px 1fr;
    }

    #nav-header {
        display: none;
    }

    #cross {
        display: block;
    }

    #cross-link {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        justify-content: center;
        align-items: center;
        color: cadetblue;
        border-bottom: 8px solid;
        border-bottom-color: cadetblue;
        cursor: pointer;
    }

    #navbar-links {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        grid-template-columns: 1fr;
    }

    #menu-select > p,
    #menu-select {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 10vh;
        left: 30vw;
        font-size: 30px;
        color: cadetblue;
        background-color: whitesmoke;
        height: 0px;
        line-height: 1.6;
        letter-spacing: 0.6px;
        word-spacing: 5px;
    }
}
