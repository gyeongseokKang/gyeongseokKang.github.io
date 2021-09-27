class ComponentStackSection extends HTMLElement {
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
          <section class="container pt mt mb-5 fade-class" id="stacks">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Stacks</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          T자형 지식을 추구합니다. 빠르게 발전하는 환경 속에게 서비스에 필요한 기술과 언어를 꾸준히 습득하여 실제
          서비스에 적용하고자 할때 적절히 사용하고 싶습니다.
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead>
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>기술 구분</th>
                    <th>로고</th>
                    <th>활용 수준</th>
                    <th>평가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col" class="table-title letsp-md">JavaScript</th>
                    <td>
                      <a
                        href="https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
                        target="_blank"
                      >
                        <img src="/assets/img/stack/js.png" alt="JavaScript Logo" />
                      </a>
                    </td>
                    <td>
                      <span class="ls-0">JavaScript, ECMAScript, Webpack</span>
                      과 Babel등을 위주로 개발하며 모듈을 극대화한 자바스크립트 프로그래밍을 추구합니다.<br />
                      최신 문법인 <span class="ls-0">ES6</span>부터 핵심이 되는 자바스크립트 코어까지 가장 깊게 공부하고
                      사용하고 있는 언어이기도 합니다.
                    </td>
                    <td>
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md">TypeScript</th>
                    <td>
                      <a
                        href="https://ko.wikipedia.org/wiki/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
                        target="_blank"
                      >
                        <img src="/assets/img/stack/ts.png" alt="TypeScript Logo" />
                      </a>
                    </td>
                    <td>
                      타입스크립트의 견고한 정적 분석을 통해 개발 유지보수성을 향상시키고 사이드이펙트가 없는 프로그램을
                      만들기 위해 도입하고 사용하고 있습니다. 자바스크립트의 슈퍼셋언어로서 다양한 기능과 장기적인
                      편의가 있어 자바스크립트와 함께 꾸준히 배워가고 있습니다.
                    </td>
                    <td>
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md">React</th>
                    <td>
                      <a
                        href="https://ko.wikipedia.org/wiki/%EB%A6%AC%EC%95%A1%ED%8A%B8_(%EC%9B%B9_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)"
                        target="_blank"
                      >
                        <img src="/assets/img/stack/react.svg" alt="React Logo" />
                      </a>
                    </td>
                    <td>
                      기본 레거시에서 React로 이식하는 작업으로 React를 접하고 현재에도 계속 사용중입니다. React를
                      시작으로 다양한 라이브러리의 조합을 고려하고 시도해보며 프론트앤드 개발자로써 서비스를 개발하고
                      있습니다. 또한 Jest와 Storybook를 이용한 테스트를 진행하며 완성도를 높이고 있습니다.
                    </td>
                    <td>
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md">SQL</th>
                    <td>
                      <a href="https://ko.wikipedia.org/wiki/SQL" target="_blank">
                        <img src="/assets/img/stack/sql.png" alt="SQL Logo" />
                      </a>
                    </td>
                    <td>
                      <span class="ls-0">oracle, tibero SQL</span>를 적절하게 사용하고 튜닝할 수 있으며, 간단한 쿼리
                      작업을 능숙하게 수행할 수 있습니다. 현재 틈틈히 계속 공부중이며 SQLD를 취득했고 SQLP를 위해
                      공부중입니다. 시각화에 필요한 데이터 쿼리를 적절하게 조합할 수 있는 query Generater 모듈을 설계 및
                      구현하였으며 계속 업그레이드 중에 있습니다.
                    </td>
                    <td>
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md">Android</th>
                    <td>
                      <a href="https://koajs.com/" target="_blank">
                        <img src="/assets/img/stack/android.png" alt="Android Logo" />
                      </a>
                    </td>
                    <td>
                      다양한 REST API, 비동기적인 서비스 연동에 경험이 있으며, GoogleMap를 기반으로 하는 어플리케이션을
                      초기 설계부터 실제 서비스까지 전부 담당했습니다. MVVM 패턴으로 설계를 진행 할 수 있으며, 그 외
                      RxJava, Kotlin를 이용한 안드로이드 개발도 가능합니다.
                    </td>
                    <td>
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">
              5개의 별은 부끄럽게도 평생을 공부해도 가질수 있을까 의문입니다만, 쟁취해보려고 합니다.
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 30px">
          <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
            <div class="card mb-3">
              <div id="chart_frondEnd"></div>
              <div class="card-body">
                <div>
                  <h4 class="card-title fonsiz-xl fonwei-en-xxl letsp-xxl text-upper text-center text-primary">
                    Front End
                  </h4>
                </div>
                <div class="card-text fonsiz-sm fonwei-kr-sm letsp-sm mb-3 mt-3 px-2">
                  <span class="ls-0">JavaScript</span>를 가장 많이 사용해 왔으며 가장 자신 있는 언어입니다. 특히
                  <span class="ls-0">React</span>에 관심이 많습니다.
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
            <div class="card mb-3">
              <div id="chart_backEnd"></div>
              <div class="card-body">
                <h4 class="card-title fonsiz-xl fonwei-en-xxl letsp-xxl text-upper text-center text-primary">
                  Back end
                </h4>
                <div class="card-text fonsiz-sm fonwei-kr-sm letsp-sm mb-3 mt-3 px-2">
                  <span class="ls-0">Node.js</span>를 가장 많이 사용하며 <span class="ls-0">Express.js, Koa </span>등의
                  프레임워크를 활용하고 있습니다 <span class="ls-0">Deno</span>를 공부해보고 싶습니다.
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
            <div class="card mb-3">
              <div id="chart_database"></div>
              <div class="card-body">
                <h4 class="card-title fonsiz-xl fonwei-en-xxl letsp-xxl text-upper text-center text-primary">
                  Data base
                </h4>
                <div class="card-text fonsiz-sm fonwei-kr-sm letsp-sm mb-3 mt-3 px-2">
                  <span class="ls-0">MongoDB</span>를 가장 좋아하며 <span class="ls-0">Mongoose</span>를 활용하고
                  있습니다. 물론 <span class="ls-0">MySQL</span>도 사용하는 중이며 <span class="ls-0">GraphQL</span>에
                  관심이 많습니다.
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 d-flex align-items-stretch">
            <div class="card mb-3">
              <div id="chart_util"></div>
              <div class="card-body">
                <h4 class="card-title fonsiz-xl fonwei-en-xxl letsp-xxl text-upper text-center text-primary">
                  Utilities
                </h4>
                <div class="card-text fonsiz-sm fonwei-kr-sm letsp-sm mb-3 mt-3 px-2">
                  <span class="ls-0">GraphQL, Asana, Trello, AdobeXd, GitHub, Redmine</span>
                  등 사용하고 있습니다. 더 많이 알수록 효율은 더 높아진다고 믿습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("component-stack-section", ComponentStackSection);
