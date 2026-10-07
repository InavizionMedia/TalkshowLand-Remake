/* TalkshowLand-Remake v1 — shared behavior */
(function(){
  "use strict";

  /* header state */
  var header = document.getElementById("siteHeader");
  var onScroll = function(){
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  /* mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function(){
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function(e){
      if (e.target.closest(".sub-toggle")) return; /* handled below */
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    /* submenu toggle (mobile) */
    Array.prototype.forEach.call(links.querySelectorAll(".sub-toggle"), function(btn){
      btn.addEventListener("click", function(e){
        e.stopPropagation();
        var li = btn.closest(".has-sub");
        var open = li.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* active nav link */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(function(a){
    if (a.getAttribute("href").toLowerCase() === page) a.classList.add("active");
    if (page === "video-player.html" && a.getAttribute("href").toLowerCase() === "streaming.html") a.classList.add("active");
  });

  /* hero slider */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
  var dotsWrap = document.querySelector(".hero-dots");
  if (slides.length > 1) {
    var idx = 0, timer = null;
    var dots = slides.map(function(_, i){
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Slide " + (i + 1));
      b.addEventListener("click", function(){ go(i); restart(); });
      dotsWrap.appendChild(b);
      return b;
    });
    var go = function(i){
      slides[idx].classList.remove("active"); dots[idx].classList.remove("active");
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add("active"); dots[idx].classList.add("active");
    };
    var restart = function(){
      if (timer) clearInterval(timer);
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        timer = setInterval(function(){ go(idx + 1); }, 7000);
      }
    };
    document.querySelectorAll(".hero-arrow").forEach(function(btn){
      btn.addEventListener("click", function(){
        go(idx + (btn.classList.contains("next") ? 1 : -1)); restart();
      });
    });
    go(0); restart();
  }

  /* carousels (Swiper via CDN, graceful if offline) */
  function initRails(){
    if (typeof Swiper === "undefined") return;
    document.querySelectorAll(".rail .swiper").forEach(function(el){
      var perView = parseInt(el.getAttribute("data-per-view") || "3", 10);
      var loop = el.getAttribute("data-loop") !== "false";
      new Swiper(el, {
        slidesPerView: perView,
        spaceBetween: 22,
        loop: loop,
        watchOverflow: true,
        speed: 500,
        navigation: {
          nextEl: el.closest(".rail").querySelector(".rail-btn.next"),
          prevEl: el.closest(".rail").querySelector(".rail-btn.prev")
        },
        breakpoints: {
          0:   { slidesPerView: 1 },
          640: { slidesPerView: Math.min(perView, 2.2) },
          1024:{ slidesPerView: perView }
        }
      });
    });
  }
  if (document.readyState === "complete") initRails();
  else window.addEventListener("load", initRails);

  /* shows filter — dropdown, exclusive, 300ms fade */
  var fsel = document.getElementById("filterSelect");
  var grid = document.getElementById("filterGrid");
  if (fsel && grid) {
    var current = document.getElementById("filterCurrent");
    var menu = document.getElementById("filterMenu");
    var value = document.getElementById("filterValue");
    var items = Array.prototype.slice.call(menu.querySelectorAll("[data-filter]"));
    var slides = Array.prototype.slice.call(grid.querySelectorAll(".swiper-slide"));
    var rail = document.getElementById("filterRail");
    function filterSwiper(){ var el = document.getElementById("filterSwiper"); return el && el.swiper; }
    function closeMenu(){ menu.hidden = true; current.setAttribute("aria-expanded","false"); fsel.classList.remove("open"); }
    function applyFilter(f, label){
      items.forEach(function(i){
        var on = i.getAttribute("data-filter") === f;
        i.classList.toggle("active", on);
        i.setAttribute("aria-selected", on ? "true" : "false");
      });
      value.textContent = label;
      grid.classList.add("fading");
      setTimeout(function(){
        var match = slides.filter(function(s){
          var tags = (s.querySelector(".card").getAttribute("data-tags") || "").split(" ");
          return (f === "all") || tags.indexOf(f) !== -1;
        });
        var sw = filterSwiper();
        if (sw) { sw.removeAllSlides(); if (match.length) sw.appendSlide(match); sw.slideTo(0, 0); sw.update(); }
        grid.classList.remove("fading");
      }, 160);
    }
    current.addEventListener("click", function(e){
      e.stopPropagation();
      var open = menu.hidden;
      if (open) { menu.hidden = false; current.setAttribute("aria-expanded","true"); fsel.classList.add("open"); }
      else closeMenu();
    });
    items.forEach(function(item){
      item.addEventListener("click", function(){
        applyFilter(item.getAttribute("data-filter"), item.textContent.trim());
        closeMenu();
      });
    });
    document.addEventListener("click", function(e){ if (!fsel.contains(e.target)) closeMenu(); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeMenu(); });
    /* deep link: shows.html#f=<tag> preselects the filter (waits for the rail swiper) */
    function applyHashFilter(){
      var m = (location.hash || "").match(/^#f=([a-z]+)$/);
      if (!m) return;
      for (var k = 0; k < items.length; k++) {
        if (items[k].getAttribute("data-filter") === m[1]) {
          applyFilter(m[1], items[k].textContent.trim());
          break;
        }
      }
    }
    (function tryHash(n){
      if (filterSwiper()) { applyHashFilter(); }
      else if (n < 25) { setTimeout(function(){ tryHash(n + 1); }, 200); }
    })(0);
    window.addEventListener("hashchange", function(){
      if (filterSwiper()) applyHashFilter();
    });
    if (/^#f=[a-z]+$/.test(location.hash) && history.replaceState) history.replaceState(null, "", location.pathname + location.search);
  }

  /* newsletter (honest placeholder) */
  var form = document.getElementById("newsForm");
  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var band = document.getElementById("newsband");
      if (band) band.classList.add("done");
    });
  }
})();

/* video lightbox — every preview thumbnail opens the test video */
(function(){
  var TEST_VIDEO = "assets/streaming-hero.mp4";
  var lb = document.createElement("div");
  lb.className = "vlb";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-label", "Video player");
  lb.innerHTML = '<div class="vlb-box"><button class="vlb-close" aria-label="Close video"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><path d="M5 5l14 14M19 5L5 19"/></svg></button><video controls playsinline preload="metadata"></video></div>';
  document.body.appendChild(lb);
  var video = lb.querySelector("video");
  function openLb(){
    video.src = TEST_VIDEO;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    var p = video.play();
    if (p && p.catch) p.catch(function(){});
  }
  function closeLb(){
    video.pause();
    video.removeAttribute("src");
    video.load();
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  lb.querySelector(".vlb-close").addEventListener("click", closeLb);
  lb.addEventListener("click", function(e){ if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && lb.classList.contains("open")) closeLb();
  });
  document.addEventListener("click", function(e){
    var th = e.target.closest ? e.target.closest(".thumb") : null;
    if (!th || !th.querySelector(".play") || th.closest("a")) return;
    e.preventDefault();
    openLb();
  });
})();
