'use strict';
const bar = document.querySelector('#menu');
const nav = document.querySelector('.navbar');
const closeSearch = document.querySelector('#searchminus');
const close = document.querySelector('#close');
const search = document.querySelector('#searchPro');
const search1 = document.querySelector('.fa-search');
const searchOpen = document.querySelector('#searchbar');


if (bar) {
    bar.addEventListener("click", function() {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener("click", function() {
        nav.classList.remove('active');
    })
}

if (search) {
    search.addEventListener("click", function() {
        searchOpen.classList.remove("hidden")
        closeSearch.classList.remove("minus")
        search1.classList.remove("fa-search")
    })
}
if (closeSearch) {
    closeSearch.addEventListener("click", function() {
        search1.classList.add("fa-search")
        closeSearch.classList.add("minus")
        searchOpen.classList.add("hidden")
    })
}