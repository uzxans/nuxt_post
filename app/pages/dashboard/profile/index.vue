<!-- @format -->

<script setup lang="ts">
import { ref, onMounted } from "vue";

const user = ref<{ username: string } | null>(null);

onMounted(async () => {
  try {
    const res = await $fetch("/api/auth/me", { credentials: "include" });
    user.value = res.user;
  } catch {
    user.value = null;
  }
});
</script>

<template>
  <div class="main">
    <div class="header_info">
      <h1>Личный кабинет</h1>
    </div>
    <!-- End header_info -->
    <div class="container_crm">
      <div class="row">
        <!--Start-Left Info-->
        <div class="col-xl-4 col-md-4 col-12 mb-2">
          <div class="user_lk_info">
            <div class="img_box_user_info">
              <div class="box_img">
                <img id="imgFoto" src="./accets/img/zaglushkaImgBlack.png" alt="user" />
                <button
                  class="btn btnAddImg"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropImg"
                >
                  <i class="photo-icon"></i>
                </button>
              </div>
              <div class="status_user">
                <h5>Должность</h5>
                <p class="status_user">
                  Менеджер по объекта
                  <button class="btn setting_mob"><i class="time-green-icon"></i></button>
                </p>
              </div>
            </div>
            <!-- Modal AddImg-->
            <!-- Modal AddImg-->
            <div
              class="modal fade"
              id="staticBackdropImg"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5">Загрузите фото</h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Закрыть"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label for="formFile" class="form-label">Выберите фото</label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                      />
                    </div>

                    <!-- Область для редактирования -->
                    <div class="d-flex justify-content-center">
                      <img id="imageCropper" style="max-width: 100%; display: none" />
                    </div>

                    <!-- Круглый предпросмотр -->
                    <div class="text-center mt-3">
                      <div
                        style="
                          width: 150px;
                          height: 150px;
                          border-radius: 50%;
                          overflow: hidden;
                          margin: auto;
                          border: 2px solid #ddd;
                        "
                      >
                        <img
                          id="previewCircle"
                          style="width: 100%; height: 100%; object-fit: cover"
                        />
                      </div>
                      <p class="mt-2">Предпросмотр в круге</p>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Отмена
                    </button>
                    <button type="button" id="cropBtn" class="btn btn-primary">
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--img_box_user_info-->

            <div class="form_lk">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ФИО</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value="{user.username}"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Логин</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Пароль</label>
                <div class="input-group mb-3">
                  <input
                    class="form-control password block mt-1 w-full"
                    id="password"
                    type="password"
                    name="password"
                    value="secret!"
                    required
                  />
                  <span class="input-group-text togglePassword" id="">
                    <i
                      class="icon-eye-white"
                      data-feather="eye"
                      style="cursor: pointer"
                    ></i>
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Номер телефона</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="btn btn-send">Сохранить</div>
            </div>
          </div>
          <!--END-user_lk_info-->
          <div class="user_lk_info">
            <div class="phone_box">
              <p>Для телефона</p>
              <div class="icon">
                <a class="download_link" href="#"><i class="icon-android"></i></a>
                <a class="download_link" href="#"><i class="icon-appstore"></i></a>
              </div>
            </div>
            <hr />
            <div class="phone_box">
              <p>Для компьютера</p>
              <div class="icon">
                <a href="#" class="download_link"><i class="icon-windows"></i></a>
                <a href="#" class="download_link"><i class="apple-icon"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--End Left Info-->

        <!--Start-right Info-->
        <div class="col-xl-8 col-md-8 col-12 mb-2">
          <div class="content_info_user_lk">
            <div class="row">
              <div class="rox_box col-lg-6 col-xxl-4">
                <div class="big_box">
                  <div class="big_box_header">
                    <i class="icon-big-objects-white"></i>
                    <h4>Объеты</h4>
                  </div>
                  <div class="big_box_footer">
                    <p>Количество объектов</p>
                    <div class="number_info">
                      <div class="info">40</div>
                    </div>
                  </div>
                </div>
                <div class="midl_box">
                  <div class="big_box_header">
                    <i class="icon-calendar"></i>
                    <h4>Календарь</h4>
                  </div>
                  <div class="big_box_footer">
                    <p>Количество задач на неделю</p>
                    <div class="number_info">
                      <div class="info">15</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rox_box col-lg-6 col-xxl-4">
                <div
                  class="midl_box"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  type="button"
                >
                  <div class="big_box_header">
                    <svg
                      width="57"
                      height="45"
                      viewBox="0 0 57 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3089_3039)">
                        <path
                          d="M28.5 4.73684C25.3506 4.73684 22.3301 5.98449 20.1031 8.20531C17.8761 10.4261 16.625 13.4382 16.625 16.5789V21.3158H14.25C12.3975 21.3158 9.96313 22.0311 8.0275 23.5989C6.17025 25.1053 4.75 27.4074 4.75 30.7895C4.75 34.1384 6.21063 36.4453 8.1225 37.9705C10.108 39.5574 12.5542 40.2632 14.25 40.2632C16.5609 40.2632 19.5676 40.2276 21.9996 39.0292C23.1515 38.4608 24.1371 37.6437 24.8567 36.4311C25.5835 35.2066 26.125 33.4232 26.125 30.7895V28.2174L22.5625 31.77L19.2043 28.4211L28.5 19.1511L37.7957 28.4211L34.4375 31.77L30.875 28.2174V30.7895C30.875 34.0745 30.1957 36.7342 28.9465 38.8421C27.8033 40.7625 26.1181 42.3046 24.1015 43.2758C20.6007 45 16.5751 45 14.383 45H14.25C11.476 45 7.98475 43.9295 5.15375 41.6676C2.23963 39.3466 0 35.73 0 30.7895C0 25.8821 2.14462 22.2632 5.035 19.9208C7.0194 18.3295 9.37027 17.2566 11.875 16.7992V16.5789C11.875 12.1819 13.6266 7.96502 16.7444 4.85586C19.8621 1.74671 24.0908 0 28.5 0C32.9092 0 37.1379 1.74671 40.2556 4.85586C43.3734 7.96502 45.125 12.1819 45.125 16.5789V16.7992C47.6297 17.2566 49.9806 18.3295 51.965 19.9208C54.8601 22.2655 57 25.8821 57 30.7895C57 35.7063 54.8459 39.3489 51.7631 41.7008C48.7564 43.9934 44.9587 45 41.5625 45H32.0625V40.2632H41.5625C44.1038 40.2632 46.8374 39.4934 48.8775 37.9374C50.8416 36.4405 52.25 34.1621 52.25 30.7895C52.25 27.4074 50.8298 25.1053 48.9725 23.5989C47.0345 22.0311 44.6025 21.3158 42.75 21.3158H40.375V16.5789C40.375 13.4382 39.1239 10.4261 36.8969 8.20531C34.6699 5.98449 31.6494 4.73684 28.5 4.73684Z"
                          fill="#E6ECE5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3089_3039">
                          <rect width="57" height="45" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h4>Диск</h4>
                  </div>
                  <div class="big_box_footer">
                    <p>Количество файлов в диске</p>
                    <div class="number_info">
                      <div class="info">15</div>
                    </div>
                  </div>
                </div>
                <div class="big_box">
                  <div class="big_box_header">
                    <i class="icon-tasks-white"></i>
                    <h4>Задачи</h4>
                  </div>
                  <div class="big_box_footer">
                    <p>Количество задач</p>
                    <div class="number_info">
                      <div class="info">124</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rox_box col-lg-12 col-xxl-4">
                <div class="big_box">
                  <div class="big_box_header">
                    <i class="icon-big-application-white"></i>
                    <h4>Мои заявки</h4>
                  </div>
                  <div class="big_box_footer">
                    <p>Количество заявок</p>
                    <div class="number_info">
                      <div class="info">6118</div>
                    </div>
                  </div>
                </div>
                <a href="#" target="_blank" class="telegram_box">
                  <h4>Уведомление Авантаж</h4>
                  <i class="icon-telega"></i>
                </a>
              </div>
            </div>

            <div class="chart_box">
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
        <!--End-right Info-->
      </div>
      <!--End-ROW-->
    </div>
    <!-- end container_crm -->
  </div>
  <!-- end main -->
</template>
