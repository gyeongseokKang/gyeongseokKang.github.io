class ComponentAnnualworkSection extends HTMLElement {
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
          <section class="container pt fade-class" id="annualizedWork">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Annualized work</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          연차별로 중점적으로 했던 업무를 한줄로 간략히 정리해보았습니다.
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table borderless table-hover align-middle">
                <thead class="border-0 borderless">
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>연차(Annual)</th>
                    <th>소개(Explanation)</th>
                    <th>중점 기술(Main Stack)</th>
                    <th>추가 정보(Extra)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="table-title" scope="col">2년차</th>
                    <td>
                      <div>Web App 마이크레이션, BI 플랫폼 고도화</div>
                      <div>
                        기존 자사 라이브러리와 프레임워크로 이뤄진 상용제품을 React, Wepback, Babel를 통한 마이그레이션
                        작업
                      </div>
                    </td>
                    <td class="text-center">
                      <div>
                        <img src="https://img.shields.io/badge/Javscript--grey?logo=javascript" />
                        <img src="https://img.shields.io/badge/Typscript--grey?logo=typescript" />
                        <img src="https://img.shields.io/badge/react--grey?logo=react" />
                        <img src="https://img.shields.io/badge/mobx--grey?logo=mobx" />
                        <img src="https://img.shields.io/badge/sass--grey?logo=sass" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="table-title" scope="col">1년차</th>
                    <td>
                      <div>Web App(BI툴의 시각화 담당) 개발</div>
                      <div>다양한 차트 라이브러리와 코드 최적화를 통한 데이터 분석 시각화 관련 작업</div>
                    </td>
                    <td class="text-center">
                      <div>
                        <img src="https://img.shields.io/badge/Javscript--grey?logo=javascript" />
                        <img src="https://img.shields.io/badge/Top.js--grey?logo=top" />
                        <img src="https://img.shields.io/badge/Plotly.js--grey?logo=plotly" />
                        <img src="https://img.shields.io/badge/SunEditor--grey?logo=sunEditor" />
                        <img src="https://img.shields.io/badge/Tabulator--grey?logo=tabulator" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="table-title" scope="col">0년차</th>
                    <td>
                      <div>모빌리티 서비스 앱 개발</div>
                      <div>공공API와 기업API를 이용한 통합 모빌리티 플랫폼</div>
                    </td>
                    <td class="text-center">
                      <div>
                        <img src="https://img.shields.io/badge/Android--grey?logo=android" />
                        <img src="https://img.shields.io/badge/Firebase--grey?logo=firebase" />
                      </div>
                    </td>
                    <td class="text-center">
                      <div>스타트업, 창업</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">
              가장 최근 순으로 정렬되어 있습니다
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("component-annualwork-section", ComponentAnnualworkSection);
