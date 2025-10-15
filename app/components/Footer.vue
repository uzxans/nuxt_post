<!-- @format -->

<template>
  <div class="footer_mob">
    <ul class="footer_mob_box">
      <a class="footer_mob_box_a" href=""><i class="icon-big-application-white"></i></a>
      <a class="footer_mob_box_a" href=""><i class="analytics-icon"></i></a>
      <a class="footer_mob_box_a" href=""><i class="objects-analitic-icon"></i></a>
      <a class="footer_mob_box_a" href=""><i class="person2-icon"></i></a>
      <a
        class="footer_mob_box_a"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRightMenuMobile"
        aria-controls="offcanvasRightMenuMobile"
        ><i class="list-large-icon"></i
      ></a>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRightMenuMobile"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            <img src="/accets/img/logo/logo.svg" alt="" class="logo_img" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="mobile_menu_content">
            <ul>
              <li>
                <a class="active" href="#"
                  ><i class="icon-admin"></i><span>Администрирование</span></a
                >
              </li>
              <li>
                <a href=""><i class="search-big-icon"></i><span>Поиск</span></a>
              </li>
              <li>
                <a href=""><i class="analytics-icon"></i><span>Аналитика</span></a>
              </li>
              <li>
                <a href="/object.html"
                  ><i class="objects-analitic-icon"></i><span>Объекты</span></a
                >
              </li>
              <li>
                <a href=""><i class="person2-icon"></i><span>HR</span></a>
              </li>
              <li>
                <a href=""><i class="icon-big-application"></i><span>Мои заявки</span></a>
              </li>
              <li>
                <a href=""><i class="icon-account"></i><span>Мой аккаунт</span></a>
              </li>
              <hr />
              <li>
                <a href=""><i class="video-little-icon"></i><span>Видео встреча</span></a>
              </li>
              <li>
                <a href=""><i class="icon-knowledge"></i><span>База знаний</span></a>
              </li>
              <li>
                <a href=""><i class="icon-support"></i><span>Тех. поддержка</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>
