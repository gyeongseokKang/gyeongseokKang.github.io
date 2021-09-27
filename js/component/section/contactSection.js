class ComponentContactSection extends HTMLElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    super();
  }

  connectedCallback() {
    // DOM에 추가되었다. 렌더링 등의 처리를 하자.
    this.render();
  }

  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    this.stop();
  }

  render() {
    this.innerHTML = `
          <section class="container pt mt fade-class" id="contact">
        <div class="row">
          <div class="col-lg-7 mx-auto text-center mb-5">
            <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Contact</h2>
          </div>
        </div>
      </section>
      <section class="container backimg fade-class">
        <div class="name-card d-flex justify-content-center">
          <div class="contact-body shadow">
            <div class="text-center mb-4">
              <h1>Kang Gyeong Seok</h1>
              <small>FrontEnd Developer</small>
            </div>
            <div class="d-flex">
              <div class="ps-3">
                <ul class="list-unstyled">
                  <li>
                    <span>
                      <i class="bi bi-person-check-fill"></i>
                      Position : <strong>Developer</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="bi bi-envelope"></i>
                      Email :
                      <a class="fancy-link" href="mailto:gyeongseok.kang@gmail.com"> gyeongseok.kang@gmail.com </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="bi bi-telephone-inbound"></i>
                      Phone :
                      <a class="fancy-link" href="tel:010-6626-1491">
                        <strong>010-6626-3321</strong>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="bi bi-house-door"></i>
                      Blog :
                      <a class="fancy-link" href="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C">
                        <strong>Dev & Private blog</strong>
                      </a>
                    </span>
                  </li>
                </ul>
                <div>“같이 일하고싶은 동료가 되겠습니다.”</div>
                <div class="text-center">
                  <a href="https://github.com/gyeongseokKang"><img src="assets/brand/github.svg" /></a>
                  <a href="https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"
                    ><img src="assets/brand/linkedIn.svg"
                  /></a>
                  <a href="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
                    ><img src="assets/brand/tistory-logo.svg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- footer 시작  -->
        <footer class="container mt-auto mb-5">
          <div>
            <br />
            <hr />
          </div>

          <div class="license-copy text-center">
            ⓒ 2021.
            <a class="fonwei-en-xxl" href="http://kijepark.com/">Kije’s LAB</a>
            All Rights Reserved
            <a
              class="fonwei-en-xxl"
              href="http://kijepark.com/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%B0%95%EA%B8%B0%EC%A0%9C%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4.html"
              >Kije’s RESUME</a
            >
            .
            <a class="fonwei-en-xxl" href="#" data-bs-toggle="modal" data-bs-target="#myModal3"
              >Creative Commons License</a
            >
          </div>
          <div
            class="modal"
            data-aos="fade-left"
            id="myModal3"
            tabindex="-1"
            aria-labelledby="myModal3Label"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="myModal3Label">THEME 라이센스 정책</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center mt-3" mb-5>
                  <img src="assets/svg/license.svg" alt="" />
                  <p class="modal-desc">
                    라이센스는
                    <strong> 크리에이티브 커먼즈 라이센스의 저작자표시-비영리(CC BY-NC)</strong>로 저작자와 출처 등을
                    표시하면 저작물의 변경, 2차적 저작물의 작성을 포함하여 자유롭게 이용 하실 수 있습니다.<br />
                    ( 단, 영리적 이용은 허용되지 않습니다 ) <br /><br />
                    테마에 적용된 모든 사진 이미지는 저작권 문제로 인해 절대 사용 하시면 안됩니다.<br /><br />
                    문의 :
                    <a href="mailto:kijepark@kijeslab.com">
                      <span class="fonsiz-md fonwei-en-xl letsp-md color-purple-opac">kijepark@kijeslab.com</span>
                    </a>
                  </p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- footer 끝  -->
      </section>
    `;
  }
}

customElements.define("component-contact-section", ComponentContactSection);
