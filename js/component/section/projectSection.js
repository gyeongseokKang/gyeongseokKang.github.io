class ComponentProjectSection extends HTMLElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    super();
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["locale"];
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
      <section class="container pt mt fade-class" id="project">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Project</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          저는 깔끔한 코드, 읽기 쉬운 디자인패턴을 마음속에 담고 프로젝트를 끝까지 하기 위해 노력합니다.
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table borderless table-hover align-middle">
                <thead class="border-0 borderless">
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>프로젝트</th>
                    <th>소개</th>
                    <th>개발 참여도</th>
                    <th>추가 정보</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="table-title" scope="col">GUI 기반 통계 플랫폼 : HyperData</th>
                    <td>
                      <div>[티맥스] 통계 플랫폼 : Jupyter notebook 상에서 동작하는 GUI 기반 통계,EDA 플랫폼</div>
                      <div>#Statistic #Visualization #Ipython #python package</div>
                      <div>
                        <span class="badge bg-used">Python</span>
                        <span class="badge bg-used">Jupyter</span>
                        <span class="badge bg-used">Html</span>
                        <span class="badge bg-used">Javascript</span>
                        <span class="badge bg-used">Css</span>
                        <span class="badge bg-grey">Docker</span>
                        <span class="badge bg-grey">Kubernetes</span>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="">( 21/03~ current)</div>
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%">
                          <span class="progress-desc">개발중</span>
                        </div>
                      </div>
                      <div class="progress-desc">프론트 앤드, 파이썬 통계 담당</div>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th class="table-title" scope="col">데이터 시각화 서비스 : HyperData</th>
                    <td>
                      <div>[티맥스] 시각화 대시보드 : 오픈소스 라이브러리를 이용한 시각화 대시보드</div>
                      <div>#HyperData #Plotly.js #Tabulator.js #SunEditor.js #InterAction.js</div>
                      <div>
                        <span class="badge bg-used">React</span>
                        <span class="badge bg-used">TypeScript</span>
                        <span class="badge bg-used">Mobx</span>
                        <span class="badge bg-used">Babel</span>
                        <span class="badge bg-used">Webpakc</span>
                        <span class="badge bg-used">Plotly.js</span>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="">( 20/02~ current)</div>
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%">
                          <span class="progress-desc">개발중</span>
                        </div>
                      </div>
                      <div class="progress-desc">프론트 앤드 시각화파트</div>
                    </td>
                  </tr>
                  <tr>
                    <th class="table-title" scope="col">통합 모빌리티 서비스 : 카찹</th>
                    <td>
                      <div>
                        [카찹] 통합 모빌리티 서비스 : 다양하게 분산되어 있는 모빌리티 서비스를 한 곳에서 통합
                        검색->결제->반납의 서비스를 제공합니다.
                      </div>
                      <div>#통합모빌리티 #공유서비스 #대중교통 #가격 비교 #지도서비스 #스타트업 #Co-founder</div>
                      <div>
                        <span class="badge bg-used">Android</span>
                        <span class="badge bg-used">Java</span>
                        <span class="badge bg-used">REST API</span>
                        <span class="badge bg-used">GOOGLE MAP</span>
                        <span class="badge bg-used">FIREBASE</span>
                        <span class="badge bg-grey">Php</span>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="">( 18/12~ 20/02)</div>
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-info" style="width: 100%">
                          <span class="progress-desc">개발 완료</span>
                        </div>
                      </div>
                      <div class="progress-desc">안드로이드 앱 개발</div>
                    </td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#Modal1">
                        <i class="bi bi-file-earmark-slides"></i>
                        <div class="modal" id="Modal1" tabindex="-1" aria-labelledby="Modal1Label" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="Modal1Label">통합 모빌리티 서비스 : 카찹</h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <video muted autoplay controls loop width="100%" height="100%">
                                  <source src="assets/video/carchap_service.mp4" type="video/mp4" />
                                  <strong>Your browser does not support the video tag.</strong>
                                </video>
                                <p class="modal-desc">
                                  <br />서비스 개요 : 파편화된 모빌리티 서비스를 한 곳에서 <br />사용 언어 : 자바,
                                  코틀린 <br />사용 라이브러리 : Google Map. Firebase, Social Login, etc.. <br />개발
                                  기여도 : 안드로이드 앱 개발(단독) <br />개발 기간 : 1년 6개월 <br />앱 링크 :
                                  <a
                                    href="https://play.google.com/store/apps/details?id=org.techtown.carchap_v11&hl=ko&gl=US"
                                    class="btn btn-google"
                                    target="_blank"
                                    >Google Play Store</a
                                  >
                                  <a
                                    href="https://apps.apple.com/us/app/%EC%B9%B4%EC%B0%B9-%EC%9D%B4%EB%8F%99%EC%88%98%EB%8B%A8-%ED%86%B5%ED%95%A9-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1506198003"
                                    class="btn btn-google"
                                    target="_blank"
                                    >App Store</a
                                  >
                                </p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">
              프로젝트들은 최근 개발한 순으로 정렬되어 있습니다
            </div>
          </div>
        </div>
      </section>
      <section class="container pt fade-class" id="toyProject">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Toy Project</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          업무 외에 배우고 싶은 기술, 언어를 사용해보며 나아가고 있습니다.
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table borderless table-hover align-middle">
                <thead class="border-0 borderless">
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>프로젝트</th>
                    <th>소개</th>
                    <th>개발 참여도</th>
                    <th>추가 정보</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="table-title" scope="col">Dr.폴리오</th>
                    <td>
                      <div>금용공학 모델 + AI를 이용한 최적의 포트폴리오 생성, 추천 서비스</div>
                      <div>#FinTech #Toy #Finance #AI</div>
                      <div>
                        <span class="badge bg-used">React</span>
                        <span class="badge bg-used">TypeScript</span>
                        <span class="badge bg-used">Material UI</span>
                        <span class="badge bg-used">Plotly.js</span>
                        <span class="badge bg-used">Webpack</span>
                        <span class="badge bg-used">Babel</span>
                        <span class="badge bg-grey">Python</span>
                        <span class="badge bg-grey">Flask</span>
                        <span class="badge bg-grey">AWS</span>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="">( now ~ )</div>
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%">
                          <span class="progress-desc">개발중</span>
                        </div>
                      </div>
                      <div class="progress-desc">프론트앤드 전담</div>
                    </td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#Modal2">
                        <i class="bi bi-file-earmark-slides"></i>
                        <div class="modal" id="Modal2" tabindex="-1" aria-labelledby="Modal2Label" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="Modal2Label">Dr.폴리오</h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <video muted autoplay controls loop width="100%" height="100%">
                                  <source src="assets/video/dr.folio_service.mp4" type="video/mp4" />
                                  <strong>Your browser does not support the video tag.</strong>
                                </video>
                                <p class="modal-desc">
                                  <br />서비스 개요 : 금융공학 모델을 바탕으로 최적의 포트플리오를 제공 <br />사용 언어
                                  : 타입스크립트, 파이썬<br />개발 기여도 : 프론트앤드 개발(단독) <br />개발 기간 :
                                  3개월 <br />소스 코드 :
                                  <a
                                    href="https://github.com/gyeongseokKang/dividend"
                                    class="btn btn-google"
                                    target="_blank"
                                    >GitHub</a
                                  >
                                  <br />홈페이지 :
                                  <a href="https://dr-folio.github.io/" target="_blank">Go page</a>
                                </p>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">
              프로젝트들은 최근 개발한 순으로 정렬되어 있습니다
            </div>
          </div>
        </div>
      </section>
      `;
  }
}

customElements.define("component-project-section", ComponentProjectSection);
